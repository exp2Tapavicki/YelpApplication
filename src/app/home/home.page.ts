import { Component } from '@angular/core';
import { Filters } from '../shared/models/filters.model';
import { Categories } from '../shared/models/categories.model'
import { Languages } from '../shared/models/languages.model'
import { Prices } from '../shared/models/prices.model'
import { Attributes } from '../shared/models/attributes.model'


import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { BusinessesService } from '../services/businesses.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public filter: Filters = new Filters();
  public isHidden: boolean = false;
  public categories = Categories;
  public languages = Languages;
  public prices = Prices;
  public attributes = Attributes;
  private loaderToShow: any;

  public businessDataObs: Observable<any>;

  public businessData = Array<Object>();

  constructor(private loadingController: LoadingController, private businessesService: BusinessesService, private alertController: AlertController) {
  }


  protected showHideFilters(): void {
    this.isHidden = !this.isHidden;
  }

  protected resetFilters(): void {
    this.isHidden = false;
    this.filter = new Filters();
    this.businessData = Array<Object>();
  }

  protected validateFilters(filter: Filters): boolean {
    if (filter != null && filter.locationOrLatitude === true) {
      if (filter.latitude == null || filter.longitude == null) {
        return false;
      } else {
        return true;
      }
    } else if (filter != null && filter.locationOrLatitude == false) {
      if (filter.location == null || filter.location === '') {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  protected filterData(): void {
    if (!this.validateFilters(this.filter)) {
      this.showAlert("Warning", 'Location or Latitude and longitude is required');
    } else {
      this.showLoader();
      this.businessDataObs = this.businessesService.getBusinesses(this.filter);
      this.businessDataObs.subscribe(
        (response: any) => {
          this.businessData = response.businesses;
          this.hideLoader();
          this.showHideFilters();
        },
        error => {
          this.showAlert("Error", error.error.error.description);
          this.hideLoader();
        }
      );
    }
  }

  protected async showAlert(header: string, message: string) {
    let alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }


  protected showLoader(): void {
    this.loaderToShow = this.loadingController.create({
      message: 'Loading...'
    }).then((res) => {
      res.present();

      res.onDidDismiss().then((dis) => {
        // console.log('Loading dismissed!');
      });
    });
  }

  protected hideLoader(): void {
    this.loadingController.dismiss();
  }

}
