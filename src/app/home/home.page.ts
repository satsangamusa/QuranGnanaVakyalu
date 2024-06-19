import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import { ContentPipe } from '../content-pipe';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  providers:[ModalController],
  imports:[ContentPipe, SettingsModalPage, IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {
  constructor(public modalController:ModalController,public globaldata:GlobalService) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage
    });

    await modal.present();
  }
}
