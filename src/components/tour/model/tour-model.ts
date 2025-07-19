export type TourModel = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  startingPlace: string;
  schedule: string;
  scheduleDetail: string;
  status: number;
  tourDetail: {
    location: string;
    food: string;
    suitablePerson: string;
    idealTime: string;
    transportation: string;
    promotion: string;
  };
  images: string[];
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
};

export type TourItemList = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  status: number;
  view: number;
  createdAt: string;
  updatedAt: string;
};
