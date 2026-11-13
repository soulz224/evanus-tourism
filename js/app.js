// Application Logic for Evanus Tourism - Vietnam Travel & Stay Hub
document.addEventListener('DOMContentLoaded', () => {
    const data = window.VIETNAM_TRAVEL_DATA;
    if (!data) {
        console.error('Data not loaded');
        return;
    }

    // State
    let currentRegion = 'all';
    let currentHotelFilter = 'all';
    let currentAttrCategory = 'all';
    let searchKeyword = '';

    // Initialize all modules
    initNavigation();
    initHeroSearch();
    renderDestinations();
    renderHotels();
    renderAttractions();
    renderCulinary();
    initLeafletMap();
    initCostEstimator();
    initModals();
});

// Utility: Format currency in VND
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Toast notification helper
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgClass = type === 'success' ? 'bg-emerald-600' : (type === 'error' ? 'bg-rose-600' : 'bg-sky-600');
    const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-info-circle');

    toast.className = `toast-msg flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-white ${bgClass} max-w-md pointer-events-auto border border-white/20`;
    toast.innerHTML = `
        <i class="fa-solid ${icon} text-xl flex-shrink-0"></i>
        <div class="text-sm font-medium leading-relaxed">${message}</div>
        <button class="ml-auto text-white/80 hover:text-white p-1" onclick="this.parentElement.remove()">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 350);
    }, 4500);
}

// 1. Navigation & Mobile Menu
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close on nav link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Header scroll background effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('shadow-md', 'glass-nav');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('shadow-md');
        }
    });
}

// 2. Hero Search Bar
function initHeroSearch() {
    const heroInput = document.getElementById('hero-search-input');
    const heroBtn = document.getElementById('hero-search-btn');

    const executeSearch = () => {
        const query = heroInput.value.trim().toLowerCase();
        if (!query) {
            showToast('Vui lòng nhập tên điểm đến hoặc trải nghiệm cần tìm!', 'info');
            return;
        }

        // Scroll to destinations section
        const destSection = document.getElementById('destinations-section');
        if (destSection) {
            destSection.scrollIntoView({ behavior: 'smooth' });
        }

        // Filter destinations
        const searchInput = document.getElementById('dest-search-input');
        if (searchInput) {
            searchInput.value = query;
            renderDestinations(query);
        }
    };

    if (heroBtn) heroBtn.addEventListener('click', executeSearch);
    if (heroInput) {
        heroInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') executeSearch();
        });
    }

    // Quick tag chips in hero
    document.querySelectorAll('.hero-quick-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const dest = tag.dataset.dest;
            const destSection = document.getElementById('destinations-section');
            if (destSection) destSection.scrollIntoView({ behavior: 'smooth' });
            renderDestinations(dest);
            const searchInput = document.getElementById('dest-search-input');
            if (searchInput) searchInput.value = dest;
        });
    });
}

// 3. Render Destinations
function renderDestinations(keyword = '') {
    const container = document.getElementById('destinations-grid');
    if (!container) return;

    const data = window.VIETNAM_TRAVEL_DATA.destinations;
    const filterRegion = window.currentRegion || 'all';

    let filtered = data.filter(item => {
        const matchRegion = filterRegion === 'all' || item.region === filterRegion;
        const matchKeyword = !keyword || 
            item.name.toLowerCase().includes(keyword.toLowerCase()) || 
            item.province.toLowerCase().includes(keyword.toLowerCase()) ||
            item.description.toLowerCase().includes(keyword.toLowerCase());
        return matchRegion && matchKeyword;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-16 text-center text-slate-500">
                <i class="fa-solid fa-compass text-5xl mb-3 text-slate-300"></i>
                <p class="text-lg font-medium">Không tìm thấy điểm đến phù hợp với từ khóa "${keyword}".</p>
                <button class="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg text-sm hover:bg-sky-700 transition" onclick="resetDestFilter()">Xem tất cả điểm đến</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => `
        <div class="card-zoom bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col group cursor-pointer" onclick="openDestinationDetail('${item.id}')">
            <div class="relative h-60 w-full overflow-hidden rounded-t-2xl">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full badge-unesco backdrop-blur-md shadow-sm">
                    ${item.tag}
                </span>
                <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1 font-medium">
                    <i class="fa-solid fa-cloud-sun text-amber-400"></i> ${item.temperature}
                </span>
                <div class="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
                    <span class="text-xs bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg font-medium">
                        ${item.regionName}
                    </span>
                    <div class="bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                        <i class="fa-solid fa-star star-filled text-xs"></i> ${item.rating} (${item.reviewsCount})
                    </div>
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition flex items-center justify-between">
                        ${item.name}
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs text-slate-400 group-hover:text-sky-600"></i>
                    </h3>
                    <p class="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
                        <i class="fa-solid fa-location-dot text-rose-500"></i> ${item.province}
                    </p>
                    <p class="text-slate-600 text-sm mt-3 line-clamp-2 leading-relaxed">
                        ${item.description}
                    </p>
                    <div class="mt-4 flex flex-wrap gap-1.5">
                        ${item.highlights.slice(0, 2).map(h => `
                            <span class="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                                <i class="fa-solid fa-check text-sky-600 text-[10px] mr-1"></i>${h}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div>
                        <span class="block text-slate-400">Chi phí dự kiến:</span>
                        <span class="font-bold text-sky-700 text-sm">${item.avgPrice}</span>
                    </div>
                    <span class="font-semibold text-sky-600 group-hover:underline flex items-center gap-1">
                        Khám phá ngay <i class="fa-solid fa-chevron-right text-[10px]"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

window.resetDestFilter = function() {
    window.currentRegion = 'all';
    const searchInput = document.getElementById('dest-search-input');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.dest-tab-btn').forEach(btn => {
        btn.classList.remove('bg-sky-600', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-700');
    });
    const allBtn = document.querySelector('[data-region="all"]');
    if (allBtn) {
        allBtn.classList.add('bg-sky-600', 'text-white');
        allBtn.classList.remove('bg-slate-100', 'text-slate-700');
    }
    renderDestinations();
};

// Handle destination region tab change
document.querySelectorAll('.dest-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.dest-tab-btn').forEach(b => {
            b.classList.remove('bg-sky-600', 'text-white');
            b.classList.add('bg-slate-100', 'text-slate-700');
        });
        btn.classList.add('bg-sky-600', 'text-white');
        btn.classList.remove('bg-slate-100', 'text-slate-700');
        window.currentRegion = btn.dataset.region;
        const searchInput = document.getElementById('dest-search-input');
        const query = searchInput ? searchInput.value : '';
        renderDestinations(query);
    });
});

// Destination search input
const destSearchInput = document.getElementById('dest-search-input');
if (destSearchInput) {
    destSearchInput.addEventListener('input', (e) => {
        renderDestinations(e.target.value.trim());
    });
}

// 4. Render Hotels & Booking (Evanus Tourism Verified Partner Hotels)
function renderHotels(filterType = 'all') {
    const container = document.getElementById('hotels-grid');
    if (!container) return;

    const hotels = window.VIETNAM_TRAVEL_DATA.hotels;
    const filtered = filterType === 'all' 
        ? hotels 
        : hotels.filter(h => {
            if (filterType === 'dalat') return h.destinationId === 'da-lat' || h.type === 'dalat';
            if (filterType === 'nhatrang') return h.destinationId === 'nha-trang' || h.type === 'nhatrang';
            if (filterType === '4star') return h.stars === 4;
            if (filterType === '3star') return h.stars === 3;
            return h.type === filterType;
        });

    container.innerHTML = filtered.map(hotel => `
        <div class="card-zoom bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col group overflow-hidden">
            <div class="relative h-64 w-full overflow-hidden">
                <img src="${hotel.image}" alt="${hotel.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full badge-hot shadow-md">
                    ${hotel.badge}
                </span>
                <span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-amber-400 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                    ${'★'.repeat(hotel.stars)}
                </span>
                <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white flex items-center gap-1.5">
                    <i class="fa-solid fa-location-dot text-rose-400"></i> ${hotel.destinationName}
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span class="text-sky-700 font-semibold uppercase tracking-wider text-[11px]">${hotel.typeName}</span>
                        <span class="flex items-center gap-1 text-slate-700 font-bold">
                            <i class="fa-solid fa-star star-filled"></i> ${hotel.rating} (${hotel.reviewsCount} đánh giá)
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug">
                        ${hotel.name}
                    </h3>
                    <p class="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <i class="fa-solid fa-map-pin text-slate-400"></i> ${hotel.location}
                    </p>
                    <p class="text-slate-600 text-xs mt-3 line-clamp-2">
                        ${hotel.description}
                    </p>

                    <!-- Links to actual photo album and price sheets provided by user -->
                    <div class="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                        ${hotel.albumUrl ? `
                            <a href="${hotel.albumUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-sky-50 text-sky-700 hover:bg-sky-100 rounded-lg border border-sky-200 transition">
                                <i class="fa-regular fa-images text-sky-600"></i> Xem Album Ảnh KS
                            </a>
                        ` : ''}
                        ${hotel.priceUrl ? `
                            <a href="${hotel.priceUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition">
                                <i class="fa-solid fa-file-excel text-emerald-600"></i> Bảng Giá Gốc
                            </a>
                        ` : ''}
                        ${hotel.websiteUrl ? `
                            <a href="${hotel.websiteUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 bg-slate-50 text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 transition">
                                <i class="fa-solid fa-globe text-slate-500"></i> Website
                            </a>
                        ` : ''}
                    </div>

                    <div class="mt-3 flex flex-wrap gap-1.5">
                        ${hotel.amenities.slice(0, 3).map(a => `
                            <span class="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200">
                                <i class="fa-solid fa-check text-sky-600 text-[10px] mr-1"></i>${a}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        <span class="text-xs line-through text-slate-400 block">${formatCurrency(hotel.pricePerNight)}</span>
                        <div class="flex items-baseline gap-1">
                            <span class="text-xl font-extrabold text-rose-600">${formatCurrency(hotel.discountPrice)}</span>
                            <span class="text-xs text-slate-500">/đêm</span>
                        </div>
                    </div>
                    <button class="px-4 py-2.5 bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-sky-500/25 transition active:scale-95 flex items-center gap-1.5" onclick="openBookingModal('${hotel.id}')">
                        <i class="fa-regular fa-calendar-check"></i> Đặt Phòng
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Hotel filter tabs
document.querySelectorAll('.hotel-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.hotel-filter-btn').forEach(b => {
            b.classList.remove('bg-sky-600', 'text-white');
            b.classList.add('bg-slate-100', 'text-slate-700');
        });
        btn.classList.add('bg-sky-600', 'text-white');
        btn.classList.remove('bg-slate-100', 'text-slate-700');
        renderHotels(btn.dataset.hotelType);
    });
});

