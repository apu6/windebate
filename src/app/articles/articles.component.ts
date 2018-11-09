import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openLindseyArticle() {
    this.router.navigateByUrl('lindsey-article');
  }

  openLindseyArticle2() {
    this.router.navigateByUrl('lindsey-article-2');
  }

  openKatie() {
    this.router.navigateByUrl('katie');
  }
}
