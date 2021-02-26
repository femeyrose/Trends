import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Event,Router,NavigationStart,NavigationEnd} from '@angular/router'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  data:Array<any>
  totalRecords:String
  page:Number=1
  showLoadingIndicator=true;
  isLoading=false;

  //multiselect dropdown
  disabled=false;
  ShowFilter=false;
  limitSelection=false;
  // cities:any=[];
  // selectedItems:any=[];
  // dropdownSettings:any={};

  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};


  constructor(private dataService:DataService,
    private router:Router,
    ) {
    this.data=new Array<any>()
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicator=true;
      }
      if(routerEvent instanceof NavigationEnd){
        this.showLoadingIndicator=false;
      }
    });
   }

  ngOnInit(): void {
    this.dropdownList = [
      {id:'1',itemName:'India'},
      {id:'2',itemName:'Singapore'},
      {id:'3',itemName:'Australia'},
      {id:'4',itemName:'Canada'},
      {id:'5',itemName:'South Korea'},
      {id:'6',itemName:'Germany'},
      {id:'7',itemName:'France'},
      {id:'8',itemName:'Russia'},
      {id:'9',itemName:'Italy'},
      {id:'10',itemName:'Sweden'}
    ];
this.selectedItems = [
        {id:'2',itemName:"Singapore"},
        {id:'3',itemName:"Australia"},
        {id:'4',itemName:"Canada"},
        {id:'5',itemName:"South Korea"}
    ];
    this.dropdownSettings= { 
          
          singleSelection: false, 
          idField: 'id',
          textField:'itemName', //it should be textField
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };            
  }

  getUsers=()=>{

    this.dataService.getData().subscribe((data)=>
    {
      console.log(data)
      this.data=data.results;
      this.totalRecords=data.results.length;
    })

    this.isLoading=true;
    setTimeout(()=>{
      this.isLoading=false;
    },3000)

  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}

}
