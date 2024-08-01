import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() zoom: number = 8;

  ngOnInit(): void {
    // Additional initialization logic if needed
  }
}
