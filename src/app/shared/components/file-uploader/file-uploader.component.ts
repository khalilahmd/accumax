import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FileNode {
  name: string;
  children?: FileNode[];
  path?: string;
}

const TREE_DATA: FileNode[] = [
  {
    name: 'root',
    path: 'root',
    children: [
      { name: 'folder1', path: 'root/folder1', children: [{ name: 'file1', path: 'root/folder1/file1' }, { name: 'file2', path: 'root/folder1/file2' }] },
      { name: 'folder2', path: 'root/folder2', children: [{ name: 'folder3', path: 'root/folder2/folder3', children: [{ name: 'file3', path: 'root/folder2/folder3/file3' }] }] },
    ]
  }
];


@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatCardModule,
  ],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent { 
  treeControl = new NestedTreeControl<FileNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FileNode>();
  selectedNode: FileNode | null = null;

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FileNode) => !!node.children && node.children.length > 0;

  onNodeClick(node: FileNode) {
    this.selectedNode = node;
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    if (file && this.selectedNode) {
      if (!this.selectedNode.children) {
        this.selectedNode.children = [];
      }
      this.selectedNode.children.push({ name: file.name, path: `${this.selectedNode.path}/${file.name}` });
    }
  }
}