// 5. Render Attractions & Entertainment
function renderAttractions(category = 'all') {
    const container = document.getElementById('attractions-grid');
    if (!container) return;

    const items = window.VIETNAM_TRAVEL_DATA.attractions;
    const filtered = category === 'all' ? items : items.filter(a => a.category === category);

    container.innerHTML = filtered.map(item => `
        <div class="card-zoom bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group">
            <div class="relative h-56 w-full">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                <span class="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                    ${item.categoryName}
                </span>
                <span class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg font-medium flex items-center gap-1">
                    <i class="fa-solid fa-clock text-amber-400"></i> ${item.openingHours}
                </span>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span class="text-sky-700 font-semibold"><i class="fa-solid fa-location-dot text-rose-500 mr-1"></i>${item.destinationName}</span>
                        <span class="font-bold text-slate-800"><i class="fa-solid fa-star star-filled"></i> ${item.rating}</span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition leading-snug">
                        ${item.name}
                    </h3>
                    <div class="mt-3 bg-amber-50 rounded-xl p-3 border border-amber-100/80">
                        <span class="text-xs font-semibold text-amber-900 flex items-center gap-1 mb-1">
                            <i class="fa-solid fa-ticket text-amber-600"></i> Giá vé tham khảo:
                        </span>
                        <p class="text-xs text-amber-800 font-bold">${item.ticketPrice}</p>
                    </div>
                    <div class="mt-3">
                        <span class="text-xs font-semibold text-slate-700 block mb-1">Trải nghiệm không thể bỏ lỡ:</span>
                        <ul class="text-xs text-slate-600 space-y-1">
                            ${item.highlights.slice(0, 3).map(h => `
                                <li class="flex items-start gap-1.5">
                                    <i class="fa-solid fa-sparkles text-amber-500 text-[10px] mt-0.5"></i>
                                    <span>${h}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                <div class="mt-4 pt-3 border-t border-slate-100">
                    <p class="text-[11px] text-slate-500 italic flex items-start gap-1">
                        <i class="fa-solid fa-lightbulb text-amber-500 text-xs mt-0.5"></i>
                        <span>${item.tips}</span>
                    </p>
                </div>
            </div>
        </div>
    `).join('');
}

// Attraction category buttons
document.querySelectorAll('.attr-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.attr-tab-btn').forEach(b => {
            b.classList.remove('bg-emerald-600', 'text-white');
            b.classList.add('bg-slate-100', 'text-slate-700');
        });
        btn.classList.add('bg-emerald-600', 'text-white');
        btn.classList.remove('bg-slate-100', 'text-slate-700');
        renderAttractions(btn.dataset.category);
    });
});

// 6. Culinary Section
function renderCulinary() {
    const container = document.getElementById('culinary-grid');
    if (!container) return;

    const list = window.VIETNAM_TRAVEL_DATA.culinary;
    container.innerHTML = list.map(item => `
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition">
            <div class="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <span class="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">${item.region}</span>
                    <h4 class="text-base font-bold text-slate-900 mt-1">${item.name}</h4>
                    <p class="text-xs text-slate-600 mt-1 leading-relaxed">${item.desc}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <span class="font-semibold text-slate-700">Địa chỉ gợi ý:</span> ${item.places}
                </div>
            </div>
        </div>
    `).join('');
}

// 7. Interactive Leaflet Map of Vietnam (Focus on South Central, Highlands & Southern Vietnam)
let leafletMapInstance = null;
function initLeafletMap() {
    const mapElement = document.getElementById('vietnam-map');
    if (!mapElement || typeof L === 'undefined') return;

    // Center on South Central, Highlands & Southern Vietnam (Đà Lạt, Nha Trang, Vũng Tàu, Phú Quốc)
    leafletMapInstance = L.map('vietnam-map', {
        scrollWheelZoom: false
    }).setView([11.6, 107.8], 7);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(leafletMapInstance);

    // Add Destination Markers
    const destinations = window.VIETNAM_TRAVEL_DATA.destinations;

    destinations.forEach(dest => {
        // Custom divIcon
        const customIcon = L.divIcon({
            className: 'custom-map-icon',
            html: `<div class="custom-pin"><i class="fa-solid fa-location-dot"></i></div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -30]
        });

        const popupContent = `
            <div class="w-64">
                <img src="${dest.image}" class="w-full h-28 object-cover">
                <div class="p-3">
                    <div class="flex items-center justify-between text-xs text-slate-500">
                        <span class="font-bold text-sky-700">${dest.regionName}</span>
                        <span class="text-amber-500 font-bold">★ ${dest.rating}</span>
                    </div>
                    <h4 class="font-bold text-sm text-slate-900 mt-1">${dest.name}</h4>
                    <p class="text-xs text-slate-600 line-clamp-2 mt-1">${dest.description}</p>
                    <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-xs font-semibold text-rose-600">${dest.avgPrice}</span>
                        <button class="text-xs bg-sky-600 text-white px-2.5 py-1 rounded hover:bg-sky-700 transition" onclick="openDestinationDetail('${dest.id}')">Chi tiết</button>
                    </div>
                </div>
            </div>
        `;

        L.marker([dest.lat, dest.lng], { icon: customIcon })
            .addTo(leafletMapInstance)
            .bindPopup(popupContent);
    });
}

