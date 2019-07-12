import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduktServService {
public serverlink:string="http://localhost:8080";
  constructor(private httpclient:HttpClient) { }


public getProdukt(page:number,size:number){
    return this.httpclient.get(this.serverlink+"/produits?page="+page+"&size="+size);
}

}
