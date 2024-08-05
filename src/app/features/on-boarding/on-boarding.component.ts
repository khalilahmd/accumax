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
  botUrl: string = 'https://copilotstudio.microsoft.com/environments/Default-0cd12112-850e-4380-a038-463fdbb94581/bots/crf19_taxDataCollectionV001_rqxk2l/webchat?__version__=2';
  // botUrl: string = 'https://copilotstudio.microsoft.com/environments/Default-0cd12112-850e-4380-a038-463fdbb94581/bots/crf19_taxDataCollectionV001_rqxk2l/webchat?__version__=2%22'

  ngOnInit(): void {
  }
}
