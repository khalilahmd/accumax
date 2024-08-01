import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { TableComponent } from '../../shared/components/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-to-firm',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TableComponent,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule
],
  templateUrl: './to-firm.component.html',
  styleUrl: './to-firm.component.scss'
})
export class ToFirmComponent {
  products = [
    { id: 101, name: 'Laptop', price: 1000, icon: 'laptop', selected: false, grantAccess: false },
    { id: 102, name: 'Phone', price: 500, icon: 'phone', selected: false, grantAccess: false },
    { id: 103, name: 'Tablet', price: 300, icon: 'tablet', selected: false, grantAccess: false }
  ];
  
  productColumns = [
    { field: 'select', header: 'Select', sortable: false, checkbox: true },
    { field: 'grantAccess', header: 'Grant Access', sortable: false, checkbox: true },
    { field: 'icon', header: 'Icon', sortable: false },
    { field: 'id', header: 'ID', sortable: true },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'price', header: 'Price', sortable: true },
    { field: 'actions', header: 'Actions', actions: [
      { icon: 'edit', callback: (product: any) => this.editProduct(product) },
      { icon: 'delete', callback: (product: any) => this.deleteProduct(product) }
    ]}
  ];


  dataSource = new MatTableDataSource(this.products);

  ngOnInit(): void {
    // You can fetch products from an API and assign to this.dataSource.data
  }

  editProduct(product: any) {
    console.log('Edit product', product);
    // Implement edit logic here
  }

  deleteProduct(product: any) {
    console.log('Delete product', product);
    // Implement delete logic here
  }
}
