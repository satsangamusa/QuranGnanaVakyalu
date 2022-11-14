import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from 'src/app/settings-modal/settings-modal.component';
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
 
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage {

  constructor(private platform: Platform,
    public globaldata: GlobalService,
    public modalController: ModalController) {

  }
  async presentModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalComponent
    });

    await modal.present();
  }
 
}