// 8. Smart Trip Cost Estimator & Itinerary Planner
function initCostEstimator() {
    const destSelect = document.getElementById('calc-dest');
    const daysSelect = document.getElementById('calc-days');
    const styleSelect = document.getElementById('calc-style');
    const peopleInput = document.getElementById('calc-people');
    const calcBtn = document.getElementById('calc-submit-btn');

    const updateCalculation = () => {
        const destKey = destSelect ? destSelect.value : 'da-nang';
        const days = parseInt(daysSelect ? daysSelect.value : '3', 10);
        const style = styleSelect ? styleSelect.value : 'standard';
        const people = parseInt(peopleInput ? peopleInput.value : '2', 10) || 1;

        // Base multipliers per person per day
        let hotelPerNight = 800000;
        let foodPerDay = 350000;
        let flightPerPerson = 1600000;
        let ticketPerDay = 450000;

        if (style === 'budget') {
            hotelPerNight = 450000;
            foodPerDay = 220000;
            flightPerPerson = 1200000;
            ticketPerDay = 250000;
        } else if (style === 'luxury') {
            hotelPerNight = 3200000;
            foodPerDay = 900000;
            flightPerPerson = 3500000;
            ticketPerDay = 950000;
        }

        // Calculations
        const roomsNeeded = Math.ceil(people / 2);
        const nights = Math.max(1, days - 1);
        const totalHotel = hotelPerNight * nights * roomsNeeded;
        const totalFlight = flightPerPerson * people;
        const totalFood = foodPerDay * days * people;
        const totalTickets = ticketPerDay * days * people;
        const grandTotal = totalHotel + totalFlight + totalFood + totalTickets;
        const perPerson = Math.round(grandTotal / people);

        // Update UI
        const elFlight = document.getElementById('calc-res-flight');
        const elHotel = document.getElementById('calc-res-hotel');
        const elFood = document.getElementById('calc-res-food');
        const elTickets = document.getElementById('calc-res-tickets');
        const elTotal = document.getElementById('calc-res-total');
        const elPerPerson = document.getElementById('calc-res-perperson');

        if (elFlight) elFlight.innerText = formatCurrency(totalFlight);
        if (elHotel) elHotel.innerText = formatCurrency(totalHotel);
        if (elFood) elFood.innerText = formatCurrency(totalFood);
        if (elTickets) elTickets.innerText = formatCurrency(totalTickets);
        if (elTotal) elTotal.innerText = formatCurrency(grandTotal);
        if (elPerPerson) elPerPerson.innerText = `(~${formatCurrency(perPerson)} / người)`;

        // Show recommended itinerary
        renderRecommendedItinerary(destKey, days);
    };

    if (calcBtn) calcBtn.addEventListener('click', updateCalculation);
    [destSelect, daysSelect, styleSelect, peopleInput].forEach(elem => {
        if (elem) elem.addEventListener('change', updateCalculation);
    });

    // Initial run
    updateCalculation();
}

