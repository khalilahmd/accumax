import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotViewComponent } from '../../shared/components/bot-view';

@Component({
  selector: 'app-cpa-bot',
  standalone: true,
  imports: [
    CommonModule,
    BotViewComponent
  ],
  templateUrl: './cpa-bot.component.html',
  styleUrl: './cpa-bot.component.scss'
})
export class CpaBotComponent implements OnInit {
  botUrl: string = 'https://web.powerva.microsoft.com/environments/b239cbb7-fcb5-e284-956f-4fa54d855300/bots/cr716_Bfirst_test_bot/webchat?__version__=2'

  ngOnInit(): void {
  }

}
