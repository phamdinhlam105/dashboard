import { Label } from "../ui/label";

export default function BannerChange() {
  return (
    <div className="rounded-lg shadow-md p-4 space-y-4">
      <div className="space-y-4">
        <Label className="text-xl text-center">Hướng dẫn sử dụng</Label>
        <div className="space-y-4 rounded shadow-lg p-4">
          <h3 className="font-medium text-xl">Hình ảnh:</h3>
          <ul className="list-disc pl-4">
            <li>
              <p>
                Up hình ảnh trước khi sử dụng trong bài viết, tour và khách sạn
              </p>
            </li>
            <li>
              <p>Nếu là ảnh tour thì đặt tên dạng : Tour.....</p>
            </li>
            <li>
              <p>Nếu là ảnh khách sạn thì đặt tên dạng : Hotel.....</p>
            </li>
            <li>
              <p>Nếu là ảnh bài viết thì đặt tên dạng : Post.....</p>
            </li>
            <li>
              <p>
                Nếu là ảnh thumbnail thì phải có chữ thumbnail trong tên ảnh
              </p>
            </li>
          </ul>
        </div>
         <div className="space-y-4 rounded shadow-lg p-4">
          <h3 className="font-medium text-xl">Tour, Khách sạn, Bài viết:</h3>
          <ul className="list-disc pl-4">
            <li>
              <p>
               Các đường dẫn của cùng 1 loại không được trùng nhau (VD: không thể có 2 tour có đường dẫn giống nhau)
              </p>
            </li>
            <li>
              <p>Chi tiết phòng của khách sạn nếu sửa sai hãy dùng nút refresh để quay lại thông tin ban đầu</p>
            </li>
            <li>
              <p>
                Nhớ dùng up ảnh bằng url và copy url từ danh sách ảnh trong quản lý files
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
