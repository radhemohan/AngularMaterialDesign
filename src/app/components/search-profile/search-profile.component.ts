import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  @ViewChild(MatPaginator) 
  paginator: MatPaginator;
  profileType:string;
  profileTypes: string[] = ['Male', 'Female'];
  displayedColumns: string[] = ['name', 'dob', 'mob', 'address'];
  profiles:Profile[] = [{ name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vijay',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Suresh',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Meena',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Deepa',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Ramesh',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Dinesh',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Priya',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Yogesh',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Ram',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Vivek',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
  { name:'Gaytri',  dob:'20-06-1992', mob:'8987453423',  address:'', biodata:''},
];
dataSource = new MatTableDataSource<Profile>(this.profiles);
  constructor() { }

  ngOnInit() {
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
