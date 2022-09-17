import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
GlobalService
@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit {
   textSize = 18;
   red = 255;
   green = 255;
   blue = 255;
   fontRed = 0;
   fontGreen = 0;
   fontBlue = 0;
   bgColor = '#ffffff';
   fontColor = '#000000';
   appliedClas:any = [];
  constructor(public globaldata:GlobalService,private modalController: ModalController) {
     
  }

 
 ngOnInit() {
 }
 increaseFont(){
   this.globaldata.fontSize=this.globaldata.fontSize+1;
 }
 async closeModal() {
   const modal = await this.modalController.getTop();
   modal.dismiss();
}
 reduceFont(){
   
   this.globaldata.fontSize=this.globaldata.fontSize-1;
 }
 setGlobalText () {
  this.globaldata.fontSize = this.textSize;
};
applyColors () {
  this.bgColor = this.fullColorHex(this.red, this.green, this.blue);
  this.fontColor = this.fullColorHex(this.fontRed, this.fontGreen, this.fontBlue);
  this.globaldata.bgColor = '#' + this.bgColor;
  this.globaldata.fontColor = '#' + this.fontColor;
  console.log(this.globaldata.bgColor);
  console.log(this.globaldata.fontColor);
  this.appliedClas.push({ 'background-color': this.bgColor });
  this.appliedClas.push({ 'color': this.fontColor });
};
setDefaultColors () {
  this.globaldata.fontSize=15;
  this.bgColor = this.fullColorHex(255, 255, 255);
  this.fontColor = this.fullColorHex(0, 0, 0);
  this.globaldata.bgColor = '#' + this.bgColor;
  this.globaldata.fontColor = '#' + this.fontColor;
  console.log(this.globaldata.bgColor);
  console.log(this.globaldata.fontColor);
  this.red = 255;
  this.green = 255;
  this.blue = 255;
  this.fontRed = 0;
  this.fontGreen = 0;
  this.fontBlue = 0;
  this.applyColors();
};
fullColorHex (r, g, b) {
  var red = this.rgbToHex(r);
  var green = this.rgbToHex(g);
  var blue = this.rgbToHex(b);
  return red + green + blue;
};
;
 rgbToHex (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
      hex = "0" + hex;
  }
  return hex;
};

}