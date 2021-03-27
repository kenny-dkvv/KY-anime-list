import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {
  }

  getAnimeList(queryParam: any): Observable<any> {
    
    let params = new HttpParams()
    for (let key in queryParam) {
      let value = queryParam[key];
      params = params.append(key, value)
      // Use `key` and `value`
    }

    var link = `${environment.backendUrl}/search/anime`
    return this.http.get<any>(link, {params})
  }

  getAnimeInfo(id: number) {
    return this.http.get<any>(`${environment.backendUrl}/anime/${id}`)
  }

  getAnimePictures(id: number) {
    return this.http.get<any>(`${environment.backendUrl}/anime/${id}/pictures`)
  }

  getTodayAnime() {
    return this.http.get<any>(`https://api.jikan.moe/v3/schedule`)
  }

  getNextSeasonAnime(){
    return this.http.get<any>(`https://api.jikan.moe/v3/season/later`)
  }
}
