import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animes : any
  constructor(private animeService : AnimeService) { 
    
  }



  ngOnInit(): void {
        this.animeService.getAnimeList().subscribe(
          data =>{
            this.animes = data
          }
        )
  }

}
