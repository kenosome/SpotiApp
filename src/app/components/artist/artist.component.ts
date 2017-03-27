import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista:any;
  idParameter:string;
  tracks:any[];

  constructor(private _activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { 

  }

  ngOnInit() {
    this.getIdParameter();
    this.getArtistData(this._activatedRoute.snapshot.params['id']);
    this.getArtistTopTracks(this._activatedRoute.snapshot.params['id']);
  }

  getIdParameter(){
        this._activatedRoute.params
              .map(parametros => parametros['id'])
              .subscribe(id => {
                // console.log(id);
                this.idParameter = id;
              });
  }

  getArtistData(id:string){
    this._spotifyService.getArtist(id)
                  .subscribe(data => {
                    // console.log(data);
                    this.artista = data;
                  });
  }

  getArtistTopTracks(id:string){
    this._spotifyService.getArtistTopTracks(id)
    .subscribe(data => {
      // console.log(data);
      this.tracks = data
    });
  }

}
