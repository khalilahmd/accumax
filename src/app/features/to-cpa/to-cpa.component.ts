import { Component } from '@angular/core';
import { FileUploaderComponent } from '../../shared/components/file-uploader';

@Component({
  selector: 'app-to-cpa',
  standalone: true,
  imports: [FileUploaderComponent],
  templateUrl: './to-cpa.component.html',
  styleUrl: './to-cpa.component.scss'
})
export class ToCPAComponent {

}
