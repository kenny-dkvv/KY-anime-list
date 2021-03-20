import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) {
  }

  getAnimeList(query: string = "",
   order_by: string = "members", 
   sort: string = "asc", 
   page: number = 1): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/search/anime?q=${query}&order_by=${order_by}&sort=${sort}&page=${page}`)
   }
}
