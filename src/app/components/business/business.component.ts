import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessesService, SearchType } from '../../services/businesses.service';

import { LoadingController, AlertController } from '@ionic/angular';
import { Mode } from '@ionic/core'


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {

  @Input() businessData: Array<Object>;

  private businessDetailsObs: Observable<any>;
  public businessDetails = Array<Object>();
  private businessReviewsObs: Observable<any>;
  public businessReviews = Array<Object>();
  private loaderToShow: any;

  constructor(private businessesService: BusinessesService, private alertController: AlertController, private loadingController: LoadingController) {

  }

  public ngOnInit() {

  }

  private async showAlert(header: string, message: string, mode: Mode, buttons: Array<Object>) {
    const alert = await this.alertController.create({
      header: header,
      mode: mode,
      message: message,
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (hand) => {
            console.log('Confirm Cancel:');
          }
        }
      ]
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

  protected getDetails(business): void {
    this.showLoader();
    this.businessDetailsObs = this.businessesService.getBusinessesDetailsById(business.id);
    this.businessDetailsObs.subscribe(
      (response: any) => {
        this.businessDetails = response;
        this.hideLoader();
        this.showAlert(
          'Info',
          '<div style="max-height: 100%; display: flex; flex-direction: column; overflow: scroll;">' + JSON.stringify(this.businessDetails) + '</div>',
          'md',
          [
            {
              text: 'Close',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (hand) => {
                console.log('Confirm Cancel:');
              }
            }
          ]
        );
      },
      error => {
        this.showAlert(
          "Error",
          error.error.error.description,
          'md',
          [
            {
              text: 'Close',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (hand) => {
                console.log('Confirm Cancel:');
              }
            }
          ]);
        this.hideLoader();
      }
    );
  }

  protected getReviews(business): void {
    this.showLoader();
    this.businessReviewsObs = this.businessesService.getBusinessReviewsById(business.id);
    this.businessReviewsObs.subscribe(
      (response: any) => {
        this.businessReviews = response;
        this.hideLoader();
        this.showAlert(
          'Info',
          '<div style="max-height: 100%; display: flex; flex-direction: column; overflow: scroll;">' + JSON.stringify(this.businessReviews) + '</div>',
          'md',
          [
            {
              text: 'Close',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (hand) => {
                console.log('Confirm Cancel:');
              }
            }
          ]
        );
      },
      error => {
        this.showAlert(
          "Error",
          error.error.error.description,
          'md',
          [
            {
              text: 'Close',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (hand) => {
                console.log('Confirm Cancel:');
              }
            }
          ]);
        this.hideLoader();
      }
    );
  }
}
