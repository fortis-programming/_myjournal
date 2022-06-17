import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../services/drawer.service';
import { PostModel } from '../_shared/models/post';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  post: PostModel = {
    id: 0,
    date: 0,
    post: '',
  };

  postList: PostModel[] = [];

  constructor(private drawerService: DrawerService) {}

  isEmpty = false;
  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.drawerService.getWorks().then((response) => {
      this.postList = response;
    });
    setTimeout(() => {
      this.postList.length > 0 ? (this.isEmpty = false) : (this.isEmpty = true);
    }, 200);
  }

  submit(): void {
    if (this.post.post.trim().length === 0) return;

    this.post.date = new Date().getTime();
    this.post.id = Math.floor(Math.random() * 10000);
    this.drawerService.addPost(this.post);
    this.post.post = '';
    this.ngOnInit();
  }
}
