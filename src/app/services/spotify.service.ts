import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  private urlBusqueda:string = "https://api.spotify.com/v1/search";
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

}
