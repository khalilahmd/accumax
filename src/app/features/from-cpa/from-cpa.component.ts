import { Component } from '@angular/core';
import { FileUploaderComponent } from '../../shared/components/file-uploader';

@Component({
  selector: 'app-from-cpa',
  standalone: true,
  imports: [FileUploaderComponent],
  templateUrl: './from-cpa.component.html',
  styleUrl: './from-cpa.component.scss'
})
export class FromCPAComponent {

}
