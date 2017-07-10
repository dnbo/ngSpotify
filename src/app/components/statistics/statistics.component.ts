import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../artist';
import { Track } from '../../track';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  topTracks: Track[];
  topArtists: Artist[];
  topTracksUrl: string;
  topArtistsUrl: string;


  constructor(private spotifyService: SpotifyService) { }

  private getTopTracksForUser() {

    this.spotifyService.getTopTracks()
      .subscribe(tracks => {
        console.log(tracks);
        this.topTracks = tracks.items;
      });

  }
  ngOnInit() {
    this.getTopTracksForUser();
  }

}
