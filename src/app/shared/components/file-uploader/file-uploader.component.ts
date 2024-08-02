import { Component, Input, input } from '@angular/core';

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
export class FileUploaderComponent {
  @Input() source: string = 'Directories'
  directories: Directory[] = [
    {
      name: 'Root',
      files: [],
      isExpanded: false,
      subDirectories: [
        {
          name: 'Documents',
          files: ['File1.txt', 'File2.pdf', 'Project1.docx', 'Project2.pptx'],
          isExpanded: false,
          // subDirectories: [
          //   {
          //     name: 'Projects',
          //     files: ['Project1.docx', 'Project2.pptx'],
          //     isExpanded: false,
          //     subDirectories: [
          //       {
          //         name: '2024',
          //         files: ['Project2024.docx', 'Report2024.pdf']
          //       }
          //     ]
          //   }
          // ]
        },
        {
          name: 'Images',
          files: ['Image1.png', 'Image2.jpg', 'Beach.png', 'Mountain.jpg'],
          isExpanded: false,
          // subDirectories: [
          //   {
          //     name: 'Vacation',
          //     files: ['Beach.png', 'Mountain.jpg']
          //   }
          // ]
        }
      ]
    }
  ];

  currentDirectory: Directory | null = null;
  breadcrumbs: string[] = [];

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
