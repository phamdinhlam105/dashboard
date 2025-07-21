export type BookingModel = {
  id: string;
  customerId: string;
  customerName: string;
  phoneNumber: string;
  numberOfPerson: number;
  bookingDate: string;
  createdAt: string;
  tourName: string[];
  hotelName: string[];
  comboName: string[];
  isOrdered: boolean;
  isFinished: boolean;
  email: string | null;
  note: string | null;
};
