import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import { snapshotChanges } from '@angular/fire/database';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {

  links: any;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.getLinksList();
  }

  getLinksList() {
    this.linkService.getLinksList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(links => {
      this.links = links;
    });
  }

  deleteLinks() {
    this.linkService.deleteAll().catch(err => console.log(err));
  }

}
