import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  data:Array<any>
  totalRecords:String
  page:Number=1

  constructor(private dataService:DataService) {
    this.data=new Array<any>()
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.dataService.getData().subscribe((data)=>
    {
      console.log(data)
      this.data=data.results;
      this.totalRecords=data.results.length;
    })

  }

}
