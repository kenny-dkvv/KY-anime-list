import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-window',
  templateUrl: './anime-window.component.html',
  styleUrls: ['./anime-window.component.css']
})
export class AnimeWindowComponent implements OnInit {


  @Input()
  anime:any

  constructor() { }
  
  
  ngOnInit(): void {
    
  }

}
