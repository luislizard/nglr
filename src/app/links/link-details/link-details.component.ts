import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../link';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-details',
  templateUrl: './link-details.component.html',
  styleUrls: ['./link-details.component.css']
})
export class LinkDetailsComponent implements OnInit {

  @Input() link: Link;
  currentLink;

  constructor(private linkService: LinkService) {
    this.currentLink = window.location.href;

   }

  ngOnInit(): void {
  }

  updateActive(isActive: boolean){
    this.linkService
    .updateLink(this.link.key, { active: isActive})
    .catch(err => console.log(err));
  }

  deleteLink() {
    this.linkService
      .deleteLink(this.link.key)
      .catch(err => console.log(err));
  }

}
