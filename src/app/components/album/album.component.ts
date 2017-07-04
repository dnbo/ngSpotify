import { Component, OnInit } from '@angular/core';
import { Album } from '../../album';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

declare const Amplitude: any;

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})

export class AlbumComponent implements OnInit {
  id: string;
  album: Album;
  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) { }

  private initializePlayer(tracks: any) {

    const songs = [];
    tracks.forEach(track => {
      songs.push({
        'name': track.name,
        'artist': track.artists[0].name,
        'album': '',
        'url': track.preview_url,
        'cover_art_url': ''
      });
    });


    Amplitude.init({
      'songs': songs
    });
  }

  private loadAlbum() {
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            console.log(album);
            this.album = album;
            this.initializePlayer(album.tracks.items)
          });
      });
  }
  ngOnInit() {
    this.loadAlbum();
  }


}
