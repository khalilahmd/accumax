import { Component, HostBinding } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [
    CommonModule,         // Import CommonModule for common directives
    MatSlideToggleModule, // Import MatSlideToggleModule for the slide toggle
    MatCardModule         // Import MatCardModule for Material cards
  ],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  @HostBinding('class.dark-theme') darkTheme = false;

  toggleDarkTheme(event: any) {
    this.darkTheme = event.checked;
    document.documentElement.style.setProperty(
      '--background-color',
      this.darkTheme ? '#333' : 'white'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      this.darkTheme ? 'brown' : 'black'
    );
  }
}
