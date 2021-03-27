import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todayReleaseAnimes: any
  nowAiringAnimes: any
  topAnimes: any
  completedAnimes: any
  upcomingAnimes: any
  announcedAnimes: any
  fateAnime: any
  infoIcon: any
  daysName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  fatesId = [356, 22297, 25537, 11741]

  constructor(private animeService: AnimeService, private router: Router) {
    this.infoIcon = faInfoCircle
  }

  redirect(pagename: string, queryParam: any) {
    this.router.navigate(['/' + pagename], { queryParams: queryParam });
  }

  ngOnInit(): void {
    this.animeService.getTodayAnime().subscribe(
      data => {
        this.todayReleaseAnimes = data[this.daysName[new Date().getDay()]]
      }
    )

    this.animeService.getAnimeInfo(this.fatesId[Math.floor(Math.random() * this.fatesId.length)]).subscribe(
      data => {
        // console.log(data)
        this.fateAnime = data
      }
    )

    this.animeService.getAnimeList({q:"", sort:"desc", status:"airing", order_by:"score", genre:12, genre_exclude:"0"}).subscribe(
      data =>{
        this.nowAiringAnimes = data
      }
    )

    
    this.animeService.getAnimeList({q:"", sort:"desc", status:"completed", order_by:"score", genre:12, genre_exclude:"0"}).subscribe(
      data => {
        this.completedAnimes = data
      }
    )

    this.animeService.getAnimeList({q:"", sort:"desc", order_by:"score", genre:12, genre_exclude:"0"}).subscribe(
      data => {
        this.topAnimes = data
      }
    )

    this.animeService.getAnimeList({q:"", sort:"desc", status:"tba", order_by:"score", genre:12, genre_exclude:"0"}).subscribe(
      data => {
        this.upcomingAnimes = data
      }
    )

    this.animeService.getNextSeasonAnime().subscribe(data =>{
      this.announcedAnimes = data.anime
    })
  }

}
