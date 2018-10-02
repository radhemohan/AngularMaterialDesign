import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { RrTableDataSource } from './rr-table-datasource';

@Component({
  selector: 'app-rr-table',
  templateUrl: './rr-table.component.html',
  styleUrls: ['./rr-table.component.css']
})
export class RrTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: RrTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new RrTableDataSource(this.paginator, this.sort);
  }
}
