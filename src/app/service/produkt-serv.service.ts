import {Injectable} from '@angular/core';
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

  public searchProdukt(keyword: string, page: number, size: number) {
    // http://localhost:8080/produits/search/byDesignationPage?mc=pc&page=0&size=1
    return this.httpclient.get(this.serverlink + '/produits/search/byDesignationPage?mc=' + keyword + '&page=' + page + '&size=' + size);
  }

  public deleteProdukt(url){
    return this.httpclient.delete(url);
  }
}
