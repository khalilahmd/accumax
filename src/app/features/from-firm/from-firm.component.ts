import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from '../../shared/components/file-uploader';

@Component({
  selector: 'app-from-firm',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    FileUploaderComponent
  ],
  templateUrl: './from-firm.component.html',
  styleUrls: ['./from-firm.component.scss']
})
export class FromFirmComponent {
  allCards = [
    { title: 'Document 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Document 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Document 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
  ];

  investmentCards = [
    { title: 'Investment 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Investment 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Investment 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
  ];

  signatureCards = [
    { title: 'Signature 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Signature 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Signature 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' }
  ];
}

