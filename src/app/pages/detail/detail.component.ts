import { Component, OnChanges, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';
import { ActivatedRoute } from '@angular/router';
import {faSignature, faInfoCircle, faChartPie,faImages, faMusic} from '@fortawesome/free-solid-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  anime : any
  animeId: any
  animeImages: any
  infoIcon: any
  signatureIcon: any
  chartIcon: any
  imagesIcon: any
  soundIcon: any
  youtubeIcon: any
  openingThemes: any
  endingThemes: any

  mappingGenre = {
    Action:"1",
    Adventure:"2",
    Cars:"3",
    Comedy:"4",
    Dementia:"5",
    Demons:"6",
    Mystery:"7",
    Drama:"8",
    Ecchi:"9",
    Fantasy:"10",
    Game:"11",
    Hentai:"12",
    Historical:"13",
    Horror:"14",
    Kids:"15",
    Magic:"16",
    MartialArts:"17",
    Mecha:"18",
    Music:"19",
    Parody:"20",
    Samurai:"21",
    Romance:"22",
    School:"23",
    SciFi:"24",
    Shoujo:"25",
    ShoujoAi:"26",
    Shounen:"27",
    ShounenAi:"28",
    Space:"29",
    Sports:"30",
    SuperPower:"31",
    Vampire:"32",
    Yaoi:"33",
    Yuri:"34",
    Harem:"35",
    SliceOfLife:"36",
    Supernatural:"37",
    Military:"38",
    Police:"39",
    Psychological:"40",
    Thriller:"41",
    Seinen:"42",
    Josei:"43",
  }

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) { 
    this.signatureIcon = faSignature
    this.infoIcon = faInfoCircle
    this.chartIcon = faChartPie
    this.imagesIcon = faImages
    this.soundIcon = faMusic
    this.youtubeIcon = faYoutube
  }

  redirect(pagename: string, queryParam: any) {
    this.router.navigate(['/' + pagename], { queryParams: queryParam });
  }

  ngOnInit(): void {
    this.animeId = this.route.snapshot.paramMap.get("id")

    this.animeService.getAnimePictures(this.animeId).subscribe(
      data => {
        this.animeImages = data.pictures.map((picture: any) =>{
          return picture.small
        })
      }
    )


    this.animeService.getAnimeInfo(this.animeId).subscribe(
      data => {
        this.anime = data
        this.openingThemes = data.opening_themes.map((opening:any)=>{
          var tempLink = opening.split("by")[0];
          tempLink = tempLink[0] === '#' ? tempLink.substring(3) : tempLink
          console.log("before: "+tempLink)
          tempLink = tempLink.replace(/['"]+/g, '')
          console.log("after:" + tempLink)
          return {
            title: opening,
            link: tempLink
          }
        });
        this.endingThemes = data.ending_themes.map((ending:any)=>{
          var tempLink = ending.split("by")[0];
          tempLink = tempLink[0] === '#' ? tempLink.substring(3) : tempLink
          tempLink = tempLink.replace(/['"]+/g, '')
          return {
            title: ending,
            link: tempLink
          }
        });


        console.log(this.anime)
      }
    )
  }


}
