import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'introduction',
    loadComponent: () => import('./introduction/introduction.page').then( m => m.IntroductionPage)
  },

  {
    path: 'watch-videos',
    loadComponent: () => import('./watch-videos/watch-videos.page').then( m => m.WatchVideosPage)
  },

  {
    path: 'content-details',
    loadComponent: () => import('./content-details/content-details.page').then( m => m.ContentDetailsPage)
  },
  {
    path: 'letters',
    loadComponent: () => import('./letters/letters.page').then( m => m.LettersPage)
  },
  {
    path: 'kiss',
    loadComponent: () => import('./kiss/kiss.page').then( m => m.KISSPage)
  },
  {
    path: 'songs',
    loadComponent: () => import('./songs/songs.page').then( m => m.SongsPage)
  }

];
