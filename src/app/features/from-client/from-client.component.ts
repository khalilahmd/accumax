import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from '../../shared/components/file-uploader';

@Component({
  selector: 'app-from-client',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    FileUploaderComponent
  ],
  templateUrl: './from-client.component.html',
  styleUrls: ['./from-client.component.scss']
})
export class FromClientComponent implements OnInit {
  options: any = {}
  columns = [
    { columnDef: 'fileName', header: 'File Name', sortable: true, type: 'text', clickable: true },
    { columnDef: 'extension', header: 'Extension', sortable: true, type: 'text', clickable: false },
    { columnDef: 'formType', header: 'Form Type', sortable: true, type: 'text', clickable: true },
    { columnDef: 'extractedDATA', header: 'Extracted Data', sortable: true, type: 'text', clickable: false },
    { columnDef: 'uploadDate', header: 'Upload Date', sortable: true, type: 'text', clickable: false },
 ];

  dataToShow: any = [
    {
      fileName: 'document1',
      extension: '.pdf',
      formType: 'Form A',
      extractedDATA: '{ "key": "value" }',
      uploadDate: '2024-08-05',
    },
    {
      fileName: 'khalil\'s doc',
      extension: '.docx',
      formType: 'Form B',
      extractedDATA: '{ "key": "value" }',
      uploadDate: '2024-08-06',
    }, 
    {
      fileName: 'document2',
      extension: '.docx',
      formType: 'Form B',
      extractedDATA: '{ "key": "value" }',
      uploadDate: '2024-08-06',
    },
    {
      fileName: 'document2',
      extension: '.docx',
      formType: 'Form B',
      extractedDATA: '{ "key": "value" }',
      uploadDate: '2024-08-06',
    },
    {
      fileName: 'document2',
      extension: '.docx',
      formType: 'Form B',
      extractedDATA: '{ "key": "value" }',
      uploadDate: '2024-08-06',
    },
    {
      fileName: 'document2',
      extension: '.docx',
      formType: 'Form B',
      extractedDATA: '{ "key": "value" }',
      uploadDate: '2024-08-06',
      // action: 'View'
    }
  ];

  ngOnInit(): void {
    this.options = {
      search: false,
      columns: this.columns,
      displayedColumns: this.columns.map(c => c.columnDef),
      data: this.dataToShow,
      source: 'From Client'
    } 
  }
}

