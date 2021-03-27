import { Component, OnInit } from '@angular/core';
import {faAngular, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  githubIcon: any
  linkedinIcon: any
  angularIcon: any

  constructor() { 
    this.githubIcon = faGithub
    this.linkedinIcon = faLinkedin
    this.angularIcon = faAngular
  }


  ngOnInit(): void {
  }

}
