export class Business {
    term: string; // Optional
    locationOrLatitude: boolean; // helper
    location: string; // required location or latitude and logitude
    latitude: number; // required location or latitude and logitude
    longitude: number; // required location or latitude and logitude
    radius: number; // Optional
    categories: string; // Optional
    locale: string; // Optional
    limit: number; // Optional
    offset: number; // Optional
    sort_by: string = "best_match"; // Optional
    price: string; // Optional\
    openNowOrOpenAt: boolean = false; //helper
    open_now: boolean = false; // Optional
    open_at: number; // Optional
    attributes: string; // Optional
  }
  