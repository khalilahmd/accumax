import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotViewComponent } from '../../shared/components/bot-view';

@Component({
  selector: 'app-on-boarding',
  standalone: true,
  imports: [
    CommonModule,
    BotViewComponent
  ],
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent implements OnInit {
  botUrl: string = 'https://cpaonboardingbot.azurewebsites.net';
  ngOnInit(): void {
  }
}
