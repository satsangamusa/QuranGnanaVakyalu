import { Component, OnInit } from '@angular/core';
import { IonSlides,Platform, ModalController } from '@ionic/angular';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalComponent } from '../settings-modal/settings-modal.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public modalController:ModalController,public globaldata:GlobalService) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalComponent
    });
    
    await modal.present();
  } 
}