function renderRecommendedItinerary(destKey, days) {
    const itineraryBox = document.getElementById('calc-itinerary-preview');
    if (!itineraryBox) return;

    let key = 'da-lat-3n2d';
    if (destKey === 'nha-trang') key = 'nha-trang-3n2d';
    else if (destKey === 'vung-tau') key = 'vung-tau-2n1d';
    else if (destKey === 'phan-thiet') key = 'phan-thiet-2n1d';
    else if (destKey === 'phu-quoc') key = 'phu-quoc-4n3d';

    const sample = window.VIETNAM_TRAVEL_DATA.sampleItineraries[key] || window.VIETNAM_TRAVEL_DATA.sampleItineraries['da-lat-3n2d'];

    itineraryBox.innerHTML = `
        <div class="bg-sky-50/70 p-4 rounded-xl border border-sky-100">
            <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-sky-700 uppercase tracking-wider">
                    <i class="fa-solid fa-route mr-1"></i> Gợi Ý Lịch Trình Tối Ưu
                </span>
                <span class="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">${sample.cost}</span>
            </div>
            <h4 class="text-sm font-bold text-slate-800 mb-3">${sample.title}</h4>
            <div class="space-y-3">
                ${sample.days.map((d, index) => `
                    <div class="relative pl-6 border-l-2 border-sky-400 pb-2">
                        <div class="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-sky-600 ring-4 ring-sky-100"></div>
                        <h5 class="text-xs font-bold text-slate-900">${d.day}</h5>
                        <p class="text-xs text-slate-600 mt-1 leading-relaxed">${d.activities}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 9. Modals & Interactive Details
function initModals() {
    // Booking Form Promo code handler
    const promoInput = document.getElementById('booking-promo-input');
    const promoBtn = document.getElementById('booking-promo-btn');
    const promoMsg = document.getElementById('booking-promo-msg');

    if (promoBtn && promoInput) {
        promoBtn.addEventListener('click', () => {
            const code = promoInput.value.trim().toUpperCase();
            if (code === 'VIETNAM2026' || code === 'KHAMPHA') {
                window.currentDiscountRate = 0.15; // 15% discount
                promoMsg.innerHTML = '<span class="text-emerald-600 font-semibold text-xs"><i class="fa-solid fa-check"></i> Áp dụng thành công mã giảm 15%!</span>';
                updateBookingTotal();
            } else if (code) {
                promoMsg.innerHTML = '<span class="text-rose-600 font-semibold text-xs"><i class="fa-solid fa-xmark"></i> Mã không hợp lệ. Thử "VIETNAM2026"</span>';
            }
        });
    }

    // Modal close triggers
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.app-modal').forEach(m => m.classList.add('hidden'));
        });
    });

    // Close when clicking modal backdrop
    document.querySelectorAll('.app-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });

    // Booking submit button
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const guestName = document.getElementById('booking-fullname').value;
            const guestPhone = document.getElementById('booking-phone').value;
            const hotelName = document.getElementById('booking-hotel-name').innerText;
            const bookingCode = 'VN' + Math.floor(100000 + Math.random() * 900000);

            // Close modal
            document.getElementById('booking-modal').classList.add('hidden');

            // Show congratulations toast
            showToast(`Đặt phòng thành công! Mã đơn: ${bookingCode}. Chuyên viên tư vấn Evanus Tourism sẽ liên hệ qua SĐT ${guestPhone} trong 15 phút (Hotline: 0902 706 489).`, 'success');
        });
    }

    // Newsletter subscription form
    const subscribeForm = document.getElementById('newsletter-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            showToast(`Cảm ơn bạn! Cẩm nang du lịch và voucher ưu đãi 20% đã được gửi về ${emailInput.value}`, 'success');
            emailInput.value = '';
        });
    }
}

