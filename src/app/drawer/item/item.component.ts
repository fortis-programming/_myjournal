import { Component, Input, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';
import { PostModel } from 'src/app/_shared/models/post';
import { DrawerComponent } from '../drawer.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  edit = false;

  @Input() item: PostModel = {
    id: 0,
    date: 0,
    post: ''
  }
  
  constructor(
    private drawerService: DrawerService,
    private drawer: DrawerComponent
  ) { }

  ngOnInit(): void {
  }

  deletePost(): void {
    this.drawerService.deletePost(this.item.id);
    this.drawer.getList();
  }

  updatePost(): void {
    this.edit = false;
    this.drawerService.addPost(this.item);
    this.drawer.getList();
  }
}
