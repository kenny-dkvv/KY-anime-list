import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faSearch, faFilter, faClipboardList} from '@fortawesome/free-solid-svg-icons'
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchIcon: any
  filterIcon: any
  resultIcon: any

  redirect(pagename: string, queryParam: any) {
    this.router.navigate(['/' + pagename], { queryParams: queryParam });
  }
  
  // paramContent = {
  //   type: undefined,
  //   status: undefined,
  //   order_by: undefined,
  //   sort:  undefined,
  //   genre: undefined,
  //   q:  undefined,
  //   page: 1
  // }

  paramContent: any
  usedParams: any
  // paramContent = {}

  searchResult: any
  
  pages: any

  typeValue: any
  statusValue: any
  orderValue: any
  sortValue: any
  genreValue: any
  pageValue : any

  constructor(private activatedRoute: ActivatedRoute, private animeService: AnimeService, private router: Router) {
    this.filterIcon = faFilter 
    this.searchIcon = faSearch
    this.resultIcon = faClipboardList

    this.activatedRoute.queryParams.subscribe(params => {
      this.usedParams = params;
      this.usedParams.page ? this.pageValue = this.usedParams.page :this.pageValue = 1
      this.usedParams.order_by ? null : this.usedParams = {...this.usedParams, order_by: "score"}
      this.paramContent = this.usedParams

      this.animeService.getAnimeList(this.usedParams).subscribe(data =>{
        this.searchResult = data
        this.pages = Array(data.last_page).fill(0).map((x, i)=>{ return i+1}) 
      })
  });
  }

  //filter handler
  handleGenre(event){
    this.paramContent = {...this.paramContent, genre:  event}
    // console.log(this.paramContent)
  }

  handleSort(event){
    this.paramContent = {...this.paramContent, sort:  event}
    // console.log(this.paramContent)
  }

  handleOrder(event){
    this.paramContent = {...this.paramContent, order_by:  event}
    // console.log(this.paramContent)
  }

  handleStatus(event){
    this.paramContent = {...this.paramContent, status:  event}
    // console.log(this.paramContent)
  }

  handleType(event){
    this.paramContent = {...this.paramContent, type:  event}
    // console.log(this.paramContent)
  }

  handleTitle(event){
    this.paramContent = {...this.paramContent, q:  event}
    // console.log(this.paramContent)
  }

  handlePage(event){
    this.paramContent = {...this.paramContent, page: event}
    this.redirect('search', this.paramContent)
  }

  searchWithFilter(){
    if(this.paramContent == this.usedParams) return
    this.usedParams = {...this.paramContent, page: 1}
    this.redirect('/search', this.usedParams)
  }

  ngOnInit(): void {
    this.animeService.getAnimeList(this.usedParams).subscribe(data =>{
      this.searchResult = data
      this.pages = Array(data.last_page).fill(0).map((x, i)=>{ return i+1}) 
    })
  }

  

}
