import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

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
      title: "అల్లాహ్.. నీ నమాజ్ చేస్తున్నా",
      imageUrl:"https://img.youtube.com/vi/22er51NTvzI/hqdefault.jpg",

      id: "22er51NTvzI"
    },
    {
      title: "అల్లాహ్ తో వ్యాపారం ..",
      imageUrl:"https://img.youtube.com/vi/x5FFF4ZCdWE/hqdefault.jpg",

      id: "x5FFF4ZCdWE"
    },
    {
      title: "అల్లాయే సృష్టికర్త, క్రీస్తు, కృష్ణ ..",
      imageUrl:"https://img.youtube.com/vi/v4IQAD7ud0Q/hqdefault.jpg",

      id: "v4IQAD7ud0Q"
    },
    {
      title: "ఘనమైన రాత్రి",
      imageUrl:"https://img.youtube.com/vi/zEQGlvWpBDQ/hqdefault.jpg",

      id: "zEQGlvWpBDQ"
    },
    {
      title: "ఈశ్వర్ - అల్లాహ్",
      imageUrl:"https://img.youtube.com/vi/P7dq3CS81PA/hqdefault.jpg",

      id: "P7dq3CS81PA"
    }, 
    {
      title: "దేవుని చిహ్నము",
      imageUrl:"https://img.youtube.com/vi/0QX98f9K6zw/hqdefault.jpg",

      id: "0QX98f9K6zw"
    },
    {
      title: "అంతులేనివాడే అల్లాహ్",
      imageUrl:"https://img.youtube.com/vi/H1EZDRVK-Fk/hqdefault.jpg",

      id: "H1EZDRVK-Fk"
    },
    {
      title: "స్వర్గము ఇంద్రలోకమా! - నరకము యమరాజ్యమా!",
      imageUrl:"https://img.youtube.com/vi/lNNKJKBJJAU/hqdefault.jpg",

      id: "lNNKJKBJJAU"
    },
    {
      title: "దేవుని చిహ్నం ధరించండి",
      imageUrl:"https://img.youtube.com/vi/Tw3RdJFrT8M/hqdefault.jpg",

      id: "Tw3RdJFrT8M"
    },
       
  ];
  
}
