import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import { snapshotChanges, AngularFireDatabase } from '@angular/fire/database';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-redirect-link',
  templateUrl: './redirect-link.component.html',
  styleUrls: ['./redirect-link.component.css']
})
export class RedirectLinkComponent implements OnInit {
  id;
  links: any;

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute, private linkService: LinkService, private router: Router) {

    var id = this.route.snapshot.params['id'];
    this.linkService.getSingleLink(id).valueChanges().subscribe(links => {
      this.links = links;
      window.location.href = 'http://'+links.link;
    })

   }

  ngOnInit(): void {
    //this.getLinksList();
  }


  deleteLinks() {
    this.linkService.deleteAll().catch(err => console.log(err));
  }

}
