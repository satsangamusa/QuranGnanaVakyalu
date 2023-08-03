import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalComponent } from 'src/app/settings-modal/settings-modal.component';
import { ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.page.html',
  styleUrls: ['./content-details.page.scss'],
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
      component: SettingsModalComponent
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
