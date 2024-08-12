import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from "../../shared/components/file-uploader/file-uploader.component";

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [MatCardModule, CommonModule, FileUploaderComponent],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {

}
