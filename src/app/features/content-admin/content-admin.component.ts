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
 botUrl: string = 'https://org777c71ef.crm.dynamics.com/main.aspx?appid=fcc48c60-da53-ef11-a317-6045bda960d5'
}
