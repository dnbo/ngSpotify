import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

export const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'auth', component: AuthenticateComponent }
]
