import { HotelModel } from "../model/hotel-model";

export const HOTEL_MOCK_DATA: HotelModel[] = [
  {
    id: "1",
    name: "Queen Ann Nha Trang Hotel",
    slug: "queen-ann-nha-trang-hotel",
    type: "Khách sạn",
    star: 4,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    isAvailable:true,
    description:
      "Queen Ann Nha Trang Hotel - Đối tác Đan Phát Travel dịch vụ lưu trú hàng đầu tại Thành phố Biển Nha Trang",
    content: `<h2 style="color:#0E5AA4; font-weight:bold;">Khách sạn Queen Ann Nha Trang</h2>

<p style="color:#444; font-size:16px;">
  Tọa lạc tại vị trí đắc địa trên đường Trần Phú – con đường ven biển đẹp nhất thành phố Nha Trang, 
  <strong>Queen Ann Nha Trang</strong> là khách sạn đạt tiêu chuẩn <strong>5 sao quốc tế</strong>, mang đến trải nghiệm nghỉ dưỡng đẳng cấp, sang trọng và tiện nghi bậc nhất.
</p>

<p style="color:#0E5AA4; font-weight:bold;">📍 Địa chỉ</p>
<p style="color:#444;">
  <strong>100 Trần Phú, Lộc Thọ, Thành phố Nha Trang, Khánh Hòa</strong>
</p>

<p style="color:#0E5AA4; font-weight:bold;">⭐ Tiêu chuẩn</p>
<p style="color:#444;">
  <strong>Khách sạn 5 sao</strong> – chuẩn quốc tế, với hệ thống hơn 280 phòng nghỉ sang trọng, view hướng biển tuyệt đẹp.
</p>

<p style="color:#0E5AA4; font-weight:bold;">🏨 Tiện ích nổi bật</p>
<ul style="color:#444; padding-left: 20px; list-style-type: disc;">
  <li>Hồ bơi ngoài trời với tầm nhìn ra biển</li>
  <li>Nhà hàng sang trọng phục vụ buffet sáng, ẩm thực Âu - Á</li>
  <li>Spa & Massage thư giãn cao cấp</li>
  <li>Phòng gym hiện đại, miễn phí cho khách lưu trú</li>
  <li>Phòng hội nghị, tổ chức sự kiện quy mô lớn</li>
</ul>

<p style="color:#0E5AA4; font-weight:bold;">🛍️ Các dịch vụ & địa điểm xung quanh</p>
<ul style="color:#444; padding-left: 20px; list-style-type: disc;">
  <li>Cách biển chỉ 2 phút đi bộ</li>
  <li>Gần chợ đêm Nha Trang, Vincom Plaza, trung tâm thương mại</li>
  <li>Thuận tiện di chuyển đến Tháp Bà Ponagar, Hòn Chồng...</li>
  <li>Hỗ trợ đặt tour đảo, lặn biển, tắm bùn ngay tại khách sạn</li>
</ul>

<p style="color:#444;">
  Với phong cách phục vụ <strong>chuyên nghiệp</strong>, cơ sở vật chất <strong>hiện đại</strong> và vị trí <strong>tuyệt vời</strong>, Queen Ann là điểm đến lý tưởng cho kỳ nghỉ dưỡng, công tác hoặc tuần trăng mật tại thành phố biển Nha Trang.
</p>

`,
    price: "1.150.000",
    address: "100 Trần Phú, P. Lộc Thọ, Tp. Nha Trang, Khánh Hòa",
    ultilities: "Lobby Bar, Queen Beauty, Pool & Bar, Restaurant",
    thumbnail: "/hotel/queen-ann.jpg",
    rule: `<h3 style="color: red;"><strong>Quy định hủy phòng</strong></h3>
<p>Đặt phòng không có rủi ro! Hủy trước 2025-07-07 và quý khách sẽ không phải trả gì cả! Bất kỳ việc hủy phòng nào ghi nhận được trong vòng 1 ngày trước ngày đến sẽ phải trả khoản tiền đêm đầu tiên. Không đến khách sạn hoặc chỗ nghỉ sẽ được giải quyết như là Vắng Mặt và sẽ phải trả khoản tiền đêm đầu tiên (Quy định của khách sạn)..</p>

<h3>Quy định khác</h3>
<ul style="padding-left: 20px; list-style-type: disc;">
<li>Đối với đặt phòng trả tiền tại khách sạn, khách cần liên hệ chỗ nghỉ trước để xác nhận thời gian nhận phòng. Nếu không, chỗ nghỉ có thể bác bỏ việc đặt phòng.</li>
<li>Khi đặt trên 5 phòng, chính sách và điều khoản bổ sung có thể được áp dụng.</li>
</ul>
<h3 style="color: red;"><strong>Lưu ý của khách sạn</strong></h3>`,
    images: [
      "/hotel/queen-ann.jpg",
      "/hotel/queen-ann-2.jpg",
      "/hotel/queen-ann-3.jpg",
      "/hotel/queen-ann.jpg",
      "/hotel/queen-ann.jpg",
    ],
    roomDetails: [
      {
        id: "1",
        name: "Deluxe Queen",
        capacity: "1 giường đôi – 2 người lớn",
        included:
          "TV, minibar, két an toàn, sofa thư giãn, bồn tắm nằm và buồng tắm đứng",
        price: "1150000",
      },
      {
        id: "2",
        name: "Grand Deluxe King Seaview",
        capacity: "1 giường King – 2 người lớn",
        included:
          "TV, minibar, két an toàn, bồn tắm đứng, bồn tắm nằm, view biển",
        price: "1210000",
      },
      {
        id: "3",
        name: "Premier Twin Oceanview Balcony",
        capacity: "2 giường đơn – 2 người lớn",
        included: "View biển, ban công, trà/cà phê, nôi em bé (theo yêu cầu)",
        price: "1375000",
      },
      {
        id: "4",
        name: "Executive King Oceanview Balcony",
        capacity: "1 giường King – 2 người lớn",
        included: "TV, minibar, ban công riêng, view biển toàn cảnh",
        price: "1760000",
      },
      {
        id: "5",
        name: "Queen Ann Suite Super King",
        capacity: "1 giường Super King – 2–3 người",
        included: "View biển, ban công lớn, phòng tầng cao, dịch vụ cao cấp",
        price: "2550000",
      },
    ],
  },
  {
    id: "2",
    name: "Joy Trip Hotel",
    slug: "joy-trip-hotel",
    type: "Khách sạn",
    star: 4,
    isAvailable:true,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    description:
      "Joy Trip Hotel & Spa – khách sạn 4 sao mặt biển, kết hợp spa, gym và hồ bơi vô cực.",
    content: `<h2 style="color:#0E5AA4; font-weight:bold;">Joy Trip Hotel & Spa Nha Trang</h2>

<p style="color:#444; font-size:16px;">
  Tọa lạc trên cung đường biển Phạm Văn Đồng – một trong những vị trí yên tĩnh, thơ mộng của thành phố Nha Trang, 
  <strong>Joy Trip Hotel & Spa</strong> là khách sạn đạt chuẩn <strong>4 sao</strong>, mang đến không gian nghỉ dưỡng lý tưởng cho cả gia đình, cặp đôi hoặc khách công tác.
</p>

<p style="color:#0E5AA4; font-weight:bold;">📍 Địa chỉ</p>
<p style="color:#444;">
  <strong>61 Phạm Văn Đồng, Vĩnh Hòa, Thành phố Nha Trang, Khánh Hòa</strong>
</p>

<p style="color:#0E5AA4; font-weight:bold;">⭐ Tiêu chuẩn</p>
<p style="color:#444;">
  <strong>Khách sạn 4 sao</strong> – gồm nhiều loại phòng hiện đại, nhiều phòng có view biển hoặc ban công riêng.
</p>

<p style="color:#0E5AA4; font-weight:bold;">🏨 Tiện ích nổi bật</p>
<ul style="color:#444; padding-left: 20px; list-style-type: disc;">
  <li>Hồ bơi vô cực trên tầng thượng, view toàn cảnh biển</li>
  <li>Spa & Sauna thư giãn, chăm sóc sức khỏe</li>
  <li>Phòng Gym đầy đủ thiết bị hiện đại</li>
  <li>Nhà hàng phục vụ món Việt & Âu</li>
  <li>Rooftop bar với không gian mở và nhạc sống buổi tối</li>
</ul>

<p style="color:#0E5AA4; font-weight:bold;">🛍️ Các dịch vụ & địa điểm xung quanh</p>
<ul style="color:#444; padding-left: 20px; list-style-type: disc;">
  <li>Gần bãi tắm Phạm Văn Đồng – chỉ 3 phút đi bộ</li>
  <li>Gần Hòn Chồng, Tháp Bà Ponagar, Chợ Vĩnh Hải</li>
  <li>Tiện lợi di chuyển đến trung tâm thành phố (5–10 phút)</li>
  <li>Hỗ trợ đặt tour, thuê xe máy và các dịch vụ lặn biển</li>
</ul>

<p style="color:#444;">
  Với phong cách phục vụ <strong>nhiệt tình – chuyên nghiệp</strong>, không gian nghỉ dưỡng hiện đại và vị trí gần biển, 
  <strong>Joy Trip Hotel & Spa</strong> là điểm đến lý tưởng cho chuyến nghỉ ngơi và khám phá Nha Trang của bạn.
</p>
`,
    price: "750.000",
    address: "61 Phạm Văn Đồng, Vĩnh Hòa, Tp. Nha Trang, Khánh Hòa",
    ultilities: "Rooftop Pool & Bar, Spa, Gym, Nhà hàng, Cafe, Sauna",
    thumbnail: "/hotel/joy-trip.jpg",
    rule: `<h3 style="color: red;"><strong>Quy định hủy phòng</strong></h3>
<p>Đặt phòng không có rủi ro! Hủy trước 2025-07-07 và quý khách sẽ không phải trả gì cả! Bất kỳ việc hủy phòng nào ghi nhận được trong vòng 1 ngày trước ngày đến sẽ phải trả khoản tiền đêm đầu tiên. Không đến khách sạn hoặc chỗ nghỉ sẽ được giải quyết như là Vắng Mặt và sẽ phải trả khoản tiền đêm đầu tiên (Quy định của khách sạn)..</p>

<h3>Quy định khác</h3>
<ul style="padding-left: 20px; list-style-type: disc;">
<li>Đối với đặt phòng trả tiền tại khách sạn, khách cần liên hệ chỗ nghỉ trước để xác nhận thời gian nhận phòng. Nếu không, chỗ nghỉ có thể bác bỏ việc đặt phòng.</li>
<li>Khi đặt trên 5 phòng, chính sách và điều khoản bổ sung có thể được áp dụng.</li>
</ul>
<h3 style="color: red;"><strong>Lưu ý của khách sạn</strong></h3>
<ul style="padding-left:20px; list-style-type:disc;">
  <li>Check‑in: từ 13:30 – Check‑out: 12:00</li>
  <li>Không nhận thú cưng</li>
</ul>`,
    images: [
      "/hotel/joy-trip-1.jpg",
      "/hotel/joy-trip-2.jpg",
      "/hotel/joy-trip-3.jpg",
      "/hotel/joy-trip-4.jpg",
      "/hotel/joy-trip-5.jpg",
      "/hotel/joy-trip-6.jpg",
      "/hotel/joy-trip-7.jpg",
    ],
    roomDetails: [
      {
        id: "1",
        name: "Classic Ocean View",
        capacity: "1 giường đôi – 2 người lớn",
        included: "Minibar, két sắt, TV, phòng tắm riêng",
        price: "1200000",
      },
      {
        id: "2",
        name: "Deluxe City View",
        capacity: "1 giường King – 2 người lớn",
        included: "Minibar, TV, phòng tắm hiện đại, view thành phố",
        price: "1500000",
      },
      {
        id: "3",
        name: "Deluxe Ocean View",
        capacity: "1 giường King – 2 người lớn",
        included: "Minibar, TV, phòng tắm + bồn tắm, view biển",
        price: "1800000",
      },
      {
        id: "4",
        name: "Junior Suite Ocean View",
        capacity: "2 giường đơn – 2 người lớn",
        included: "Phòng khách + phòng ngủ, minibar, TV, view biển",
        price: "2200000",
      },
      {
        id: "5",
        name: "Family Suite",
        capacity: "1 giường King + sofa bed – 2–3 người",
        included: "Không gian rộng, minibar, TV, phòng khách, view biển",
        price: "2700000",
      },
    ],
  },
  {
    id: "3",
    name: "Premier Havana Nha Trang Hotel",
    slug: "premier-havana-nha-trang-hotel",
    type: "Khách sạn",
    star: 5,
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    isAvailable:true,
    description:
      "Premier Havana Nha Trang – khách sạn 5 sao cao nhất Việt Nam, 41 tầng, view biển, đường hầm ra biển độc đáo.",
    content: `<h2 style="color:#0E5AA4; font-weight:bold;">Premier Havana Nha Trang Hotel</h2>
<p style="color:#444; font-size:16px;">
  Nằm tại vị trí đắc địa trên đường Trần Phú, phía trước là vịnh Nha Trang, <strong>Premier Havana</strong> là tòa tháp 41 tầng – cao nhất Việt Nam, với hơn 1.000 phòng nghỉ sang trọng và tầm nhìn biển không giới hạn.
</p>
<p style="color:#0E5AA4; font-weight:bold;">📍 Địa chỉ</p>
<p style="color:#444;">
  <strong>38 Trần Phú, Lộc Thọ, Thành phố Nha Trang, Khánh Hòa</strong>
</p>
<p style="color:#0E5AA4; font-weight:bold;">⭐ Tiêu chuẩn</p>
<p style="color:#444;">
  <strong>Khách sạn 5 sao quốc tế</strong> – từng đoạt “Agoda Gold Circle Award 2024”, kiến trúc hiện đại, nội thất châu Âu.
</p>
<p style="color:#0E5AA4; font-weight:bold;">🏨 Tiện ích nổi bật</p>
<ul style="color:#444; padding-left:20px; list-style-type:disc;">
  <li>Hồ bơi ngoài trời + bồn sục jacuzzi, nằm trên sân thượng</li>
  <li>Đường hầm độc đáo nối trực tiếp ra bãi biển</li>
  <li>Spa, sauna, steam bath, phòng gym đầy đủ và cao cấp</li>
  <li>4 nhà hàng & bar—bao gồm rooftop lounge tầng 41</li>
  <li>Business center, phòng họp/sự kiện (bao gồm Skyball tầng 41 view 360°)</li>
</ul>
<p style="color:#0E5AA4; font-weight:bold;">🛍️ Các dịch vụ & địa điểm xung quanh</p>
<ul style="color:#444; padding-left:20px; list-style-type:disc;">
  <li>Vị trí vàng trên đường Trần Phú, trong bán kính 3 phút đến biển, chợ đêm, trung tâm</li>
  <li>Hỗ trợ đặt tour, thuê xe, dịch vụ phòng & giặt ủi 24/7</li>
</ul>
<p style="color:#444;">
  Với tiêu chuẩn quốc tế, trải nghiệm độc đáo và dịch vụ chuyên nghiệp, Premier Havana là lựa chọn lý tưởng cho cả nghỉ dưỡng, công tác và tổ chức sự kiện tại Nha Trang.
</p>`,

    price: "1.450.000",
    address: "38 Trần Phú, P. Lộc Thọ, Tp. Nha Trang, Khánh Hòa",
    ultilities:
      "Ocean‑view Pool, Spa, Gym, Business Center, Restaurants & Bars, Event Spaces, Hồ bơi và chăm sóc sức khỏe, Xe đưa đón sân bay",
    thumbnail: "/hotel/havana.jpg",
    rule: `<h3 style="color:red;"><strong>Quy định hủy phòng & phụ thu:</strong></h3>
<p>Mỗi hạng phòng có chính sách riêng – thường linh hoạt nếu hủy trước 1–2 ngày. Trẻ dưới 6 tuổi miễn phí, từ 6–11 tuổi phụ thu 200.000 VND – chia sẻ giường. Trẻ ≥12 tuổi tính như người lớn, phụ thu thêm/giường phụ (400–600 k)/đêm.</p>
<h3 style="color:red;"><strong>Quy định khác</strong></h3>
<ul style="padding-left:20px; list-style-type:disc;">
  <li>Check‑in từ 15:00, Check‑out trước 12:00 (trả muộn tính phụ phí)</li>
  <li>Không cho phép thú cưng</li>
</ul>`,

    images: [
      "/hotel/havana-1.jpg",
      "/hotel/havana-2.jpg",
      "/hotel/havana-3.jpg",
      "/hotel/havana-4.jpg",
      "/hotel/havana-5.jpg",
      "/hotel/havana-6.jpg",
    ],

    roomDetails: [
      {
        id: "1",
        name: "Deluxe Ocean View",
        capacity: "1 giường Queen hoặc 2 giường đơn – 2 người lớn",
        included:
          "Minibar, TV, két sắt, wifi, phòng tắm riêng (bồn + vòi đứng)",
        price: "1450000",
      },
      {
        id: "2",
        name: "Junior Suite Queen",
        capacity: "1 giường Queen – 2–3 người",
        included:
          "Phòng ngủ + khách, minibar, TV, jacuzzi, ban công hướng biển",
        price: "1850000",
      },
      {
        id: "3",
        name: "Junior Suite King",
        capacity: "1 giường King – 2–3 người",
        included: "Phòng khách, minibar, TV, jacuzzi hướng biển, ban công",
        price: "2250000",
      },
      {
        id: "4",
        name: "Club Suite Ocean View",
        capacity: "1 giường Queen + sofa bed – 2–3 người",
        included: "Sofa bed, minibar, kitchenette, TV, ban công biển",
        price: "2450000",
      },
      {
        id: "5",
        name: "Family Suite",
        capacity: "1 giường Queen + 1 giường đơn – 3–4 người",
        included: "Phòng khách, kitchenette, minibar, TV, ban công biển",
        price: "3100000",
      },
      {
        id: "6",
        name: "Executive Suite Ocean View",
        capacity: "1 giường King + sofa bed – 3–4 người",
        included:
          "Phòng khách, kitchenette, minibar, TV, ban công, bồn tắm + vòi đứng",
        price: "3100000",
      },
    ],
  },
  {
    id: "4",
    name: "Diamond Bay Hotel Nha Trang",
    slug: "diamond-bay-hotel-nha-trang",
    type: "Khách sạn",
    star: 5,
    createdAt: "2023-01-01",
    isAvailable:true,
    updatedAt: "2023-01-01",
    description:
      "Diamond Bay Hotel – khách sạn 5 sao bên bãi biển với 2 hồ bơi ngoài trời, spa, gym và tiện nghi hội nghị hiện đại.",
    content: `<h2 style="color:#0E5AA4; font-weight:bold;">Diamond Bay Hotel Nha Trang</h2>
<p style="color:#444; font-size:16px;">
  Nằm tại số 20 Trần Phú, mặt biển trung tâm Nha Trang, <strong>Diamond Bay Hotel</strong> là khách sạn 5 sao cao 20 tầng, sở hữu vị trí vàng trên tuyến phố biển, kết hợp giữa nghỉ dưỡng và giao thương – rất phù hợp với cả khách du lịch, gia đình và doanh nhân.
</p>

<p style="color:#0E5AA4; font-weight:bold;">📍 Địa chỉ</p>
<p style="color:#444;">
  <strong>20 Trần Phú, Phường Lộc Thọ, Thành phố Nha Trang, Khánh Hòa</strong>
</p>

<p style="color:#0E5AA4; font-weight:bold;">⭐ Tiêu chuẩn</p>
<p style="color:#444;">
  <strong>Khách sạn 5 sao</strong> với 275 phòng trang bị hiện đại, thiết kế sang trọng và tầm nhìn biển hoặc thành phố.
</p>

<p style="color:#0E5AA4; font-weight:bold;">🏨 Tiện ích nổi bật</p>
<ul style="color:#444; padding-left:20px; list-style-type:disc;">
  <li>2 hồ bơi ngoài trời (1 dành cho người lớn, 1 dành cho trẻ em), hoạt động từ 6:00–18:00</li>
  <li>Spa, phòng massage, phòng tắm hơi & jacuzzi</li>
  <li>Phòng gym & fitness center đầy đủ thiết bị</li>
  <li>Nhà hàng & bar, cả quầy bar bên hồ bơi và trong sảnh</li>
  <li>Trung tâm hội nghị, hội thảo, liên kết với trung tâm thương mại & casino</li>
</ul>

<p style="color:#0E5AA4; font-weight:bold;">🛍️ Dịch vụ & địa điểm xung quanh</p>
<ul style="color:#444; padding-left:20px; list-style-type:disc;">
  <li>Tiếp giáp biển, thuận tiện tản bộ đến Chợ Đầm, Tháp Trầm Hương, Chợ Đêm</li>
  <li>Có dịch vụ đưa đón sân bay & thuê xe</li>
  <li>Hỗ trợ đặt tour, thuê xe đạp, dịch vụ giặt là, giữ trẻ</li>
  <li>Gần trung tâm thương mại & casino ngay trong khu tổ hợp</li>
</ul>

<p style="color:#444;">
  Với vị trí đắc địa, dịch vụ trọn gói từ spa đến hội nghị, Diamond Bay là lựa chọn lý tưởng cho nghỉ dưỡng, hội họp và giải trí bên bãi biển Nha Trang.
</p>`,

    price: "1.150.000", // giá tham khảo từ 1.070.000đ/phòng/đêm
    address: "20 Trần Phú, P. Lộc Thọ, Tp. Nha Trang, Khánh Hòa",
    ultilities: "2 hồ bơi, Spa, Gym, Nhà hàng, Bar, Trung tâm hội nghị, Casino",
    thumbnail: "/hotel/diamond-bay.jpg",
    rule: `<h3 style="color:red;"><strong>Chính sách hủy & phụ thu:</strong></h3>
<p>Hủy linh hoạt tùy loại phòng – thường miễn phí nếu hủy trước 1–2 ngày. Phụ thu người thứ 3 và giường phụ tùy phòng.</p>
<h3>Quy định chung</h3>
<ul style="padding-left:20px; list-style-type:disc;">
  <li>Check‑in: từ 14:00, Check‑out: trước 12:00</li>
  <li>Không nhận thú cưng</li>
</ul>`,

    images: [
      "/hotel/diamond-bay-1.jpg",
      "/hotel/diamond-bay-2.jpg",
      "/hotel/diamond-bay-3.jpg",
      "/hotel/diamond-bay-4.jpg",
      "/hotel/diamond-bay-5.jpg",
      "/hotel/diamond-bay-6.jpg",
    ],

    roomDetails: [
      {
        id: "1",
        name: "Deluxe City View",
        capacity: "1 giường King – 2 người lớn",
        included: "Minibar, TV, két sắt, phòng tắm riêng",
        price: "1150000",
      },
      {
        id: "2",
        name: "Deluxe Ocean View",
        capacity: "1 giường King – 2 người lớn",
        included: "Minibar, TV, két sắt, phòng tắm + bồn tắm, view biển",
        price: "1350000",
      },
      {
        id: "3",
        name: "Grand Room Ocean View",
        capacity: "2 giường đơn – 2 người lớn",
        included: "Minibar, phòng tắm riêng, ban công biển",
        price: "1550000",
      },
      {
        id: "4",
        name: "Prime Suite Ocean View",
        capacity: "1 giường King + sofa bed – 3–4 người",
        included:
          "Phòng khách tách biệt, minibar, TV, bồn tắm + vòi đứng, ban công biển",
        price: "2250000",
      },
      {
        id: "5",
        name: "Elite Suite Ocean View",
        capacity: "1 giường King + sofa bed – 3–4 người",
        included:
          "Phòng rộng, minibar, TV, phòng tắm riêng, ban công & view biển",
        price: "2850000",
      },
    ],
  },
];
