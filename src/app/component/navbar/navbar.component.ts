import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchIcon: any
  queryId: any
  isCategoryHovered: any

  constructor(private router: Router) {
    this.queryId = ""
    this.searchIcon = faSearch
  }

  redirect(pagename: string, queryParam: any) {
    this.router.navigate(['/' + pagename], { queryParams: queryParam });
  }

  searchbarClick(input) {
    console.log(input)
    if (input.length >= 3) {
      this.redirect("search", { q: input })
    }
    else this.redirect("search", {order_by:"title", sort:"asc"})
  }


  setCategoryHovered(bool){
    console.log(bool)
    this.isCategoryHovered = bool
  }


  ngOnInit(): void {

  }

}
