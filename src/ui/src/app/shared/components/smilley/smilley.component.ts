import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-smilley',
  templateUrl: './smilley.component.html',
  styleUrls: ['./smilley.component.css']
})
export class SmilleyComponent {

  readonly SMILEY_URL = 'https://shikimori.me/images/smileys/';

  @Input()
  smiley: string;

  @Output()
  pick = new EventEmitter<string>();

  constructor() {}

}
