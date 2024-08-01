import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from "../../shared/components/file-uploader/file-uploader.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [MatCardModule, CommonModule, FileUploaderComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
