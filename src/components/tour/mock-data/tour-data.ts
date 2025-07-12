import { TourModel } from "../model/tour-model";

export const TOUR_MOCK_DATA: TourModel[] = [
    {
        id: '1',
        name: 'Tour Bình Ba',
        slug: 'tour-binh-ba',
        description: 'Tour Bình Ba 1 ngày là hành trình tuyệt vời đưa bạn đến hòn đảo xinh đẹp nổi tiếng với làn nước trong xanh, bãi cát trắng mịn và những món hải sản tươi ngon. Đặc sắc của tour là trải nghiệm cảm giác vi vu trên ca nô ra đảo, tham quan các thắng cảnh nổi bật như Hòn Rùa, Bãi Chướng, Lô Cốt thời Pháp thuộc, thưởng thức bữa trưa hải sản đậm chất địa phương và thư giãn tắm biển tại Bãi Nồm. Đây chắc chắn sẽ là chuyến đi lý tưởng cho những ai yêu thiên nhiên, biển cả và muốn "đổi gió" trong ngày.',
        price: '800000',
        startingPlace: 'Nha Trang',
        thumbnail: '/tour/binh-ba.jpg',
        isAvailable:true,
        images: ["/tour/binh-ba.jpg", "/tour/binh-ba-1.jpg", "/tour/binh-ba-2.webp", "/tour/binh-ba-3.jpg", "/tour/binh-ba-4.jpg"],
        schedule: 'Cam Ranh - Đảo Bình Ba - Bãi Nồm',
        scheduleDetail: `<p><strong>8h00:</strong> Xe và HDV đón Quý Khách tại điểm hẹn trong TP. Nha Trang, khởi hành đi Tp. Cam Ranh.</p>
<p><strong>10h00:</strong>  Quý Khách có mặt tại Cảng Cam Ranh, nghỉ ngơi tại nhà chờ, sau khi làm xong thủ tục HDV mời Quý Khách lên ca nô và khởi hành qua Đảo Bình Ba.</p>
<p><strong>11h00:</strong> Quý Khách có mặt tại đảo, lên xe tham quan tìm hiểu cuộc sống của cư dân trên đảo và chụp hình lưu niệm tại các thắng cảnh như: Hòn Rùa, Bãi Chướng, Lô Cốt thời Pháp thuộc…</p>
<p><strong>12h00:</strong> Quý Khách dùng cơm trưa trên nhà bè với thực đơn phong phú đậm chất địa phương.</p>
<p><strong>13h30:</strong> Quý Khách di chuyển ra Bãi Nồm, nghỉ ngơi, tắm biển tự do và có thể tham gia các trò chơi thể thao cảm giác mạnh như: Jetski - mô tô nước, phao chuối (Chi phí tự túc).</p>
<p><strong>15h30:</strong> Quý Khách di chuyển xuống cảng, lên cano về lại đất liền. Xe đón Quý Khách trở về điểm xuất phát ban đầu. Kết thúc chương trình tour.</p>
`,
        tourDetail: {
            location: 'Nha Trang, Cam Ranh',
            food: 'Cơm trưa, đặc sản địa phương',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch, cano',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',       
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
    {
        id: '2',
        name: 'Tour Đồng Cừu - Vĩnh Hy - Vườn Nho - Hang Rái',
        slug: 'tour-dong-cuu-vinh-hy-vuon-nho-hang-rai',
        thumbnail: '/tour/dong-cuu.webp',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        description: 'Hành trình khám phá Ninh Thuận trong ngày sẽ đưa bạn đến với những điểm check-in "cực hot"như Đồng Cừu với hàng trăm chú cừu thân thiện, Hang Rái huyền bí – kiệt tác thiên nhiên được ví như “Sao Hỏa trên biển”, và vườn nho nổi tiếng nơi bạn có thể tự tay hái nho, thưởng thức và mua về làm quà. Bên cạnh đó, du khách còn được thưởng thức bữa trưa hải sản đậm vị địa phương tại nhà hàng Vĩnh Hy – tất cả trong một chuyến đi ngắn nhưng đầy trải nghiệm thú vị!',
        price: '600000',
        images: ["/tour/dong-cuu-1.jpg","/tour/dong-cuu-2.webp","/tour/dong-cuu-3.jpg","/tour/dong-cuu-4.jpg","/tour/dong-cuu-5.jpg",],
        schedule: 'Đồng Cừu - Vĩnh Hy - Vườn Nho - Hang Rái',
        scheduleDetail: `<p><strong>8h00:</strong> Xe và HDV đón Quý Khách tại điểm hẹn trong TP. Nha Trang. Khởi hành tham quan tour.</p>
<p><strong>10h00:</strong>  Quý Khách đến Đồng Cừu check in với hàng trăm chú cừu thân thiện, dễ thương.</p>
<p><strong>11h30:</strong> Quý Khách đến nhà hàng Vĩnh Hy dùng cơm trưa với thực đơn phong phú, mang đậm hương vị địa phương.</p>
<p><strong>13h00:</strong> Quý Khách đến Vườn Nho tự do chụp hình, thưởng thức nho tại vườn. Quý khách có thể mua nho tươi, nho khô, rượu nho, mật nho về làm quà.</p>
<p><strong>14h00:</strong> Quý Khách đến Hang Rái chiêm ngưỡng vẻ đẹp của thềm san hô cổ, được ví như "Sao Hỏa Trên Biển"– kiệt tác của thiên nhiên.</p>
<p><strong>15h30:</strong> Xe và HDV đưa Quý Khách trở về điểm đón ban đầu. Kết thúc chương trình Tour.</p>
`,
        tourDetail: {
            location: 'Nha Trang, Ninh Thuận',
            food: 'Cơm trưa, đặc sản địa phương',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
    {
        id: '3',
        name: 'Tour Bình Hưng',
        slug: 'tour-binh-hung',
        description: 'Tour Bình Hưng 1 ngày là lựa chọn lý tưởng cho những ai yêu biển và khám phá đảo. Khởi hành từ Nha Trang, tour đưa bạn đến Bãi Kinh để lên cano sang Đảo Bình Hưng, tham quan Bãi Đá Trứng độc đáo, chụp hình sống ảo thỏa thích. Thưởng thức bữa trưa hải sản tươi ngon tại nhà bè trên biển. Buổi chiều, du khách trở lại Bãi Kinh tắm biển, nghỉ ngơi hoặc trải nghiệm các trò chơi cảm giác mạnh như phao chuối, mô tô nước (chi phí tự túc). Một chuyến đi trọn vẹn với biển xanh, nắng vàng và những khoảnh khắc khó quên!',
        price: '800000',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        thumbnail: '/tour/binh-hung.webp',
        images: ['/tour/binh-hung-1.jpeg','/tour/binh-hung-2.jpg','/tour/binh-hung-3.jpg','/tour/binh-hung-4.jpg',],
        schedule: 'Bãi Kinh - Bãi Đá Trứng - nhà bè - Bãi Kinh',
        scheduleDetail: `<p><strong>8h00:</strong> Xe và HDV đón Quý khách tại điểm hẹn trong trung tâm Tp. Nha Trang. Khởi hành đi Đảo Bình Hưng.</p>
<p><strong>10h30:</strong> Quý Khách có mặt tại Bãi Kinh. Sau khi làm xong thủ tục, Quý khách lên cano qua Đảo Bình Hưng.</p>
<p><strong>10h45:</strong> Xe đưa Quý Khách tham quan Bãi Đá Trứng, check in chụp hình nơi đây.</p>
<p><strong>11h30:</strong> Quý Khách dùng bữa trưa tại nhà bè với thực đơn hải sản phong phú, đậm chất địa phương.</p>
<p><strong>13h30:</strong> Quý Khách di chuyển về Bãi Kinh, nghỉ ngơi, tắm biển và có thể tham gia trò chơi thể thao nước Phao chuối, moto nước... (chi phí tự túc)</p>
<p><strong>16h30:</strong> Xe và HDV đưa Quý Khách trở về điểm đón ban đầu. Kết thúc chương trình tour.</p>
`,
        tourDetail: {
            location: 'Nha Trang, Cam Ranh',
            food: 'Cơm trưa, đặc sản địa phương',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch, cano',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
    {
        id: '4',
        name: 'Tour 3 Đảo Cano',
        slug: 'tour-3-dao-cano',
        description: 'Trải nghiệm một ngày trọn vẹn cùng Đan Phát Tourist khám phá vẻ đẹp biển đảo Nha Trang. Tour đưa bạn đến Hòn Mun – khu bảo tồn biển lớn nhất Việt Nam để lặn ngắm san hô rực rỡ, thưởng thức hải sản tươi ngon tại Làng Chài và thư giãn tại Bãi Tranh với làn nước trong xanh cùng nhiều trò chơi biển hấp dẫn. Lịch trình hợp lý, dịch vụ chu đáo – lựa chọn lý tưởng cho chuyến đi đầy kỷ niệm!',
        price: '700000',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        thumbnail: '/homepage/tour.jpg',
        images: ["/tour/lang-chai.jpg", "/tour/hon-mun.jpg", "/homepage/tour.jpg", "/homepage/tour.jpg", "/tour/lang-chai.jpg"],
        schedule: 'Hòn Mun - Làng Chài - Bãi Tranh',
        scheduleDetail: `<p><strong>8h45 – 9h15:</strong> Xe và HDV của công ty du lịch Đan Phát đón quý khách tại điểm hẹn trong thành phố. Sau đó tiếp tục hành trình đi đến cảng Cầu Đá.</p>

  <p><strong>9h45:</strong> Sau khi đến cảng, HDV hướng dẫn quý khách lên tàu cano cao tốc, bắt đầu khởi hành cho chuyến đi về với biển, lịch trình tham quan chính thức bắt đầu:</p>

  <p><strong>10h00:</strong> Sau khi vượt sóng để đến với điểm lặn biển của chúng ta – Hòn Mun, cũng là khu bảo tồn biển lớn nhất Việt Nam. Chính thức bắt đầu hành trình với điểm lặn ngắm san hô đầu tiên, chắc hẳn du khách sẽ choáng ngợp trước vẻ đẹp kỳ ảo của thế giới đại dương nhiều màu sắc với hơn 800 loài san hô và 190 loài cá.</p>

  <p><strong>Du khách đến đây chủ yếu tham gia 3 hoạt động:</strong></p>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Tắm biển (Quý khách bắt buộc phải mặc áo phao và có thể thuê kính tắm để ngắm san hô).</li>
    <li>Đi tàu đáy kính (Đây là dịch vụ tại đảo, quý khách tự túc mua vé).</li>
    <li>Lặn biển bằng bình Oxy có thợ lặn lặn kèm (Đây là dịch vụ nổi bật nhất tại Hòn Mun, quý khách sẽ có cơ hội trải nghiệm cảm giác hòa mình vào lòng đại dương và tận tay sờ vào những loài san hô quý hiếm. Quý khách nên đăng ký dịch vụ lặn biển trước với chúng tôi).</li>
  </ul>

  <p><strong>11h30:</strong> Tạm biệt Hòn Mun, Quý khách sẽ tiếp tục di chuyển đến địa điểm thứ 2 – Làng Chài.</p>

  <p>So với một Hòn Mun đa dạng sắc màu thì Làng Chài tại vịnh Nha Trang yên bình và nhẹ nhàng hơn rất nhiều. Tại đây, du khách sẽ có cơ hội được tham quan một hệ thống bè nuôi trồng hải sản có quy mô lớn bậc nhất tại Vịnh.</p>

  <p>Sau một chuyến đi dài vào buổi sáng, lúc này, du khách đã bắt đầu cảm thấy mệt mỏi và mất sức. Đoàn về nhà hàng Đan Phát tại Làng Chài, thưởng thức một bữa ăn dân dã nhưng thơm ngon chắc chắn sẽ làm hài lòng vị giác của Quý Khách.</p>

  <p><strong>Thông thường, thực đơn của Quý Khách sẽ bao gồm:</strong></p>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Cá hấp hành gừng</li>
    <li>Tôm thịt ram mặn</li>
    <li>Trứng chiên</li>
    <li>Chả cá</li>
    <li>Rau xào tỏi</li>
    <li>Cơm trắng</li>
    <li>Trái cây tráng miệng</li>
  </ul>

  <p><strong>12h30:</strong> Dùng cơm trưa, nghỉ ngơi xong Đoàn tiếp tục hành trình, di chuyển đến khu vực Bãi Tranh – Bãi Tranh là một điểm du lịch nằm trên Hòn Miễu và gần Bãi Sạn. Đến với Bãi Tranh quý khách sẽ được:</p>

  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Đắm mình giữa biển xanh với làn nước trong vắt và bãi biển đẹp.</li>
    <li>Các tiện ích bãi biển miễn phí: ghế ngồi, bãi tắm.</li>
    <li>Tham gia những môn thể thao nước (có trả phí) như: Chèo thuyền Kayak, dù bay, mô tô nước...</li>
    <li>Tắm nước ngọt (có phí)</li>
  </ul>

  <p><strong>15h30:</strong> Cano cao tốc của Đan Phát Tour sẽ đưa Quý Khách quay trở lại với đất liền, sau đó, xe và hướng dẫn viên đưa Quý Khách về khách sạn. Qua đó, kết thúc hành trình du lịch hấp dẫn và thú vị của mình tại Nha Trang.</p>
`,
        tourDetail: {
            location: 'Nha Trang',
            food: 'Thực đơn trong chương trình có thể thay đổi theo mùa',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch, cano',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
    {
        id: '5',
        name: 'Tham Quan Đảo Điệp Sơn - Dốc Lết',
        slug: 'tham-quan-diep-son-doc-let',
        description: 'Khám phá con đường giữa biển độc đáo tại Đảo Điệp Sơn – kỳ quan thiên nhiên kỳ thú với làn nước trong xanh và trải nghiệm cuộc sống dân dã của ngư dân. Thưởng thức bữa trưa hải sản phong phú ngay trên đảo. Buổi chiều thư giãn tại bãi biển Dốc Lết – một trong những bãi tắm đẹp nhất Nha Trang. Hành trình lý tưởng cho kỳ nghỉ cuối tuần đầy thư giãn và khám phá!',
        price: '800000',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        thumbnail: '/tour/diep-son.jpg',
        images: ['/tour/diep-son-1.jpg','/tour/diep-son-2.jpg','/tour/diep-son-3.jpg','/tour/diep-son-4.jpg',],
        schedule: 'Đảo Điệp Sơn - Dốc Lết',
        scheduleDetail: ` <p><strong>07h30 - 08h30:</strong> Xe và HDV đón khách tại Trung tâm Tp. Nha Trang, khởi hành chuyến tham quan Đảo Điệp Sơn. Trên đường đi Quý khách được tìm hiểu những địa danh nổi tiếng như: Vịnh Nha Phu, Hòn Hèo, Chùa Linh Ứng, Đèo Rọ Tượng, Đèo Bánh Ít, Dốc Thị, v.v...</p>

  <p>Đến Cảng Vạn Giã, Quý khách lên Cano bắt đầu hành trình khám phá Đảo Điệp Sơn. Quý khách sẽ bắt đầu khám phá con đường xuyên biển đặc biệt nhất Đông Nam Á. Cùng nhau giao lưu với những shoot hình tuyệt đẹp, chinh phục con đường biển dài gần 700m nằm dưới mặt nước chưa tới nửa mét. Hòa mình vào làn nước trong xanh, Quý khách tự do tắm biển, bắt ốc, tập chèo thuyền thúng, trải nghiệm cuộc sống dân dã bình dị của người dân xứ đảo.</p>

  <p><strong>Trưa:</strong> Quý khách dùng cơm trưa tại nhà hàng trên đảo với những món hải sản tươi ngon xứ biển, thực đơn phong phú như:</p>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Mực xào chua ngọt</li>
    <li>Tôm nướng</li>
    <li>Cá chiên sốt cà</li>
    <li>Sườn ram</li>
    <li>Lẩu hải sản</li>
    <li>Bắp cải xào</li>
    <li>Trứng chiên</li>
    <li>Cơm, bún</li>
    <li>Trà đá</li>
    <li>Trái cây tráng miệng</li>
  </ul>
  <p><em>(Thực đơn có thể thay đổi theo mùa)</em></p>

  <p><strong>Buổi chiều – Khu du lịch Dốc Lết:</strong></p>

  <p>Sau bữa trưa, cano đưa Quý khách về lại đất liền, tiếp tục hành trình xe đưa quý khách đến tham quan KDL Dốc Lết – một trong những bãi biển đẹp nhất Nha Trang. Tại đây quý khách tự do tắm biển, chơi các trò chơi trên biển như: mô tô nước, dù bay, phao chuối... (chi phí tự túc)</p>

  <p><strong>16h30:</strong> Xe đưa quý khách về lại điểm đón ban đầu. Kết thúc tốt đẹp chuyến tham quan, hẹn gặp lại quý khách.</p>
  `,
        tourDetail: {
            location: 'Nha Trang, Vạn Giã, Ninh Hòa',
            food: 'Thực đơn trong chương trình có thể thay đổi theo mùa',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch, cano',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
    {
        id: '6',
        name: 'Tour Nha Trang - Bình Ba 2 Ngày 1 Đêm',
        slug: 'tour-nha-trang-binh-ba-2-ngay-1-dem',
        description: 'Tour 2 ngày 1 đêm đưa bạn rời xa nhịp sống xô bồ để tận hưởng không gian biển xanh, cát trắng và ẩm thực hải sản tươi ngon trên đảo Bình Ba. Tự do tắm biển tại Bãi Nồm, khám phá các địa điểm nổi bật như Hòn Rùa, Bãi Chướng, Đồi Cỏ Hồng… và thưởng thức tiệc BBQ hải sản trên nhà bè. Một hành trình vừa nghỉ dưỡng, vừa khám phá với những trải nghiệm đậm chất biển đảo khó quên!',
        price: '1800000',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        thumbnail: '/tour/binh-ba-2n.jpg',
        images: ['/tour/binh-ba-2n-1.jpg','/tour/binh-ba-2n-2.jpg','/tour/binh-ba-2n-3.jpg','/tour/binh-ba-2n-4.webp','/tour/binh-ba-2n-5.jpg',],
        schedule: 'Đảo Bình Ba - Bãi Nồm - Nhà Bè',
        scheduleDetail: `<h3 style="color: #007BFF;"><strong>TOUR BÌNH BA - NGÀY 01</strong></h3>

  <p><strong>08h00:</strong> HDV Đan Phát Travel đón khách tại khách sạn trong <span style="font-weight: 600;">Tp. Nha Trang</span>, khởi hành đi <span style="font-weight: 600;">Tp. Cam Ranh</span>.</p>

  <p><strong>10h00:</strong> Đoàn có mặt tại <span style="font-weight: 600;">Cảng Cam Ranh</span>, Quý khách nghỉ ngơi tại nhà chờ. Sau khi làm xong thủ tục, hướng dẫn viên mời Quý khách lên cano, khởi hành qua <span style="font-weight: 600;">Đảo Bình Ba</span>.</p>

  <p><strong>11h00:</strong> Quý khách đến <span style="font-weight: 600;">Bãi Nồm</span>, nghỉ ngơi và tự do tắm biển. Có thể tham gia các trò chơi cảm giác mạnh như: Jetski - moto nước, Phao Chuối (chi phí tự túc). Sau đó về nhận phòng.</p>

  <p><strong>12h00:</strong> Quý khách dùng cơm trưa với các món ăn dân dã đặc trưng vùng biển:</p>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Canh Chua Cá Biển</li>
    <li>Cá Chiên Xoài Bằm</li>
    <li>Nghêu Hấp Xả</li>
    <li>Tả Pín Lù</li>
    <li>Tôm - Mực Rim Mặn</li>
    <li>Rau Xào</li>
    <li>Cơm Trắng</li>
    <li>Trà Đá</li>
  </ul>

  <p><strong>15h00:</strong> Quý khách tự do tham quan, tìm hiểu cuộc sống cư dân trên đảo và chụp hình lưu niệm tại các địa danh nổi tiếng như: <span style="font-weight: 600;">Đồi Cỏ Hồng</span>, <span style="font-weight: 600;">Hòn Rùa</span>, <span style="font-weight: 600;">Cửa Lớn</span>, <span style="font-weight: 600;">Bãi Chướng</span>, <span style="font-weight: 600;">Cửa Nhỏ</span>, <span style="font-weight: 600;">Lô Cốt thời Pháp thuộc</span>,...</p>

  <p><strong>18h30:</strong> Quý khách di chuyển xuống <span style="font-weight: 600;">nhà Bè</span> để tham gia bữa tiệc nướng BBQ hải sản. Buổi tối tự do tham quan.</p>

  <h3 style="color: #007BFF;"><strong>TOUR BÌNH BA - NGÀY 02</strong></h3>

  <p><strong>07h30:</strong> Quý khách ăn sáng với những món ăn đậm chất địa phương.</p>

  <p><strong>11h30:</strong> Sắp xếp hành lý, trả phòng và xuống <span style="font-weight: 600;">nhà Bè</span> để dùng bữa trưa.</p>

  <p><strong>14h00:</strong> Quý khách nghỉ ngơi tại <span style="font-weight: 600;">nhà Bè</span>, tự do mua sắm các sản vật nổi tiếng địa phương.</p>

  <p><strong>15h45:</strong> Di chuyển ra cảng, lên cano về lại <span style="font-weight: 600;">Tp. Cam Ranh</span>, xe đưa Quý khách về đất liền. Kết thúc chương trình.</p>

  <h3><strong>THÔNG TIN ĐẢO BÌNH BA</strong></h3>

  <p><span style="font-weight: 600;">Đảo Bình Ba Cam Ranh</span> được mệnh danh là “<span style="font-weight: 600;">Quốc Đảo Tôm Hùm</span>” – một điểm đến tuyệt đẹp của <span style="font-weight: 600;">Khánh Hòa</span>, với nhiều bãi biển hoang sơ quyến rũ cùng ẩm thực hải sản phong phú. Hứa hẹn mang đến cho du khách những trải nghiệm khó quên.</p>

  <p><strong>Đảo Bình Ba ở đâu?</strong><br>
  Bình Ba là một đảo nhỏ (~3km²) thuộc xã <span style="font-weight: 600;">Cam Bình</span>, thành phố <span style="font-weight: 600;">Cam Ranh</span>, tỉnh <span style="font-weight: 600;">Khánh Hòa</span>, cách <span style="font-weight: 600;">Nha Trang</span> khoảng 60km. Muốn đến đây phải qua <span style="font-weight: 600;">cảng Ba Ngòi</span>.</p>

  <p>Với khoảng 700 hộ dân (5.000 người), đảo mang đến cho du khách không gian yên bình, biển xanh cát trắng, tránh xa ồn ào phố thị.</p>

  <p><strong>Đến Bình Ba chơi gì?</strong><br>
  Bình Ba có 3 bãi tắm chính:</p>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li><span style="font-weight: 600;">Bãi Nồm:</span> Sóng lớn, thích hợp cưỡi sóng, không ngắm được bình minh/hoàng hôn.</li>
    <li><span style="font-weight: 600;">Bãi Nhà Cũ:</span> Biển trong, cát trắng, dịch vụ đa dạng như mô tô nước, phao chuối (giá khoảng 100.000đ/lượt).</li>
    <li><span style="font-weight: 600;">Bãi Chướng:</span> Lý tưởng để ngắm bình minh. Cảnh sắc hoang sơ, thơ mộng.</li>
  </ul>

  <p>Từ tháng 3 trở đi, Bình Ba còn nổi bật với <span style="font-weight: 600;">Đồi Cỏ Lau</span> gần <span style="font-weight: 600;">Hòn Rùa</span>, nơi những bông lau phớt hồng trải dài tạo nên bức tranh biển trời hữu tình, rất được yêu thích bởi giới trẻ yêu thích check-in.</p>
` ,
        tourDetail: {
            location: 'Nha Trang, Cam Ranh',
            food: 'Thực đơn trong chương trình có thể thay đổi theo mùa',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch, cano',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
 {
        id: '7',
        name: 'Tour Lặn Biển Hòn Mun',
        slug: 'tour-lan-bien-binh-hon-mun',
        description: 'Tour lặn biển trong ngày đưa bạn đến hai điểm lặn đẹp nhất tại Hòn Mun, nơi sở hữu hệ sinh thái san hô và sinh vật biển phong phú bậc nhất. Tận hưởng cảm giác bồng bềnh giữa biển xanh, ngắm nhìn thế giới đại dương kỳ ảo, thưởng thức trái cây và bữa trưa trên tàu. Dù không biết bơi, bạn vẫn có thể yên tâm trải nghiệm cùng huấn luyện viên chuyên nghiệp luôn đồng hành.',
        price: '900000',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        thumbnail: '/tour/hon-mun.png',
        images: ['/tour/hon-mun-1.jpg','/tour/hon-mun-2.webp','/tour/hon-mun-3.webp','/tour/hon-mun-4.webp','/tour/hon-mun-5.jpg','/tour/hon-mun-6.jpg',],
        schedule: 'Hòn Mun',
        scheduleDetail: `<p><strong>07h30:</strong> Xe và hướng dẫn viên đón khách tại khách sạn.</p>

  <p><strong>08h00:</strong> Tàu khởi hành từ cảng Cầu Đá.</p>

  <p><strong>08h45:</strong> Đến Hòn Mun – Điểm lặn thứ nhất.</p>

  <p><strong>09h45:</strong> Quý khách tự do tắm biển, nghỉ ngơi. Thưởng thức trà, cà phê và trái cây trên tàu.</p>

  <p><strong>11h00:</strong> Đến Hòn Mun – Điểm lặn thứ hai.</p>

  <p><strong>12h30:</strong> Nghỉ ngơi, thư giãn và dùng cơm trưa trên tàu.</p>

  <p><strong>13h30:</strong> Xe và hướng dẫn viên đưa Quý khách về lại khách sạn. Kết thúc chương trình.</p>

  <p><strong>Đặc biệt:</strong> Quý khách không biết bơi sẽ được Huấn luyện viên chuyên nghiệp lặn cùng và xử lý mọi thao tác kỹ thuật dưới nước trong quá trình tham quan đáy đại dương.</p>
` ,
        tourDetail: {
            location: 'Nha Trang',
            food: 'Cà phê, trái cây, cơm trưa',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch, cano',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
     {
        id: '8',
        name: 'Tour Nha Trang - Đà Lạt',
        slug: 'tour-nha-trang-da-lat',
        description: 'Khởi hành từ Nha Trang, tour đưa bạn lên cao nguyên Đà Lạt mộng mơ chỉ trong 1 ngày. Tham quan những địa danh nổi tiếng như Hồ Than Thở, Dinh Bảo Đại, Thiền Viện Trúc Lâm, Đường Hầm Đất Sét… và tận hưởng bầu không khí se lạnh, thơ mộng đặc trưng của thành phố hoa.',
        price: 'Liên hệ',
        isAvailable:true,
        startingPlace: 'Nha Trang',
        thumbnail: '/tour/da-lat.jpg',
        images: ['/tour/da-lat-1.webp','/tour/da-lat-2.webp','/tour/da-lat-3.jpg','/tour/da-lat-4.webp','/tour/da-lat-5.jpg','/tour/da-lat-6.jpg',],
        schedule: 'Nha Trang - Đà Lạt',
        scheduleDetail: `<p><strong>07h00:</strong> Xe và HDV đón Quý khách tại khách sạn và khởi hành đi Đà Lạt.</p>

  <p><strong>08h30:</strong> Dừng chân dọc đường để chụp hình và ngắm cảnh.</p>

  <p><strong>11h00:</strong> Trên đường vào trung tâm Thành phố Đà Lạt, Quý khách ghé thăm Hồ Than Thở – Đồi Thông Hai Mộ và dùng cơm trưa tại nhà hàng.</p>

  <p><strong>12h30:</strong> Tiếp tục tham quan các điểm:</p>
  <ul style="padding-left: 20px; list-style-type: disc;">
    <li>Dinh Bảo Đại</li>
    <li>Thiền Viện Trúc Lâm</li>
    <li>Vườn hoa thành phố Đà Lạt</li>
    <li>Đường Hầm Đất Sét, Cổng Trời</li>
  </ul>

  <p><strong>16h00:</strong> Xe khởi hành từ Đà Lạt về lại Nha Trang.</p>

  <p><strong>19h00:</strong> Xe đưa Quý khách về lại khách sạn.</p>

  <p>Kết thúc chương trình và hẹn gặp lại Quý khách lần sau.</p>
  ` ,
        tourDetail: {
            location: 'Nha Trang, Đà Lạt',
            food: 'Cơm trưa tại nhà hàng',
            suitablePerson: 'Người lớn tuổi, Cặp đôi, Gia đình nhiều thế hệ, Thanh niên, Trẻ em',
            idealTime: 'Quanh năm',
            transportation: 'Xe du lịch',
            promotion: 'Đã ưu đãi trực tiếp vào giá tour',
        },
        noticeInformation: {
            priceIncluded: 'Ăn trưa, Xe, Cano, Nước suối, Vé tham quan, Hướng dẫn viên, Bảo hiểm du lịch',
            priceNotIncluded: 'Chi phí cá nhân, Thuế VAT',
        },
            createdAt:'2023-10-01T10:00:00Z',
            updatedAt:'2023-10-01T10:00:00Z',
    },
]