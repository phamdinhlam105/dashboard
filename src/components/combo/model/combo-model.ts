export type ComboModel = {
  id: string;
  slug:string;
  tourId?: string;
  hotelId?: string;
  tourName?: string;
  hotelName?: string;
  applyDate: string;
  endDate: string;
  name: string;
  price: string;
  view: number;
  description:string;
  transportation:string;
};

export type ComboItemList = {
  id: string;
  tourId?: string;
  hotelId?: string;
  tourName?: string;
  hotelName?: string;
  applyDate: string;
  endDate: string;
  name: string;
  price: string;
  view: number;
};
