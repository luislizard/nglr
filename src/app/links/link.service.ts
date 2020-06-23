import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { Link } from "./link";
import { map } from "rxjs/operators";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private dbPath = '/links';


  linksRef: AngularFireList<Link> = null;
  linkRef: AngularFireObject<any>;
  links: AngularFireList<Link[]>;
  cookieValue: string;
  radomVar: string;

  itemValue = '';
  hashValue = '';
  shortValue = '';
  constructor(private db: AngularFireDatabase, private cookieService:CookieService) {


    this.cookieValue = this.cookieService.get('cookie-hash-link');
    if(this.cookieValue == ''){
      this.radomVar = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.cookieService.set('cookie-hash-link', this.radomVar);
      this.cookieValue = this.cookieService.get('cookie-hash-link');
    }
    this.hashValue = this.cookieValue;

    this.linksRef = db.list(this.dbPath+'/'+this.hashValue);

   }

   createLink(link: Link, genKey:string): void {
     this.linkRef = this.db.object(this.dbPath+'/'+this.hashValue+'/'+genKey);
     this.linkRef.update(link);
   }

   updateLink(key: string, value: any): Promise<void> {
     return this.linksRef.update(key, value);
   }

   deleteLink(key: string){
     return this.linksRef.remove(key);
   }

   getLinksList(): AngularFireList<Link>{
     return this.linksRef;
   }

   deleteAll(): Promise<void> {
     return this.linksRef.remove();
   }


  getSingleLink(id: string): AngularFireObject<Link>{
      return this.db.object('links/' +this.hashValue+'/'+ id)
  }



}
