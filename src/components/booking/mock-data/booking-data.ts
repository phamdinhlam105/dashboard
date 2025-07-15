import { BookingModel } from "../model/booking-model";

export const BOOKING_MOCK_DATA:BookingModel[] = [
    {
        id: "1",
        customerName: "Nguyen Van A",
        customerPhone: "0123456789",
        numberOfPerson: 2,
        bookingDate: "2023-10-01",
        createDate: "2023-10-01",
        tourId: "tour1",
        hotelId: "hotel1",
        status:"Chưa đặt"
    },
    {
        id: "2",
        customerName: "Nguyen Van B",
        customerPhone: "0123456789",
        numberOfPerson: 2,
        bookingDate: "2023-10-01",
        createDate: "2023-10-01",
        tourId: "tour1",
        hotelId: "hotel1",
        status:"Hoàn thành"
    },
    {
        id: "3",
        customerName: "Nguyen Van C",
        customerPhone: "0123456789",
        numberOfPerson: 2,
        bookingDate: "2023-10-01",
        createDate: "2023-10-01",
        tourId: "tour1",
        status:"Đã đặt"
    },
]