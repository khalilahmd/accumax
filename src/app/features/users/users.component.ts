import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from '../../shared/components/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';


interface TableColumn {
  columnDef: string;
  header: string;
  type: 'checkbox' | 'action' | 'string';
  sortable?: boolean;
}

interface User {
  [key: string]: any;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
  TableComponent,
  MatFormFieldModule,
  MatInputModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  @Input() columns: TableColumn[] = [
    { columnDef: 'select', header: 'Select', type: 'checkbox' },
    { columnDef: 'lastName', header: 'Last Name', type: 'string', sortable: true },
    { columnDef: 'firstName', header: 'First Name', type: 'string', sortable: true },
    { columnDef: 'email', header: 'Email', type: 'string', sortable: true },
    { columnDef: 'grantAccess', header: 'Grant Access', type: 'checkbox' },
    { columnDef: 'expiration', header: 'User Expiration', type: 'string', sortable: true },
    { columnDef: 'actions', header: 'Actions', type: 'action' },
  ];
  @Input() dataSource: User[] = [
    { selected: false, lastName: 'Doe', firstName: 'John', email: 'john.doe@example.com', grantAccess: true, expiration: new Date('2024-12-31') },
    { selected: false, lastName: 'Smith', firstName: 'Jane', email: 'jane.smith@example.com', grantAccess: false, expiration: new Date('2024-11-30') },
    { selected: false, lastName: 'Brown', firstName: 'Charlie', email: 'charlie.brown@example.com', grantAccess: true, expiration: null },
  ];

  displayedColumns: string[] = [];
  // dataSourceMatTable: MatTableDataSource<User>;
  // @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.displayedColumns = this.columns.map((column) => column.columnDef);
    this.dataSource.forEach((user) => {
      user['selected'] = false; // Initialize selected property
      this.columns.forEach((column) => {
        if (column.type === 'checkbox') {
          user[column.columnDef + 'Ctrl'] = new FormControl(user[column.columnDef]);
        }
      });
    });
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  performAction(user: User) {
    // Implement action logic here based on the user data
    console.log('Performing action for user:', user);
  }

  toggleAll(event: any) {
    const checked = event.checked;
    this.dataSource.forEach((user) => (user['selected'] = checked));
  }

  addNew() {
    // Implement logic to add a new item
    console.log('Add new item');
  }

  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const filterValue = input.value.trim().toLowerCase();
    console.log(filterValue)
    // this.dataSourceMatTable.filter = filterValue;
  
    // if (this.dataSourceMatTable.paginator) {
    //   this.dataSourceMatTable.paginator.firstPage();
    // }
  }

  performSearch() {
    // Implement search logic here
    console.log('Search button clicked');
  }
}
