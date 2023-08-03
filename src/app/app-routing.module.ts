import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
   
  {
    path: 'watch-videos',
    loadChildren: () => import('./watch-videos/watch-videos.module').then( m => m.WatchVideosPageModule)
  },
   
  {
    path: 'content-details',
    loadChildren: () => import('./content-details/content-details.module').then( m => m.ContentDetailsPageModule)
  },   
  {
    path: 'letters',
    loadChildren: () => import('./letters/letters.module').then( m => m.LettersPageModule)
  },
  {
    path: 'kiss',
    loadChildren: () => import('./kiss/kiss.module').then( m => m.KISSPageModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./songs/songs.module').then( m => m.SongsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
