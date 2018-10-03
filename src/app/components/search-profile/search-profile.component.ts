import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  profileType:string;
  profileTypes: string[] = ['Male', 'Female'];
  displayedColumns: string[] = ['name', 'dob', 'mob', 'address'];
  profiles:Profile[] = [{ name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
]
  constructor() { }

  ngOnInit() {
  }

}
