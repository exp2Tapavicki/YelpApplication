import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Filters } from '../shared/models/filters.model'
import { Business } from '../shared/models/business.model';

// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  private search_url = '/v3/businesses/search';
  private details_url = '/v3/businesses/';
  private reviews_url = '/v3/businesses/{0}/reviews';
  private base_url = 'https://api.yelp.com/';
  private apiKey = 'Bearer JLt48hqsfzYTOT6j1hmzlkhsfXuIjfpQYNOjiw-nYe8zn51lCX8KRZCE5D-392dPGDVdx1TehOBQs8EgSaLqrUERA0bDBnFu5neBKK9A35Jh7jIavzj4qj5cs17NXXYx';

  
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  public getBusinesses(filter: Filters): Observable<any> {
    let first = true;
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': this.apiKey
      }
    );
    let query_params = '';

    if (filter.term != null && filter.term !== "") {
      query_params += (first ? '?' : '&') + 'term=' + encodeURIComponent(filter.term);
      first = false;
    }

    if (filter.locationOrLatitude !== true) {
      query_params += (first ? '?' : '&') + 'location=' + encodeURIComponent(filter.location);
      first = false;
    } else {
      query_params += (first ? '?' : '&') + 'latitude=' + filter.latitude;
      query_params += (first ? '?' : '&') + 'longitude=' + filter.longitude;
      first = false;
    }

    if (filter.radius != null) {
      query_params += (first ? '?' : '&') + 'radius=' + filter.radius;
      first = false;
    }

    if (filter.categories != null) {
      query_params += (first ? '?' : '&') + 'categories=' + encodeURIComponent(filter.categories.join());
      first = false;
    }

    if (filter.locale != null) {
      query_params += (first ? '?' : '&') + 'locale=' + encodeURIComponent(filter.locale);
      first = false;
    }

    if (filter.limit != null) {
      query_params += (first ? '?' : '&') + 'limit=' + filter.limit;
      first = false;
    }

    if (filter.offset != null) {
      query_params += (first ? '?' : '&') + 'offset=' + filter.offset;
      first = false;
    }

    if (filter.sort_by != null) {
      query_params += (first ? '?' : '&') + 'sort_by=' + encodeURIComponent(filter.sort_by);
      first = false;
    }

    if (filter.price != null) {
      query_params += (first ? '?' : '&') + 'price=' + encodeURIComponent(filter.price);
      first = false;
    }

    if (filter.openNowOrOpenAt === false) {
      query_params += (first ? '?' : '&') + 'open_now=' + filter.open_now;
      first = false;
    } 

    if (filter.openNowOrOpenAt === true) {
      if (filter.open_at != null) {
        query_params += (first ? '?' : '&') + 'open_at=' + filter.open_at;
        first = false;
      }
    }

    if (filter.attributes != null) {
      query_params += (first ? '?' : '&') + 'attributes=' + encodeURIComponent((filter.attributes).join());
      first = false;
    }

    return this.http.get(this.search_url + query_params, {headers: headers});
  }

  public getBusinessesDetailsById(id: string): Observable<any> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': this.apiKey
      }
    );
    return this.http.get(this.details_url + id, {headers: headers});
  }

  public getBusinessReviewsById(id: string): Observable<any> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': this.apiKey
      }
    );
    return this.http.get(FormatString(this.reviews_url, id), {headers: headers});
  }
  
}

export function FormatString(str: string, ...val: string[]) {
  for (let index = 0; index < val.length; index++) {
    str = str.replace(`{${index}}`, val[index]);
  }
  return str;
}