// Open Destination Detail Modal
window.openDestinationDetail = function(destId) {
    const dest = window.VIETNAM_TRAVEL_DATA.destinations.find(d => d.id === destId);
    if (!dest) return;

    const modal = document.getElementById('dest-detail-modal');
    if (!modal) return;

    document.getElementById('dest-modal-title').innerText = dest.name;
    document.getElementById('dest-modal-region').innerText = dest.regionName + ' • ' + dest.province;
    document.getElementById('dest-modal-img').src = dest.image;
    document.getElementById('dest-modal-desc').innerText = dest.description;
    document.getElementById('dest-modal-besttime').innerText = dest.bestTime;
    document.getElementById('dest-modal-temp').innerText = dest.temperature;
    document.getElementById('dest-modal-price').innerText = dest.avgPrice;

    const highlightsBox = document.getElementById('dest-modal-highlights');
    highlightsBox.innerHTML = dest.highlights.map(h => `
        <li class="flex items-center gap-2 text-slate-700 text-sm">
            <i class="fa-solid fa-circle-check text-sky-600"></i> ${h}
        </li>
    `).join('');

    modal.classList.remove('hidden');
};

// Open Booking Modal for Hotel
window.selectedHotel = null;
window.currentDiscountRate = 0;

window.openBookingModal = function(hotelId) {
    const hotel = window.VIETNAM_TRAVEL_DATA.hotels.find(h => h.id === hotelId);
    if (!hotel) return;

    window.selectedHotel = hotel;
    window.currentDiscountRate = 0;

    const modal = document.getElementById('booking-modal');
    if (!modal) return;

    document.getElementById('booking-hotel-name').innerText = hotel.name;
    document.getElementById('booking-hotel-loc').innerText = hotel.location;
    document.getElementById('booking-hotel-img').src = hotel.image;

    // Room type select options
    const roomSelect = document.getElementById('booking-room-type');
    roomSelect.innerHTML = hotel.roomTypes.map((room, idx) => `
        <option value="${idx}">${room}</option>
    `).join('');

    // Pre-populate dates (Today and Tomorrow)
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    document.getElementById('booking-checkin').value = today.toISOString().split('T')[0];
    document.getElementById('booking-checkout').value = tomorrow.toISOString().split('T')[0];

    // Reset promo
    const promoInput = document.getElementById('booking-promo-input');
    const promoMsg = document.getElementById('booking-promo-msg');
    if (promoInput) promoInput.value = '';
    if (promoMsg) promoMsg.innerHTML = '';

    updateBookingTotal();
    modal.classList.remove('hidden');
};

