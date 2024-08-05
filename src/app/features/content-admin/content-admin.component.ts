import { Component } from '@angular/core';
import { BotViewComponent } from '../../shared/components/bot-view';

@Component({
  selector: 'app-content-admin',
  standalone: true,
  imports: [BotViewComponent],
  templateUrl: './content-admin.component.html',
  styleUrl: './content-admin.component.scss'
})
export class ContentAdminComponent {
 botUrl: string = 'https://web.powerva.microsoft.com/environments/b239cbb7-fcb5-e284-956f-4fa54d855300/bots/cr716_Bfirst_test_bot/webchat?__version__=2'
}
