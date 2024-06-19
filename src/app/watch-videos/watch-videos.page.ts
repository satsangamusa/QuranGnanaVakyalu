import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import { ContentPipe } from '../content-pipe';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';
@Component({
  selector: 'app-watch-videos',
  templateUrl: './watch-videos.page.html',
  styleUrls: ['./watch-videos.page.scss'],
  standalone: true,
  providers:[ModalController],
  imports:[ContentPipe, SettingsModalPage, IonCard, CommonModule,IonCol,IonIcon,IonHeader,IonMenuButton,IonMenu,IonMenuToggle,IonToolbar,IonTitle,IonButton,IonButtons,IonContent,IonRow,IonGrid,IonSearchbar,IonList,IonItem,IonLabel],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class WatchVideosPage implements OnInit {

  constructor(public globaldata:GlobalService ) { }

  ngOnInit() {
  }
  openWisdomVideo(id: string){
    console.log(id)
    const link = 'https://www.youtube.com/watch?v='+id;
    Browser.open({url:link});
  }

  videos: any = [
    {
      title: "దివ్యఖురాన్ - హదీస్",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/BtkFpS113tA/hqdefault.jpg",

      id: "BtkFpS113tA"
    },


    {
      title: "పథము - మతము",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/oJzEAGDLGJI/hqdefault.jpg",

      id: "oJzEAGDLGJI"
    },
    {
      title: "దైవ ధర్మములు - మత సాంప్రదాయములు",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/lcwyET_gDFM/hqdefault.jpg",

      id: "lcwyET_gDFM"
    },
    {
      title: "ఆహారము నీకా! నీ ఆత్మకా!!",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/ReqQ4Ti3TLs/hqdefault.jpg",

      id: "ReqQ4Ti3TLs"
    },
    {
      title: "మాత్ర-మందు",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/Pa7tgE2PnQI/hqdefault.jpg",

      id: "Pa7tgE2PnQI"
    },

    {
      title: "గ్రాహిత శక్తి",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/VeqoOM7pNEg/hqdefault.jpg",

      id: "VeqoOM7pNEg"
    },
    {
      title: "దైవ గ్రంథము",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/7kXscoStXzI/hqdefault.jpg",

      id: "7kXscoStXzI"
    },
    {
      title: "దేవుని ఆజ్ఞ మరణము",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"https://img.youtube.com/vi/w7R-DppisKw/hqdefault.jpg",

      id: "w7R-DppisKw"
    },

  ];

}