function updateBookingTotal() {
    if (!window.selectedHotel) return;

    const checkinVal = document.getElementById('booking-checkin').value;
    const checkoutVal = document.getElementById('booking-checkout').value;
    const roomsCount = parseInt(document.getElementById('booking-rooms').value, 10) || 1;

    let nights = 1;
    if (checkinVal && checkoutVal) {
        const d1 = new Date(checkinVal);
        const d2 = new Date(checkoutVal);
        const diffTime = d2 - d1;
        nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    }

    const basePrice = window.selectedHotel.discountPrice;
    const subtotal = basePrice * nights * roomsCount;
    const discountAmount = Math.round(subtotal * (window.currentDiscountRate || 0));
    const taxService = Math.round((subtotal - discountAmount) * 0.08); // 8% VAT
    const grandTotal = subtotal - discountAmount + taxService;

    document.getElementById('booking-nights-count').innerText = `${nights} đêm × ${roomsCount} phòng`;
    document.getElementById('booking-subtotal').innerText = formatCurrency(subtotal);
    document.getElementById('booking-discount-val').innerText = discountAmount > 0 ? `-${formatCurrency(discountAmount)}` : '0đ';
    document.getElementById('booking-tax-val').innerText = formatCurrency(taxService);
    document.getElementById('booking-grand-total').innerText = formatCurrency(grandTotal);
}

// Bind live changes in booking dates/rooms
['booking-checkin', 'booking-checkout', 'booking-rooms'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', updateBookingTotal);
});
