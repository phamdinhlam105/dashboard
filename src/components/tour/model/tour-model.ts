
export type TourModel = {
  id: string;
  name: string;
  slug:string;
  description: string;
  price: string;
  startingPlace: string;
  schedule: string;
  scheduleDetail: string;
  tourDetail:{
    location: string;
    food: string;
    suitablePerson: string;
    idealTime: string;
    transportation: string;
    promotion: string;
  }
  noticeInformation:{
    priceIncluded: string;
    priceNotIncluded: string;
  }
  images: string[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  isAvailable: boolean;
};