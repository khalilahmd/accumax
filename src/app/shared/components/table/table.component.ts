import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

interface ColumnDefinition {
  field: string;
  header: string;
  sortable?: boolean;
  actions?: { icon: string; callback: (element: any) => void }[];
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() displayedColumns: ColumnDefinition[] = [];
  @Input() dataSource: any = new MatTableDataSource<any>();
  sortDirection: { [key: string]: 'asc' | 'desc' } = {};
  columnFields: string[] = [];

  ngOnInit() {
    this.columnFields = this.displayedColumns.map(col => col.field);
    this.displayedColumns.forEach(col => {
      if (col.sortable) {
        this.sortDirection[col.field] = 'asc';
      }
    });
  }

  sortData(column: string) {
    console.log('here')
    if (this.sortDirection[column] === 'asc') {
      this.dataSource.data = this.dataSource.data.sort((a: any, b: any) => (a[column] > b[column] ? 1 : -1));
      this.sortDirection[column] = 'desc';
    } else {
      this.dataSource.data = this.dataSource.data.sort((a: any, b: any) => (a[column] < b[column] ? 1 : -1));
      this.sortDirection[column] = 'asc';
    }
  }

  loadMore() {
    const newData = [
      { id: 4, name: 'Product 4', price: 40, icon: 'shopping_cart' },
      { id: 5, name: 'Product 5', price: 45, icon: 'shopping_cart' }
    ];
    this.dataSource = [...this.dataSource, ...newData];
  }
}
