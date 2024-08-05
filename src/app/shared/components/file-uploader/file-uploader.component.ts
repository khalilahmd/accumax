import { Component, Input, OnInit, input } from '@angular/core';

interface Directory {
  name: string;
  files: string[];
  subDirectories?: Directory[];
  isExpanded?: boolean; 
}

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent implements OnInit {
  @Input() source: string = 'Directories'
  directories: Directory[] = [
    {
      name: 'Documents',
      files: [],
      isExpanded: false,
      subDirectories: [
        {
          name: '2024',
          files: ['invoice4.pdf', 'e-filed4.pdf', 'doc4.png'],
          isExpanded: false,
        },
        {
          name: '2023',
          files: ['invoice3.pdf', 'e-filed3.pdf', 'doc3.png', 'Texas3.pdf'],
          isExpanded: false
        },
        {
          name: '2022',
          files: ['invoice2.pdf', 'Texas2.pdf'],
          isExpanded: false
        },
        {
          name: '2021',
          files: ['invoice1.pdf'],
          isExpanded: false
        }
      ]
    }
  ];

  currentDirectory: Directory | any = null;
  breadcrumbs: string[] = [];


  ngOnInit(): void {
    this.currentDirectory = this.directories[0]
  }
  // Set the current directory and update breadcrumbs
  openDirectory(event: MouseEvent, directory: Directory) {
    event.stopPropagation()
    directory.isExpanded = directory.subDirectories ? !directory.isExpanded : false;
    this.currentDirectory = directory;
    // if(!directory.subDirectories) {
    // this.breadcrumbs = [...this.breadcrumbs, directory.name];
    // } else {
      this.breadcrumbs = [directory.name];
    // }
    // Update breadcrumbs based on current directory's path
  }

  // Handle breadcrumb click
  breadcrumbClick(name: string) {
    // Logic to handle breadcrumb click
  }

  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      // Handle file upload logic here
      this.currentDirectory?.files.push(file.name)
    }
  }
}
