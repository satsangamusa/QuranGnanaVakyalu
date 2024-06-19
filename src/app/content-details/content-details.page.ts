import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import { ContentPipe } from '../content-pipe';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';

@Component({
  selector: 'app-content',
  templateUrl: './content-details.page.html',
  styleUrls: ['./content-details.page.scss'],
  standalone: true,
  providers:[ModalController],
  imports:[ContentPipe, SettingsModalPage, IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ContentDetailsPage implements OnInit {
  @ViewChild(IonContent)
  content!: IonContent;
  constructor(public modalController:ModalController,
    public globaldata:GlobalService) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage
    });

    await modal.present();
  }
  /*
  swipeLeft($event){
    if(this.globaldata.currentTatvam<111){

      this.globaldata.currentTatvam=this.globaldata.currentTatvam-1;
    }


  }
  swipeRight($event){
    if(this.globaldata.currentTatvam>1){

      this.globaldata.currentTatvam=this.globaldata.currentTatvam+1;
    }
  }*/
  openWisdomVideo(id: any){
     console.log(id);
  }
  goToTop() {
    this.content.scrollToTop(0);
    this.globaldata.currentTatvam=this.globaldata.currentTatvam+1;
    }
}
