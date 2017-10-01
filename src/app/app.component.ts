import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tab: chrome.tabs.Tab;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    // 現在のタブのオブジェクトを取得する
    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, (tabs) => {
      this.tab = tabs[0];

      // 変更があったことを通知する
      this.ref.detectChanges();
    });
  }
}
