import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-bot-view',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './bot-view.component.html',
  styleUrl: './bot-view.component.scss'
})
export class BotViewComponent implements OnInit {
  @Input() url: string = '';
  @Input() options: Object = {};

  ngOnInit(): void {
  }
}
