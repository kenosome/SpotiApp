import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  private urlBusqueda:string = "https://api.spotify.com/v1/search";
  private urlArtista:string = "https://api.spotify.com/v1/artists/";
  
  constructor(private _http:Http) { }

  getArtists( termino:string ){

    if (termino.trim() !== "") {

      let query = `?q=${termino}&type=artist`;
      let url = this.urlBusqueda+query;
      
      this._http.get(url)
        .map(response => response.json())
        .subscribe(data => {
            this.artistas = data.artists.items;
          });
    }
    else{
      this.artistas = [];
    }
  }

  getArtist(id:string){

      let query = `${id}`;
      let url = this.urlArtista+query;
      
      return this._http.get(url)
        .map(response => {
          // console.log( response.json());
          return response.json();
        });           
  }

  getArtistTopTracks(id:string){

      let query = `${id}/top-tracks?country=ES`;
      let url = this.urlArtista+query;
      
      return this._http.get(url)
        .map(response => {
          // console.log( response.json());
          return response.json().tracks;
        });           
  }

}
