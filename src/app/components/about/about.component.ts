import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  pageDirection: string = '';

  constructor(private translate: TranslateService) {
    if (translate.currentLang === 'ar') {
      this.pageDirection = 'rtl';
    }
    else if (translate.currentLang === 'fr') {
      this.pageDirection = 'ltr';
    }
    else {
      this.pageDirection = 'ltr';
    }
  }

  ngOnInit(): void {
  }

}
