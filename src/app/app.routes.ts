import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';
import { ServicesComponent } from './pages/services';
import { PortfolioComponent } from './pages/portfolio';
import { CatalogueComponent } from './pages/catalogue';
import { ReviewsComponent } from './pages/reviews';
import { ContactComponent } from './pages/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Perfect Tile Works - Home' },
  { path: 'about', component: AboutComponent, title: 'Perfect Tile Works - About Us' },
  { path: 'services', component: ServicesComponent, title: 'Perfect Tile Works - Our Services' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Perfect Tile Works - Project Gallery' },
  { path: 'catalogue', component: CatalogueComponent, title: 'Perfect Tile Works - Materials Catalogue' },
  { path: 'reviews', component: ReviewsComponent, title: 'Perfect Tile Works - Client Reviews' },
  { path: 'contact', component: ContactComponent, title: 'Perfect Tile Works - Contact Us' },
  { path: '**', redirectTo: '' }
];
