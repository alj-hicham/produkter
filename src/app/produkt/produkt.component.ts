import {Component, OnInit} from '@angular/core';
import {ProduktServService} from '../service/produkt-serv.service';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {
public produkt;
public size:number=5;
public page:number=0;
public Totalpages:number;
public Pages:Array<number>;
  private currentkeyword: string = '';
  constructor(private Serviceprod:ProduktServService) {

  }

  ngOnInit() {
  }

  onGetproducts() {
    this.Serviceprod.getProdukt(this.page,this.size).subscribe(
      data=>{

this.Totalpages=data["page"].totalPages;
this.Pages=new Array<number>(this.Totalpages);
        this.produkt=data;



},error1 => {
        console.error(error1);
      })
}

  onPageProduct(i){
    this.page=i;
    this.onSearchProdukt({keyword: this.currentkeyword});

  }

  searchproduct() {
    this.currentkeyword = form.keyword;
    this.onSearchProdukt();
  }

  onSearchProdukt() {

    this.Serviceprod.searchProdukt(this.keyword, this.page, this.size).subscribe(
      data => {

        this.Totalpages = data['page'].totalPages;
        this.Pages = new Array<number>(this.Totalpages);
        this.produkt = data;


      }, error1 => {
        console.error(error1);
      });

  }
}

