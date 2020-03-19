export class Filters {
  term: string; // Optional
  locationOrLatitude: boolean = false; // helper
  location: string; // required location or latitude and logitude
  latitude: number; // required location or latitude and logitude
  longitude: number; // required location or latitude and logitude
  radius: number; // Optional
  categories: Array<String>; // Optional
  locale: string; // Optional
  limit: number; // Optional
  offset: number; // Optional
  sort_by: string = "best_match"; // Optional
  price: string; // Optional\
  openNowOrOpenAt: boolean = false; //helper
  open_now: boolean = false; // Optional
  open_at: number; // Optional
  attributes: Array<String>; // Optional
}
