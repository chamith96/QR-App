import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataScan: any;
  dataCreate: any;
  dataDisplay: any;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  createCode(){
    this.dataCreate = this.dataScan;
  }

  scanCode(){
    this.barcodeScanner.scan()
    .then((data) => {
      this.dataDisplay = data.text;
    })
    .catch((err) => {
      console.log('Error', err);
    });
  }

}
