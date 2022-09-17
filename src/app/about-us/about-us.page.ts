import { ModalController } from '@ionic/angular';
import { SettingsModalComponent } from 'src/app/settings-modal/settings-modal.component';
import { Platform } from '@ionic/angular'; 
import { File } from '@ionic-native/File/ngx';
import { Component } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage  { 
  
   constructor(private platform: Platform, private file: File, private ft: FileTransfer, 
    public  globaldata:GlobalService,
    public modalController:ModalController,
     private fileOpener: FileOpener, private document: DocumentViewer,) {
        
   }
   async presentModal() {
    const modal:HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalComponent
    });
    
    await modal.present();
  } 
   openPDF() {
     let filePath = this.file.applicationDirectory + 'www/assets';
  
     if (this.platform.is('android')) {
       let fakeName = Date.now();
       this.file.copyFile(filePath, 'Hindu-Mathamulo-Siddhanthakarthalu.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
         this.fileOpener.open(result.nativeURL, 'application/pdf')
           .then(() => console.log('File is opened'))
           .catch(e => console.log('Error opening file', e));
       })
     } else {
       // Use Document viewer for iOS for a better UI
       const options: DocumentViewerOptions = {
         title: 'My PDF'
       }
       this.document.viewDocument(`${filePath}/Hindu-Mathamulo-Siddhanthakarthalu.pdf`, 'application/pdf', options);
     }
   }
}
