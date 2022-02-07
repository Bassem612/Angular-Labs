import { Component, OnInit } from '@angular/core';
import { GetpostsService } from './../services/getposts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private getposts:GetpostsService) { }

  postsList:any;
  ngOnInit(): void {
      this.getposts.getPosts().subscribe(data =>{
        this.postsList = data
      })
  }

}
