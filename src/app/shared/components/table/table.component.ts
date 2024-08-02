import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


interface TableColumn {
  columnDef: string;
  header: string;
  type: 'checkbox' | 'action' | 'string';
  sortable?: boolean;
}

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
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() dataSource: any = [];
  sortDirection: { [key: string]: 'asc' | 'desc' } = {};
  columnFields: string[] = [];
  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.columns.map((column) => column.columnDef);
    this.dataSource.forEach((item: any) => {
      item['selected'] = false;
      this.columns.forEach((column) => {
        if (column.type === 'checkbox') {
          item[column.columnDef + 'Ctrl'] = new FormControl(item[column.columnDef]);
        }   
        if (column.sortable) {
          this.sortDirection[column.header] = 'asc';
        }
      });
    });
  }

  sortData(column: string) {
    if (this.sortDirection[column] === 'asc') {
      this.dataSource.data = this.dataSource.data.sort((a: any, b: any) => (a[column] > b[column] ? 1 : -1));
      this.sortDirection[column] = 'desc';
    } else {
      this.dataSource.data = this.dataSource.data.sort((a: any, b: any) => (a[column] < b[column] ? 1 : -1));
      this.sortDirection[column] = 'asc';
    }
  }

  performAction(user: any) {
    // Implement action logic here based on the user data
    console.log('Performing action for user:', user);
  }

  toggleAll(event: any) {
    const checked = event.checked;
    this.dataSource.forEach((item: any) => (item['selected'] = checked));
  }

  loadMore() {
    const newData = [
      { id: 4, name: 'Product 4', price: 40, icon: 'shopping_cart' },
      { id: 5, name: 'Product 5', price: 45, icon: 'shopping_cart' }
    ];
    this.dataSource = [...this.dataSource, ...newData];
  }
}
 