import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSort,
    MatPaginatorModule,
    MatInputModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges, OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @Input() selection = new SelectionModel<Element>(true, []);
  dataSource!: MatTableDataSource<any>;
  @Input() options: any = {}
  checkbox: boolean = false;
  pagination: boolean = false;
  search: boolean = false;
  displayedColumns: any = [];
  data: any = [];
  columns: any = [];

 ngOnChanges(changes: SimpleChanges) {
  if (changes['options']) {
    this.handleOptions(this.options);
  }
}

handleOptions(options: any) {
  const { search, checkbox, pagination, columns, displayedColumns, data } = options
  this.search = search;
  this.checkbox = checkbox;
  this.pagination = pagination;
  this.columns = columns;
  this.displayedColumns = displayedColumns;
  this.data = data

}

  ngOnInit(): void {
  const { data } = this.options 
  this.dataSource = new MatTableDataSource(this.data);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  handleClick(value: any) {
    console.log('Clicked value:', value);
    // Implement your logic here
  }

  performAction(item: any) {
    console.log('Action performed on:', item);
    // Implement your action logic here
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {
    let filterValue = event.target.value
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
 