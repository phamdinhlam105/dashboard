
export type HotelModel={
    id: string;
    name: string;
    slug: string;
    description: string;
    address: string;
    price: string;
    type: string;
    star: number;
    ultilities: string;
    rule:string;
    content:string;
    images: string[];
    status:number;
    shouldUpdateRoom?:boolean;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
    roomDetails:{
        id: string;
        name: string;
        capacity: string;
        price:string;
        included:string;
    }[]
}

export type HotelItemListModel = {
     id:string;
        name:string;
        address:string;
        price: string;
        star: number,
        roomCount: number,
        view: number,
        status: number,
        createdAt: string,
        updatedAt: string
  
}