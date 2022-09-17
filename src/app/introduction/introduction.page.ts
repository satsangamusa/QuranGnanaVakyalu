import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalComponent } from 'src/app/settings-modal/settings-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {

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
