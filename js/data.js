// Dữ liệu Evanus Tourism - Chuyên Tour & Nghỉ Dưỡng Đà Lạt, Nha Trang, Vũng Tàu, Nam Trung Bộ & Miền Nam
const VIETNAM_TRAVEL_DATA = {
    // 1. Danh sách Điểm đến nổi bật (Tập trung Nam Trung Bộ, Tây Nguyên & Miền Nam)
    destinations: [
        {
            id: 'da-lat',
            name: 'Đà Lạt',
            province: 'Lâm Đồng',
            region: 'tay-nguyen',
            regionName: 'Tây Nguyên',
            tag: 'Xứ sở ngàn hoa & sương mù',
            rating: 4.9,
            reviewsCount: 5120,
            image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
            description: 'Thành phố mộng mơ trên cao nguyên Lâm Viên với những đồi thông bạt ngàn, khí hậu se lạnh quanh năm, biển mây bồng bềnh và vô số quán cà phê đẹp ngỡ ngàng.',
            highlights: ['Săn mây đồi chè Cầu Đất & Đa Phú', 'Thác Datanla trải nghiệm máng trượt alpine', 'Hồ Tuyền Lâm & Rừng thông nguyên sinh', 'Chợ đêm Đà Lạt thưởng thức sữa đậu nành nóng'],
            bestTime: 'Tháng 10 - Tháng 4 (Mùa hoa dã quỳ, mai anh đào & săn mây)',
            lat: 11.9404,
            lng: 108.4583,
            avgPrice: 'Từ 750.000đ/ngày',
            temperature: '18°C'
        },
        {
            id: 'nha-trang',
            name: 'Nha Trang',
            province: 'Khánh Hòa',
            region: 'nam-trung-bo',
            regionName: 'Nam Trung Bộ',
            tag: 'Vịnh biển quyến rũ hàng đầu',
            rating: 4.88,
            reviewsCount: 4680,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
            description: 'Vịnh biển nhiệt đới sôi động với bãi cát vàng mịn màng, nước biển trong vắt như pha lê, rạn san hô trù phú cùng quần thể giải trí đảo Hòn Tre đẳng cấp quốc tế.',
            highlights: ['Khu vui chơi VinWonders đảo Hòn Tre', 'Tour cano 3 đảo lặn ngắm san hô Hòn Mun', 'Tắm bùn khoáng nóng I-Resort phục hồi sức khỏe', 'Tháp Bà Ponagar kiến trúc Chăm Pa cổ kính'],
            bestTime: 'Tháng 1 - Tháng 8 (Biển êm, nắng vàng, lặn biển tuyệt đẹp)',
            lat: 12.2388,
            lng: 109.1967,
            avgPrice: 'Từ 850.000đ/ngày',
            temperature: '29°C'
        },
        {
            id: 'vung-tau',
            name: 'Vũng Tàu',
            province: 'Bà Rịa - Vũng Tàu',
            region: 'dong-nam-bo',
            regionName: 'Đông Nam Bộ',
            tag: 'Thiên đường nghỉ dưỡng cuối tuần',
            rating: 4.82,
            reviewsCount: 3980,
            image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
            description: 'Thành phố biển xinh đẹp chỉ cách TP.HCM 2 giờ lái xe, nổi tiếng với Bãi Sau sóng êm, Bãi Trước ngắm hoàng hôn, Mũi Nghinh Phong lộng gió và thiên đường hải sản tươi sống.',
            highlights: ['Check-in Cổng Trời Mũi Nghinh Phong', 'Chinh phục Tượng Chúa Kitô Vua lớn nhất châu Á', 'Cáp treo lên đỉnh núi ngắm cảnh Hồ Mây Park', 'Hải sản Bãi Sau & Lẩu cá đuối trứ danh'],
            bestTime: 'Quanh năm, đẹp nhất từ tháng 11 đến tháng 4',
            lat: 10.3460,
            lng: 107.0843,
            avgPrice: 'Từ 650.000đ/ngày',
            temperature: '28°C'
        },
        {
            id: 'phan-thiet',
            name: 'Phan Thiết - Mũi Né',
            province: 'Bình Thuận',
            region: 'nam-trung-bo',
            regionName: 'Nam Trung Bộ',
            tag: 'Thủ phủ Resort & Đồi Cát',
            rating: 4.85,
            reviewsCount: 3420,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
            description: 'Vùng đất của nắng, gió, biển xanh và những đồi cát mênh mông như sa mạc thu nhỏ. Nơi hội tụ các resort ven biển cao cấp và ẩm thực hải sản phong phú.',
            highlights: ['Tour xe Jeep vượt Đồi Cát Trắng Bàu Trắng', 'Check-in Suối Tiên thạch nhũ đỏ kỳ ảo', 'Làng chài Mũi Né rực rỡ thuyền thúng sớm mai', 'Lướt ván diều & mô tô nước ven bãi biển'],
            bestTime: 'Tháng 11 - Tháng 5 (Nắng đẹp, gió mát lý tưởng thể thao biển)',
            lat: 10.9804,
            lng: 108.2615,
            avgPrice: 'Từ 750.000đ/ngày',
            temperature: '30°C'
        },
        {
            id: 'phu-quoc',
            name: 'Đảo Ngọc Phú Quốc',
            province: 'Kiên Giang',
            region: 'tay-nam-bo',
            regionName: 'Miền Tây & Biển Đảo',
            tag: 'Thiên đường biển đảo nhiệt đới',
            rating: 4.92,
            reviewsCount: 5400,
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
            description: 'Hòn đảo ngọc phía Nam Tổ quốc sở hữu những bãi biển cát trắng mịn bậc nhất hành tinh, quần thể vui chơi giải trí không ngủ 24/7 và hoàng hôn lộng lẫy.',
            highlights: ['Bãi Sao & Bãi Khem cát trắng như kem', 'VinWonders & Vinpearl Safari hoang dã', 'Cáp treo 3 dây vượt biển Hòn Thơm dài nhất thế giới', 'Kênh đào Venice thu nhỏ tại Grand World'],
            bestTime: 'Tháng 10 - Tháng 4 năm sau',
            lat: 10.2899,
            lng: 103.9840,
            avgPrice: 'Từ 1.300.000đ/ngày',
            temperature: '29°C'
        },
        {
            id: 'ninh-thuan',
            name: 'Ninh Thuận - Vịnh Vĩnh Hy',
            province: 'Ninh Thuận',
            region: 'nam-trung-bo',
            regionName: 'Nam Trung Bộ',
            tag: 'Viên ngọc nguyên sơ & Vườn nho',
            rating: 4.86,
            reviewsCount: 2210,
            image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
            description: 'Vùng đất kỳ thú với Vịnh Vĩnh Hy - một trong 8 vịnh biển đẹp nhất Việt Nam, công viên đá Hang Rái kỳ vĩ, những vườn nho chín mọng trĩu quả và đồi cừu thơ mộng.',
            highlights: ['Đi tàu đáy kính ngắm san hô Vịnh Vĩnh Hy', 'Đón bình minh tại rạn đá san hô cổ Hang Rái', 'Thưởng thức nho tươi & rượu vang tại Vườn Nho Ba Mọi', 'Tháp Po Klong Garai văn hóa Chăm cổ đại'],
            bestTime: 'Tháng 3 - Tháng 9',
            lat: 11.7056,
            lng: 109.1867,
            avgPrice: 'Từ 700.000đ/ngày',
            temperature: '31°C'
        },
        {
            id: 'tp-ho-chi-minh',
            name: 'TP. Hồ Chí Minh',
            province: 'TP. Hồ Chí Minh',
            region: 'dong-nam-bo',
            regionName: 'Đông Nam Bộ',
            tag: 'Trung tâm sôi động phương Nam',
            rating: 4.8,
            reviewsCount: 5800,
            image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=80',
            description: 'Đại đô thị hiện đại, trung tâm kinh tế - giải trí náo nhiệt nhất cả nước với các công trình kiến trúc lịch sử, phố đi bộ sầm uất và du thuyền ngắm sông Sài Gòn lung linh.',
            highlights: ['Tòa tháp Landmark 81 & Dinh Độc Lập', 'Du thuyền ăn tối ngắm sông Sài Gòn về đêm', 'Phố đi bộ Nguyễn Huệ & Chợ Bến Thành', 'Khám phá ẩm thực đường phố đa dạng bậc nhất'],
            bestTime: 'Tháng 12 - Tháng 4 (Mùa khô mát mẻ, ít mưa)',
            lat: 10.8231,
            lng: 106.6297,
            avgPrice: 'Từ 800.000đ/ngày',
            temperature: '31°C'
        },
        {
            id: 'can-tho',
            name: 'Cần Thơ - Sông Nước Tây Đô',
            province: 'Cần Thơ',
            region: 'tay-nam-bo',
            regionName: 'Miền Tây & Biển Đảo',
            tag: 'Thủ phủ miền Tây sông nước',
            rating: 4.81,
            reviewsCount: 2850,
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
            description: 'Mảnh đất Tây Đô hào sảng với chợ nổi Cái Răng tấp nập ghe xuồng lúc rạng đông, những vườn cây ăn trái trĩu quả quanh năm và câu hò vọng cổ mộc mạc.',
            highlights: ['Khám phá Chợ nổi Cái Răng từ 5h sáng', 'Thăm miệt vườn trái cây trĩu quả Phong Điền', 'Bến Ninh Kiều & Cầu Tình Yêu về đêm', 'Nhà cổ Bình Thủy kiến trúc giao thoa Pháp - Việt'],
            bestTime: 'Tháng 9 - Tháng 11 (Mùa nước nổi) hoặc Tháng 5 - Tháng 8 (Mùa trái cây chín)',
            lat: 10.0452,
            lng: 105.7469,
            avgPrice: 'Từ 650.000đ/ngày',
            temperature: '29°C'
        }
    ],

    // 2. Danh sách Khách sạn do Evanus Tourism cung cấp (Đà Lạt & Nha Trang)
    hotels: [
        // --- KHÁCH SẠN ĐÀ LẠT ---
        {
            id: 'hotel-nature-dalat',
            name: 'NATURE HOTEL ĐÀ LẠT',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn Trung Tâm Đà Lạt',
            rating: 4.88,
            reviewsCount: 420,
            image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 850000,
            discountPrice: 650000,
            location: 'H16 Nguyễn Thị Nghĩa, Phường 2, TP. Đà Lạt',
            albumUrl: 'https://drive.google.com/drive/folders/1ZmpYeIyzvFXXikY4VmwnaI72UaWTZhci',
            priceUrl: 'https://docs.google.com/spreadsheets/d/1wVzA3uhiCO6QZVcLINOY9KB-GAZV3YBL/edit?gid=1410495904#gid=1410495904',
            amenities: ['Ban công view thoáng mát', 'Thang máy hiện đại', 'Trà & Cà phê miễn phí', 'Hỗ trợ thuê xe máy', 'Lễ tân 24/7'],
            badge: 'Đối Tác Chiến Lược Evanus',
            description: 'Khách sạn thiết kế trang nhã, hiện đại tọa lạc tại khu Nguyễn Thị Nghĩa yên tĩnh, chỉ vài phút xe máy đến trung tâm và Hồ Xuân Hương.',
            roomTypes: ['Phòng Standard Giường Đôi', 'Phòng Superior Có Ban Công', 'Phòng Family 4 Khách']
        },
        {
            id: 'hotel-xuan-cuong-dalat',
            name: 'XUÂN CƯỜNG HOTEL',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn Phố Đi Bộ & Chợ Đêm',
            rating: 4.84,
            reviewsCount: 510,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 750000,
            discountPrice: 550000,
            location: '30 Nguyễn Văn Trỗi, Phường 1, TP. Đà Lạt',
            albumUrl: 'https://www.bing.com/maps/default.aspx?where1=11.945540969333,108.435650056',
            amenities: ['Cách Chợ Đêm Đà Lạt 200m', 'Phòng gia đình rộng rãi', 'Nước nóng năng lượng mặt trời', 'Gần thiên đường ẩm thực', 'Wifi cáp quang tốc độ cao'],
            badge: 'Vị Trí Vàng Trung Tâm P1',
            description: 'Vị trí đắc địa ngay mặt tiền đường Nguyễn Văn Trỗi sầm uất, chỉ 3 phút tản bộ ra Chợ Đêm Đà Lạt, chợ nông sản và phố ẩm thực đêm.',
            roomTypes: ['Phòng Đơn 1 Giường Đôi', 'Phòng Đôi 2 Giường Lớn', 'Phòng Gia Đình VIP']
        },
        {
            id: 'hotel-amour-dalat',
            name: 'AMOUR ĐÀ LẠT HOTEL',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn Romantic Trung Tâm',
            rating: 4.89,
            reviewsCount: 390,
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 900000,
            discountPrice: 680000,
            location: '18 Nguyễn Văn Trỗi, Phường 1, Trung tâm TP. Đà Lạt',
            albumUrl: 'https://www.facebook.com/amourhoteldalat/',
            amenities: ['Cửa sổ kính đón nắng tự nhiên', 'Phong cách Romantic lãng mạn', 'Trung tâm phố đi bộ P.1', 'Nội thất ấm cúng', 'Dọn phòng hàng ngày sạch sẽ'],
            badge: 'Phong Cách Lãng Mạn',
            description: 'Khách sạn mang phong cách trẻ trung, lãng mạn với ánh sáng tự nhiên ngập tràn, tọa lạc tại vị trí vàng đường Nguyễn Văn Trỗi.',
            roomTypes: ['Amour Deluxe Double', 'Amour Suite City View', 'Amour Family Room']
        },
        {
            id: 'hotel-green-meadow-dalat',
            name: 'GREEN MEADOW HOTEL DALAT',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn Sinh Thái Yên Bình',
            rating: 4.85,
            reviewsCount: 330,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 780000,
            discountPrice: 580000,
            location: '20 Nguyễn Viết Xuân, Phường Xuân Hương, TP. Đà Lạt',
            albumUrl: 'https://www.facebook.com/GreenMeadowhotel',
            amenities: ['View thung lũng & đồi xanh mát', 'Khuôn viên yên bình thư thái', 'Bãi đỗ ô tô rộng rãi', 'Cà phê sân vườn', 'Dịch vụ tư vấn tour săn mây'],
            badge: 'Không Gian Xanh Mát',
            description: 'Không gian ngập tràn cây xanh và không khí cao nguyên trong lành, view nhìn ra những triền đồi thơ mộng của thành phố ngàn hoa.',
            roomTypes: ['Standard Double Green View', 'Deluxe Balcony Pine View', 'Family Suite 4 Khách']
        },
        {
            id: 'hotel-nelly-dalat',
            name: 'NELLY DALAT HOTEL',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn Phố Ẩm Thực Bùi Thị Xuân',
            rating: 4.86,
            reviewsCount: 460,
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 820000,
            discountPrice: 620000,
            location: '106 Bùi Thị Xuân, Phường Xuân Hương, TP. Đà Lạt',
            albumUrl: 'https://www.facebook.com/nellydalathotel',
            amenities: ['Cách Hồ Xuân Hương 500m', 'Ngay phố ẩm thực Bùi Thị Xuân', 'Nội thất trang nhã hiện đại', 'Thang máy tiện lợi', 'Hỗ trợ đặt vé tham quan'],
            badge: 'Gần Hồ Xuân Hương & Ẩm Thực',
            description: 'Tọa lạc trên con đường Bùi Thị Xuân sầm uất bậc nhất Đà Lạt, cách Hồ Xuân Hương chỉ vài phút đi bộ, bao quanh bởi hàng chục quán ăn đặc sản.',
            roomTypes: ['Superior Double Room', 'Deluxe Window City View', 'Family 4 Guests']
        },
        {
            id: 'hotel-the-grace-dalat',
            name: 'THE GRACE HOTEL ĐÀ LẠT',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn Trung Tâm P.1',
            rating: 4.87,
            reviewsCount: 520,
            image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 790000,
            discountPrice: 590000,
            location: '51 Nam Kỳ Khởi Nghĩa, Phường 1, TP. Đà Lạt',
            albumUrl: 'https://www.facebook.com/thegracedalat',
            amenities: ['Cách Chợ Đà Lạt 300m', 'Phòng ốc sạch sẽ tinh tươm', 'Nước suối miễn phí hàng ngày', 'Khu phố an ninh sầm uất', 'Lễ tân hỗ trợ 24/7'],
            badge: '3 Phút Đi Bộ Đến Chợ',
            description: 'Nằm trên con đường khách sạn nổi tiếng Nam Kỳ Khởi Nghĩa, thuận tiện tối đa cho việc dạo chợ đêm, mua sắm hoa quả sấy và ăn bánh tráng nướng.',
            roomTypes: ['Grace Standard Double', 'Grace Deluxe City View', 'Grace Family Quad']
        },
        {
            id: 'hotel-la-pensee-dalat',
            name: "LA PENSÉE HOTEL - ĐÀ LẠT",
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            stars: 3,
            type: 'dalat',
            typeName: 'Khách Sạn View Đồi Robin',
            rating: 4.9,
            reviewsCount: 480,
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 950000,
            discountPrice: 720000,
            location: '06 Đống Đa, Phường 3, TP. Đà Lạt',
            albumUrl: 'https://www.facebook.com/lapenseehoteldalatcom',
            amenities: ['View thung lũng đồi Robin bao la', 'Cà phê ngắm hoàng hôn cực chill', 'Không gian yên tĩnh lãng mạn', 'Khu vực Đồi Robin thoáng đãng', 'Bãi đậu xe rộng'],
            badge: 'View Hoàng Hôn & Thung Lũng',
            description: 'Khách sạn phong cách Pháp lãng mạn trên Đồi Robin với góc nhìn toàn cảnh thành phố và thung lũng thông reo vi vu lúc chiều tà.',
            roomTypes: ['La Pensée Classic Room', 'La Pensée Panorama Suite', 'Family VIP Valley View']
        },

        // --- KHÁCH SẠN NHA TRANG ---
        {
            id: 'hotel-green-beach-nhatrang',
            name: 'GREEN BEACH HOTEL NHA TRANG',
            destinationId: 'nha-trang',
            destinationName: 'Nha Trang',
            stars: 4,
            type: 'nhatrang',
            typeName: 'Khách Sạn 4 Sao Phố Tây',
            rating: 4.92,
            reviewsCount: 680,
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 1150000,
            discountPrice: 850000,
            location: '65 Trần Quang Khải, Phường Lộc Thọ, TP. Nha Trang',
            albumUrl: 'https://drive.google.com/drive/u/0/folders/1DkMlzFBN4YXny5_WTYofVGtjdGjoYy5W',
            amenities: ['Hồ bơi tầng thượng view biển', 'Buffet sáng quốc tế cao cấp', 'Cách bãi biển chỉ 150m (3 phút)', 'Trung tâm ẩm thực & bar phố Tây', 'Phòng tập Gym hiện đại'],
            badge: '4 Sao Phố Tây - Cách Biển 3 Phút',
            description: 'Khách sạn 4 sao cao cấp chuẩn quốc tế ngay trung tâm khu phố Tây sầm uất đường Trần Quang Khải, chỉ 3 phút đi bộ thong dong ra bãi tắm Trần Phú.',
            roomTypes: ['Senior Deluxe Double', 'Premier Ocean View Balcony', 'Executive Suite Sea View']
        },
        {
            id: 'hotel-lucky-sun-nhatrang',
            name: 'LUCKY SUN HOTEL NHA TRANG',
            destinationId: 'nha-trang',
            destinationName: 'Nha Trang',
            stars: 4,
            type: 'nhatrang',
            typeName: 'Khách Sạn 4 Sao Mặt Biển',
            rating: 4.94,
            reviewsCount: 790,
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 1250000,
            discountPrice: 890000,
            location: '100/8B Trần Phú, Phường Lộc Thọ, TP. Nha Trang',
            albumUrl: 'https://drive.google.com/drive/u/1/folders/1Qs4LsOdmdLkHc2rACWh7uka8vNDGOlMz',
            priceUrl: 'https://drive.google.com/file/d/1TnzlK3ySsRNPz1XwXSbiQz8tVIBvS8Fd/view',
            websiteUrl: 'http://luckysunhotel.com',
            amenities: ['Hồ bơi vô cực ngắm toàn cảnh vịnh', 'Nhà hàng buffet Á - Âu', 'Cách bãi tắm chỉ vài bước chân', 'Phòng ốc sang trọng chuẩn 4 sao', 'Hỗ trợ tour đảo trọn gói'],
            badge: '4 Sao Mặt Tiền Biển Trần Phú',
            description: 'Khách sạn 4 sao đẳng cấp nằm trên cung đường biển vàng Trần Phú, sở hữu hồ bơi vô cực ngắm trọn vẹn vịnh biển Nha Trang nước xanh màu ngọc bích.',
            roomTypes: ['Deluxe Sea View Balcony', 'Senior City & Sea View', 'Lucky Sun Grand Suite']
        },
        {
            id: 'hotel-sun-city-nhatrang',
            name: 'SUN CITY HOTEL NHA TRANG',
            destinationId: 'nha-trang',
            destinationName: 'Nha Trang',
            stars: 3,
            type: 'nhatrang',
            typeName: 'Khách Sạn Biển Đường Tôn Đản',
            rating: 4.84,
            reviewsCount: 420,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
            pricePerNight: 880000,
            discountPrice: 650000,
            location: '18 Tôn Đản, Phường Lộc Thọ, TP. Nha Trang',
            albumUrl: 'http://suncitynhatrang.vn',
            websiteUrl: 'http://suncitynhatrang.vn',
            amenities: ['Cách biển & Tháp Trầm Hương 200m', 'Phòng hướng biển thoáng đãng', 'Gần chợ đêm Nha Trang', 'Lễ tân phục vụ 24/7', 'Cho thuê xe máy & đặt vé cano'],
            badge: 'Cạnh Tháp Trầm Hương & Quảng Trường 2/4',
            description: 'Khách sạn tọa lạc ngay đường Tôn Đản cạnh Quảng Trường 2/4 và Tháp Trầm Hương biểu tượng, chỉ cách bãi cát biển Nha Trang 200m đi bộ.',
            roomTypes: ['Standard Double Room', 'Superior Sea View', 'Sun City Family Suite']
        }
    ],

    // 3. Danh sách Điểm vui chơi & Trải nghiệm giải trí (Tập trung khu vực phụ trách)
    attractions: [
        {
            id: 'attr-san-may-dalat',
            name: 'Săn Mây Đồi Đa Phú & Cầu Đất Farm',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            category: 'nature',
            categoryName: 'Săn Mây & Check-in Rừng Thông',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: 'Miễn phí (Thảm gỗ săn mây: 100.000đ gồm cà phê)',
            openingHours: '04:30 - 08:00 sáng (thời điểm vàng)',
            highlights: ['Ngắm biển mây bồng bềnh cuộn trôi lúc bình minh', 'Tia nắng sớm xuyên qua thung lũng thông đại ngàn', 'Cánh đồng tua bin gió khổng lồ trên đồi chè Cầu Đất', 'Nhâm nhi ly cà phê nóng hổi giữa tiết trời se lạnh 15°C'],
            tips: 'Nên thức dậy từ 4h15 sáng để có mặt tại đồi trước 5h20. Mặc áo ấm dày vì sáng sớm trên đồi gió rất lạnh.'
        },
        {
            id: 'attr-datanla-dalat',
            name: 'Thác Datanla & Máng Trượt Alpine Coaster',
            destinationId: 'da-lat',
            destinationName: 'Đà Lạt',
            category: 'adventure',
            categoryName: 'Cảm Giác Mạnh & Thể Thao Rừng',
            rating: 4.88,
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: 'Vé vào cổng 50.000đ + Máng trượt khứ hồi 250.000đ/người',
            openingHours: '07:30 - 17:00 hàng ngày',
            highlights: ['Máng trượt băng rừng dài 2.400m đạt kỷ lục châu Á', 'Chiêm ngưỡng dòng thác Datanla hùng vĩ tung bọt trắng xóa', 'Trải nghiệm đu dây mạo hiểm High Rope Course trên ngọn thông', 'Chèo thuyền vượt ghềnh thác Canyon mạo hiểm'],
            tips: 'Khi đi máng trượt, bạn có thể tự kiểm soát cần gạt tốc độ, hãy giữ khoảng cách an toàn 25m với xe phía trước.'
        },
        {
            id: 'attr-vinwonders-nhatrang',
            name: 'VinWonders Nha Trang - Đảo Hòn Tre',
            destinationId: 'nha-trang',
            destinationName: 'Nha Trang',
            category: 'themepark',
            categoryName: 'Công Viên Chủ Đề Đảo Biển',
            rating: 4.92,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: '800.000đ - 950.000đ/người lớn (đã gồm cáp treo)',
            openingHours: '08:00 - 20:00 hàng ngày',
            highlights: ['Cáp treo vượt biển ngắm toàn cảnh vịnh biển Nha Trang', 'Khu vườn hoa The World Garden 5 châu trên đỉnh đồi', 'Công viên nước trên bãi biển quy mô lớn nhất Việt Nam', 'Siêu show diễn thực cảnh đa phương tiện triệu đô "Tata Show"'],
            tips: 'Nên dành trọn vẹn 1 ngày: sáng chơi các trò chơi cảm giác mạnh & thủy cung, trưa tắm công viên nước, tối 19h30 xem Tata Show.'
        },
        {
            id: 'attr-tour-dao-nhatrang',
            name: 'Tour Cano 3 Đảo Vịnh Nha Trang & Lặn Ngắm San Hô',
            destinationId: 'nha-trang',
            destinationName: 'Nha Trang',
            category: 'adventure',
            categoryName: 'Khám Phá Đảo & Lặn Biển',
            rating: 4.87,
            image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: 'Từ 450.000đ - 650.000đ/người (Bao gồm ăn trưa)',
            openingHours: '08:30 - 15:30',
            highlights: ['Lướt cano cao tốc tham quan Hòn Mun, Hòn Tằm, Bãi Tranh', 'Lặn ngắm san hô bằng bình khí hoặc đi bộ dưới đáy biển Seawalker', 'Thưởng thức bữa trưa hải sản trên bè nổi giữa vịnh', 'Tắm bùn khoáng nóng trên đảo Hòn Tằm view biển cực chill'],
            tips: 'Nên chuẩn bị túi chống nước cho điện thoại và thoa kem chống nắng lành tính với sinh vật biển.'
        },
        {
            id: 'attr-homay-vungtau',
            name: 'Khu Du Lịch Hồ Mây Park Vũng Tàu',
            destinationId: 'vung-tau',
            destinationName: 'Vũng Tàu',
            category: 'themepark',
            categoryName: 'Khu Vui Chơi Trên Núi & Cáp Treo',
            rating: 4.84,
            image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: '400.000đ/người lớn (Trọn gói cáp treo & trò chơi)',
            openingHours: '07:30 - 22:00 hàng ngày',
            highlights: ['Tuyến cáp treo vượt núi ngắm toàn cảnh thành phố và biển', 'Công viên nước trên đỉnh núi độc đáo nhất Việt Nam', 'Đua xe F1, trượt cỏ nhân tạo và xe trượt dốc Alpine Coaster', 'Show nhạc nước Hồ Mây Grand Show kết hợp laser hiện đại'],
            tips: 'Nên đi cáp treo lên lúc 15h00 để vừa vui chơi, vừa ngắm hoàng hôn biển từ đỉnh núi và xem show nhạc nước buổi tối.'
        },
        {
            id: 'attr-nghinhphong-vungtau',
            name: 'Mũi Nghinh Phong, Tượng Chúa Kitô & Ngọn Hải Đăng',
            destinationId: 'vung-tau',
            destinationName: 'Vũng Tàu',
            category: 'nature',
            categoryName: 'Check-in Biểu Tượng & Danh Thắng',
            rating: 4.85,
            image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: 'Miễn phí tham quan',
            openingHours: 'Mũi Nghinh Phong: 24/7; Tượng Chúa: 07:00 - 17:00',
            highlights: ['Check-in "Cổng Trời" Mũi Nghinh Phong nhìn thẳng ra biển cả bao la', 'Leo gần 1.000 bậc đá lên tay Tượng Chúa Kitô Vua ngắm trọn Bãi Sau', 'Đường hoa giấy rực rỡ men theo triền núi lên Ngọn Hải Đăng cổ nhất', 'Thưởng thức trứng gà lòng đào và sữa chua Yaourt Cô Tiên'],
            tips: 'Khi leo Tượng Chúa Kitô cần mặc trang phục lịch sự (quần qua đầu gối, áo có tay), đi giày thể thao thoải mái.'
        },
        {
            id: 'attr-jeep-bautrang',
            name: 'Tour Xe Jeep Vượt Đồi Cát Trắng Bàu Trắng Mũi Né',
            destinationId: 'phan-thiet',
            destinationName: 'Phan Thiết - Mũi Né',
            category: 'adventure',
            categoryName: 'Mạo Hiểm Sa Mạc & Cung Đường Ven Biển',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: '500.000đ - 650.000đ/xe Jeep riêng (4-6 khách)',
            openingHours: '04:30 - 18:00 (Thời điểm đón bình minh hoặc hoàng hôn)',
            highlights: ['Chinh phục những đồi cát trắng uốn lượn như sa mạc Sahara', 'Cung đường ven biển Mũi Né tuyệt đẹp với hàng xe Jeep rực rỡ', 'Lái môtô địa hình ATV băng qua cồn cát thử thách lòng can đảm', 'Check-in hồ sen Bàu Trắng nước xanh màu ngọc bích'],
            tips: 'Nên chọn tour sáng sớm đón bình minh (bắt đầu lúc 4h30) để có ánh sáng chụp ảnh lung linh nhất và cát không bị nóng chân.'
        },
        {
            id: 'attr-vinwonders-phuquoc',
            name: 'VinWonders & Vinpearl Safari Phú Quốc',
            destinationId: 'phu-quoc',
            destinationName: 'Phú Quốc',
            category: 'themepark',
            categoryName: 'Công Viên Chủ Đề & Safari Bán Hoang Dã',
            rating: 4.93,
            image: 'https://images.unsplash.com/photo-1575995872537-3793d29d972c?auto=format&fit=crop&w=1000&q=80',
            ticketPrice: '950.000đ - 1.350.000đ/combo Safari + VinWonders',
            openingHours: '09:00 - 19:30 hàng ngày',
            highlights: ['Công viên chủ đề quy mô lớn nhất Việt Nam với Cung Điện Hải Vương', 'Safari bán hoang dã trải nghiệm "nhốt người thả thú" độc đáo', 'Khu làng phép thuật châu Âu cổ kính và công viên nước khổng lồ', 'Show nhạc nước thực cảnh "Once" đẳng cấp quốc tế'],
            tips: 'Safari đóng cửa sớm lúc 16h00, do đó bạn nên đi Safari vào buổi sáng từ 9h00, sau đó dành cả buổi chiều và tối tại VinWonders.'
        }
    ],

    // 4. Cẩm nang ẩm thực đặc sản (Tập trung Đà Lạt, Nha Trang, Vũng Tàu, Miền Nam)
    culinary: [
        {
            name: 'Lẩu Gà Lá É & Bánh Căn Lòng Gà',
            region: 'Đà Lạt (Lâm Đồng)',
            image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
            places: 'Lẩu gà lá é Tao Ngộ (đường 3/4), Bánh căn Lệ (Yersin), Bánh ướt lòng gà Long',
            desc: 'Vị cay nồng thơm lừng của lá é hòa quyện nước dùng gà ngọt thanh trong tiết trời se lạnh Đà Lạt, ăn kèm chén muối ớt hiểm cay xé lưỡi.'
        },
        {
            name: 'Nem Nướng Ninh Hòa & Bún Sứa Chả Cá',
            region: 'Nha Trang (Khánh Hòa)',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
            places: 'Nem nướng Đặng Văn Quyên, Bún cá Năm Beo (Chợ Đầm), Bún cá sứa Nguyên Loan',
            desc: 'Thịt nem nướng than hoa thơm nức cuốn bánh tráng, rau sống tươi ngon chấm ngập bát nước sốt đậu phộng béo bùi gia truyền sánh mịn.'
        },
        {
            name: 'Bánh Khọt Giòn Rụm & Lẩu Cá Đuối',
            region: 'Vũng Tàu',
            image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
            places: 'Bánh khọt Gốc Vú Sữa, Bánh khọt Cô Ba Vũng Tàu, Lẩu cá đuối 7 Lượm / Trương Công Định',
            desc: 'Vỏ bánh khọt vàng ươm giòn tan, nhân tôm tươi roi rói rắc tôm chấy đỏ ăn kèm rau cải chấm mắm chua ngọt, nồi lẩu cá đuối măng chua sôi sùng sục.'
        },
        {
            name: 'Bún Quậy & Gỏi Cá Trích Phú Quốc',
            region: 'Phú Quốc (Kiên Giang)',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
            places: 'Bún quậy Kiến Xây (Bạch Đằng), Quán gỏi cá trích Sông Xanh',
            desc: 'Tô bún tươi ép tại chỗ với chả tôm mực tươi quết dính đáy tô nước dùng ngọt lịm; gỏi cá trích tươi sống rắc dừa nạo cuốn bánh tráng chấm nước mắm nhĩ Phú Quốc.'
        }
    ],

    // 5. Gợi ý lịch trình tour thực tế của Evanus Tourism
    sampleItineraries: {
        'da-lat-3n2d': {
            title: 'Evanus Tour: Đà Lạt Săn Mây - Thác Datanla - Rừng Thông (3N2Đ)',
            cost: 'Từ 2.450.000đ/người',
            days: [
                {
                    day: 'Ngày 1: Đón Khách - Check-in Biệt Thự Gỗ - Hồ Tuyền Lâm - Chợ Đêm',
                    activities: 'Xe đón quý khách về khách sạn nhận phòng, chiều dạo chơi Hồ Tuyền Lâm, Thiền viện Trúc Lâm, tối tự do thưởng thức lẩu gà lá é và sữa đậu nành nóng chợ đêm.'
                },
                {
                    day: 'Ngày 2: Săn Mây Đồi Đa Phú - Máng Trượt Thác Datanla - Cà Phê Hoàng Hôn',
                    activities: '04h30 sáng xe Jeep đón săn mây đón bình minh tuyệt đẹp. Buổi chiều trải nghiệm máng trượt máng trượt alpine coaster xuyên rừng thông tại Thác Datanla.'
                },
                {
                    day: 'Ngày 3: Đồi Chè Cầu Đất - Mua Sắm Đặc Sản Mứt Dâu - Tạm Biệt Đà Lạt',
                    activities: 'Tham quan cánh đồng điện gió đồi chè Cầu Đất, ghé vườn dâu tây hái quả tươi tại vườn và mua đặc sản atiso làm quà trước khi ra sân bay Liên Khương.'
                }
            ]
        },
        'nha-trang-3n2d': {
            title: 'Evanus Tour: Vịnh Biển Nha Trang - Tour 3 Đảo - VinWonders (3N2Đ)',
            cost: 'Từ 2.850.000đ/người',
            days: [
                {
                    day: 'Ngày 1: Chào Nha Trang - Bãi Biển Trần Phú - Tháp Bà Ponagar - Tắm Bùn Khoáng',
                    activities: 'Xe đón sân bay Cam Ranh về khách sạn view biển, chiều tham quan tháp Chăm Ponagar cổ kính và ngâm tắm bùn khoáng nóng thư giãn phục hồi sinh lực.'
                },
                {
                    day: 'Ngày 2: Trọn Ngày Chinh Phục VinWonders Đảo Hòn Tre',
                    activities: 'Đi cáp treo vượt biển sang Hòn Tre, trải nghiệm vịnh phao nổi khổng lồ, thế giới trò chơi cảm giác mạnh, thủy cung và thưởng thức show diễn triệu đô Tata Show.'
                },
                {
                    day: 'Ngày 3: Tour Cano Cao Tốc Lặn Ngắm San Hô Hòn Mun - Mua Sắm Chợ Đầm',
                    activities: 'Cano cao tốc đưa khách ra vùng biển bảo tồn Hòn Mun lặn ngắm san hô rực rỡ, ăn trưa hải sản trên bè nổi trước khi trở về đất liền mua chả cá Nha Trang.'
                }
            ]
        },
        'vung-tau-2n1d': {
            title: 'Evanus Weekend: Vũng Tàu Biển Xanh - Hồ Mây Park - Mũi Nghinh Phong (2N1Đ)',
            cost: 'Từ 1.350.000đ/người',
            days: [
                {
                    day: 'Ngày 1: TP.HCM - Vũng Tàu - Bãi Sau Tắm Biển - Mũi Nghinh Phong - Lẩu Cá Đuối',
                    activities: 'Khởi hành từ TP.HCM qua cao tốc đến Vũng Tàu trong 2 giờ, check-in resort Bãi Sau, tắm biển ngắm hoàng hôn, check-in Cổng Trời Mũi Nghinh Phong và ăn lẩu cá đuối.'
                },
                {
                    day: 'Ngày 2: Chinh Phục Tượng Chúa Kitô - Cáp Treo Hồ Mây Park - Trở Về',
                    activities: 'Sáng sớm leo núi ngắm toàn cảnh thành phố từ tay Tượng Chúa Kitô, đi cáp treo lên Hồ Mây Park vui chơi công viên nước trên đỉnh núi, thưởng thức bánh khọt rồi về lại TP.HCM.'
                }
            ]
        },
        'phan-thiet-2n1d': {
            title: 'Evanus Tour: Mũi Né Phan Thiết - Xe Jeep Đồi Cát Trắng (2N1Đ)',
            cost: 'Từ 1.650.000đ/người',
            days: [
                {
                    day: 'Ngày 1: Khám Phá Suối Tiên - Làng Chài Mũi Né - Hoàng Hôn Đồi Cát Đỏ',
                    activities: 'Nhận phòng resort ven biển Mũi Né, lội dòng Suối Tiên mát lạnh ngắm thạch nhũ đất sét đỏ, chiều ngắm cảnh hàng trăm thuyền thúng tấp nập tại làng chài.'
                },
                {
                    day: 'Ngày 2: Tour Xe Jeep Bàu Trắng Đón Bình Minh - Cung Đường Ven Biển',
                    activities: 'Trải nghiệm xe Jeep vượt những cồn cát trắng nhấp nhô, check-in cung đường ven biển Mũi Né đẹp tựa phim ảnh trước khi khởi hành về.'
                }
            ]
        },
        'phu-quoc-4n3d': {
            title: 'Evanus Tour: Đảo Ngọc Phú Quốc - Safari - Grand World Venice (4N3Đ)',
            cost: 'Từ 4.200.000đ/người',
            days: [
                {
                    day: 'Ngày 1: Đáp Sân Bay Phú Quốc - Check-in Resort - Sunset Sanato - Chợ Đêm',
                    activities: 'Xe đón quý khách về khách sạn nhận phòng, ngắm hoàng hôn rực rỡ tại Sunset Sanato, tối dạo chợ đêm thưởng thức bún quậy và hải sản nướng.'
                },
                {
                    day: 'Ngày 2: Tour Cano 3 Đảo - Cáp Treo Hòn Thơm Vượt Biển',
                    activities: 'Cano lướt sóng đến Hòn Móng Tay, Hòn Mây Rút tắm biển nước trong vắt, trải nghiệm cáp treo vượt biển ngắm quần đảo An Thới ngoạn mục.'
                },
                {
                    day: 'Ngày 3: Vinpearl Safari Bán Hoang Dã - Thành Phố Không Ngủ Grand World',
                    activities: 'Khám phá thế giới động vật bán hoang dã tại Safari, chiều dạo thuyền Gondola kênh đào Venice và xem show nhạc nước triệu đô Sắc Màu Venice.'
                },
                {
                    day: 'Ngày 4: Suối Tranh - Nhà Thùng Nước Mắm - Tạm Biệt Phú Quốc',
                    activities: 'Tham quan nhà thùng nước mắm truyền thống, vườn tiêu trĩu quả mua quà đặc sản trước khi ra sân bay kết thúc hành trình.'
                }
            ]
        }
    }
};

// Export to window
window.VIETNAM_TRAVEL_DATA = VIETNAM_TRAVEL_DATA;
