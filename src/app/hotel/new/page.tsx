import Header from "@/components/header/header";
import NewHotelAdditionalDetail from "@/components/hotel/new/hotel-additional-detail";
import NewHotelContent from "@/components/hotel/new/hotel-content";

export default function NewHotelPage() {
  return (
    <>
      <Header title="Khách sạn mới" />
      <div className="p-4 flex space-x-4">
        <NewHotelContent />
        <NewHotelAdditionalDetail />
      </div>
    </>
  );
}
