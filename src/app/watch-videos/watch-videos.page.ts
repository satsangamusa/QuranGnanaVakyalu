import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { GlobalService } from 'src/app/global.service';
@Component({ 
  selector: 'app-watch-videos',
  templateUrl: './watch-videos.page.html',
  styleUrls: ['./watch-videos.page.scss'],
})
export class WatchVideosPage implements OnInit {

  constructor(public globaldata:GlobalService,
    public youtube:YoutubeVideoPlayer ) { }

  ngOnInit() {
  }
  openWisdomVideo(id){
    this.youtube.openVideo(id);
  }
   
  
     
  videos: any = [
    {
      title: "దివ్యఖురాన్ - హదీస్",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/BtkFpS113tA/hqdefault.jpg",

      id: "BtkFpS113tA"
    },
    {
      title: "అల్లాహ్.. నీ నమాజ్ చేస్తున్నా",
      imageUrl:"http://img.youtube.com/vi/22er51NTvzI/hqdefault.jpg",

      id: "22er51NTvzI"
    },
    {
      title: "అల్లాహ్ తో వ్యాపారం ..",
      imageUrl:"http://img.youtube.com/vi/x5FFF4ZCdWE/hqdefault.jpg",

      id: "x5FFF4ZCdWE"
    },
    {
      title: "అల్లాయే సృష్టికర్త, క్రీస్తు, కృష్ణ ..",
      imageUrl:"http://img.youtube.com/vi/v4IQAD7ud0Q/hqdefault.jpg",

      id: "v4IQAD7ud0Q"
    },
    
    {
      title: "పథము - మతము",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/oJzEAGDLGJI/hqdefault.jpg",

      id: "oJzEAGDLGJI"
    },
    {
      title: "దైవ ధర్మములు - మత సాంప్రదాయములు",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/lcwyET_gDFM/hqdefault.jpg",

      id: "lcwyET_gDFM"
    },
    {
      title: "ఆహారము నీకా! నీ ఆత్మకా!!",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/ReqQ4Ti3TLs/hqdefault.jpg",

      id: "ReqQ4Ti3TLs"
    },
    {
      title: "మాత్ర-మందు",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/Pa7tgE2PnQI/hqdefault.jpg",

      id: "Pa7tgE2PnQI"
    },
    
    {
      title: "గ్రాహిత శక్తి",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/VeqoOM7pNEg/hqdefault.jpg",

      id: "VeqoOM7pNEg"
    },
    {
      title: "దైవ గ్రంథము",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/7kXscoStXzI/hqdefault.jpg",

      id: "7kXscoStXzI"
    },
    {
      title: "దేవుని ఆజ్ఞ మరణము",
      //imageUrl:"assets/images/viswadabhirama_song.png",
      imageUrl:"http://img.youtube.com/vi/w7R-DppisKw/hqdefault.jpg",

      id: "w7R-DppisKw"
    } 
    
  ];
  
}
