import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonRow, IonSearchbar, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';
@Component({
    selector: 'app-songs',
    templateUrl: './songs.page.html',
    styleUrls: ['./songs.page.scss'],
    standalone: true,
    imports: [
      SettingsModalPage,
      CommonModule,
      IonCard,
      FormsModule,
      IonCol,
      IonIcon,
      IonHeader,
      IonMenuButton,
      IonMenu,
      IonMenuToggle,
      IonToolbar,
      IonTitle,
      IonButton,
      IonButtons,
      IonContent,
      IonRow,
      IonGrid,
      IonSearchbar,
      IonList,
      IonItem,
      IonLabel,
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SongsPage implements OnInit {

  private audioPointer!: BehaviorSubject<any>;

  public getAudioPointer(): Observable<any> {
    return this.audioPointer.asObservable();
  }
  public setAudioPointer(newValue: any): void {
    this.audioPointer.next(newValue);
  }
  constructor(
    public globaldata: GlobalService,
    public platform:Platform,
    public modalController: ModalController
  ) {
    this.width = this.platform.width();
    this.height = this.platform.height();
    for (let audio of this.audios) {
      if (audio.id) {
        audio.id =
        'https://ia601301.us.archive.org/26/items/gnanavahinivideo/' +
          audio.id;
      }
    }
  }
  gotoYouTube(ytUrl: any) {
    Browser.open({ url: ytUrl });
  }
  async presentModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage,
    });

    await modal.present();
  }

  async ionViewDidEnter() {

    this.platform.resize.subscribe(async () => {
      this.width = this.platform.width();
      this.height = this.platform.height();
      var sound: any = document.getElementById('gdVideoId');
      if (this.width && sound) {
        sound.width = this.width * (95 / 100);
      }
    });
    await this.getSelectedAudio();
    this.currentAudio = this.filteredAudios[0];
    this.audioPointer = new BehaviorSubject<any>(this.currentAudio);
    this.getAudioPointer().subscribe((value) => {
      this.currentAudio = value;
      let elm: any = document.getElementById('gdVideoId');
      while (elm?.firstChild) {
        elm.removeChild(elm.lastChild);
      }
      var sound: any = document.createElement('video');
      sound.id = 'video-player';
      sound.controls = 'controls';
      sound.autoplay = 'autoplay';
      sound.width = this.width * (95 / 100);
      sound.src = `${this.currentAudio?.id}`;
      sound.type = 'video/mp4';

      elm.appendChild(sound);
    });
    if (this.currentAudio) {
      this.selectedAudio(this.currentAudio);
    }
    //this.setAudioPointer(this.globaldata.movies[1]);
  }
  ionViewDidLeave() {
    if (!this.clickedSongDetails) {
      let elm: any = document.getElementById('gdVideoId');
      while (elm?.firstChild) {
        elm.removeChild(elm.lastChild);
      }
    }
  }
  currentAudio: any;
  ihtml: any;
  width: any;
  height: any;
  ngOnInit() {}
  filteredAudios: any = [];
  gdSearchText:any="అల్లాహ్";
  async handleChange(event: any) {

      if (this.gdSearchText) {
        this.filteredAudios = this.audios.filter(
          (element: any) =>
            element.title?.includes(this.gdSearchText) ||
            element.eng
              ?.toUpperCase()
              ?.includes(this.gdSearchText?.toUpperCase())
        );
      }

  }

  async getSelectedAudio() {
      if (this.gdSearchText) {
        this.filteredAudios = this.audios.filter(
          (element: any) =>
            element.title?.includes(this.gdSearchText) ||
            element.eng
              ?.toUpperCase()
              ?.includes(this.gdSearchText?.toUpperCase())
        );

      }
  }
  selectedAudio(audio: any) {
    this.filteredAudios = null;
    this.currentAudio = audio;
    this.setAudioPointer(audio);
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      this.first(audio);
    });
  }
  clickedSongDetails: any = false;
  songText:any='';
  songDetails(st: any) {
    this.clickedSongDetails = true;
    this.songText = st;
  }
  first(nxtAudio: any) {
    if (nxtAudio) {
      let indx = this.audios.indexOf(nxtAudio);
      let len = this.audios.length;
      indx++;
      if (!(indx === len) && !(indx === len)) {
        this.currentAudio = this.audios[indx];
        this.setAudioPointer(this.audios[indx]);
      }
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.first(this.audios[indx]);
      });
    }
  }
  last(lstAudio: any) {
    if (lstAudio) {
      let indx = this.audios.indexOf(lstAudio);
      let len = this.audios.length;
      indx--;
      if (indx > 0 && indx < len - 1) {
        this.setAudioPointer(this.audios[indx]);
        this.currentAudio = this.audios[indx];
      }
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.last(this.audios[indx]);
      });
    }
  }
  ascendingFlag = true;
  veryFirst() {
    let len = this.audios.length;
    if (len > 0) {
      this.currentAudio = this.audios[0];
      this.setAudioPointer(this.audios[0]);
    }
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      if (len > 1) this.first(this.audios[0]);
    });
  }
  veryLast() {
    let len = this.audios.length;
    if (len >= 1) {
      this.currentAudio = this.audios[len - 1];
      this.setAudioPointer(this.audios[len - 1]);
    }
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      if (len > 2) this.last(this.audios[len - 1]);
    });
  }
  shuffle() {
    if (this.audios?.length > 1) {
      let audio = this.audios[Math.floor(Math.random() * this.audios.length)];
      this.currentAudio = audio;
      this.setAudioPointer(audio);
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.shuffle();
      });
    }
  }

  audios:  any = [
    {
        title: "అల్లాహ్ తో సావాసం",
        eng:"Allah tho Savasam",
        imageUrl:"https://img.youtube.com/vi/a13oh4UDQv0/hqdefault.jpg",
        ytUrl:"https://www.youtube.com/watch?v=a13oh4UDQv0",
        id: "143AllahThoSavasam.mp4"
      },
    {
        title: "దేవుని తీర్పు",
        eng:"The Judgement of GOD",
        imageUrl:"https://img.youtube.com/vi/OHkiv_9vWZ8/hqdefault.jpg",
        ytUrl:"https://www.youtube.com/watch?v=OHkiv_9vWZ8",
        id: "127TheJudgementofGOD.mp4"
      },
      {
        title: "అల్లాహ్.. నీ నమాజ్ చేస్తున్నా",
        eng:"Allah Nee Namaz Chestunnaa",
        imageUrl:"https://img.youtube.com/vi/22er51NTvzI/hqdefault.jpg",
        ytUrl:"https://www.youtube.com/watch?v=22er51NTvzI",
        id: "5AllahNeeNamajchesthunnaa.mp4"
      },
      {
        title: "అల్లాహ్ తో వ్యాపారం ..",
        eng:"Allah tho vyaapaaram",
        imageUrl:"https://img.youtube.com/vi/x5FFF4ZCdWE/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=x5FFF4ZCdWE",
        id: "27Allahthovyaapaaram.mp4"
      },
      {
        title: "అల్లాయే సృష్టికర్త, క్రీస్తు, కృష్ణ ..",
        eng:"Allah ye srushtikartha",
        imageUrl:"https://img.youtube.com/vi/v4IQAD7ud0Q/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=v4IQAD7ud0Q",
        id: "31AllahYeSrushtikartha.mp4"
      },
      {
        title: "ఘనమైన రాత్రి",
        eng:"Ghanamaina raatri",
        imageUrl:"https://img.youtube.com/vi/zEQGlvWpBDQ/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=zEQGlvWpBDQ",
        id: "100GhanamainaRaatri.mp4"
      },
      {
        title: "ఈశ్వర్ - అల్లాహ్",
        eng:"Eshwar Allah",
        imageUrl:"https://img.youtube.com/vi/P7dq3CS81PA/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=P7dq3CS81PA",
        id: "95Eswar-Allah.mp4"
      },
      {
        title: "దేవుని చిహ్నము",
        eng:"Devuni Chihnamu",
        imageUrl:"https://img.youtube.com/vi/0QX98f9K6zw/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=0QX98f9K6zw",
        id: "94AdivoAlladivoDevuniChihnamu.mp4"
      },
      {
        title: "అంతులేనివాడే అల్లాహ్",
        eng:"Anthulenivaade Allah",
        imageUrl:"https://img.youtube.com/vi/H1EZDRVK-Fk/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=H1EZDRVK-Fk",
        id: "80AntulenivadeAllah.mp4"
      },
      {
        title: "స్వర్గము ఇంద్రలోకమా! - నరకము యమరాజ్యమా!",
        eng:"Swargamu indhralokama",
        imageUrl:"https://img.youtube.com/vi/lNNKJKBJJAU/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=lNNKJKBJJAU",
        id: "74SwargamIndralokamaNarakamYamarajyama.mp4"
      },
      {
        title: "దేవుని చిహ్నం ధరించండి",
        eng:"Devuni chihnam dharinchandi",
        imageUrl:"https://img.youtube.com/vi/Tw3RdJFrT8M/hqdefault.jpg",
   ytUrl:"https://www.youtube.com/watch?v=Tw3RdJFrT8M",
        id: "61DevuniChihnamDharinchandi.mp4"
      },

    ];
}
