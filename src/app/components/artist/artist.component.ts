import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../artist';
import { Album } from '../../album';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist;
  albums: Album[];

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });

        this.spotifyService.getAlbums(id)
          .subscribe(albums => {
            console.log(albums);
            this.albums = albums.items;
          });
      });
  }

}
