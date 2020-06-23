import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css']
})
export class CreateLinkComponent implements OnInit {

  link:Link = new Link();
  submitted = false;
  genKey;

  constructor(private linkService: LinkService) { }

  ngOnInit() {
    //this.radomVar = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.genKey = Math.random().toString(36).substring(2, 7);
  }

  newLink(): void {
    this.submitted = false;
    this.link = new Link();
  }

  save() {
    this.linkService.createLink(this.link, this.genKey);
    this.link = new Link();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
