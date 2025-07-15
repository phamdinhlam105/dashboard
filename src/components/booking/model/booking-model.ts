
export type BookingModel = {
    id: string;
    customerName: string;
    customerPhone: string;
    numberOfPerson: number;
    bookingDate: string;
    createDate: string;
    tourId?: string;
    hotelId?: string;
    status: "Chưa đặt" | "Đã đặt" | "Hoàn thành"
}