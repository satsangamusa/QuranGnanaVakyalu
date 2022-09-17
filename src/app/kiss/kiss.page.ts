import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from '../settings-modal/settings-modal.component';

@Component({
  selector: 'app-kiss',
  templateUrl: './kiss.page.html',
  styleUrls: ['./kiss.page.scss'],
})
export class KISSPage implements OnInit {

  constructor(public globaldata:GlobalService,
    public modalController:ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalComponent
    });
    
    await modal.present();
  } 
}
