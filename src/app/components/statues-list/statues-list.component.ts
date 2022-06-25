import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Statue } from '../statue.interface';
import { TranslateService } from '@ngx-translate/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-statues-list',
  templateUrl: './statues-list.component.html',
  styleUrls: ['./statues-list.component.scss']
})
export class StatuesListComponent implements OnInit, AfterViewInit {
  statuesList: Statue[] = [];
  currentLanguage: string = "English";
  secondLanguage: string = "عـــربـــى";
  thirdLanguage: string = "French";
  pageDirection: string = '';

  constructor(private translate: TranslateService,
    private share: ShareService) {
    console.log('currentLang >>', this.translate.currentLang);
    if (this.translate.currentLang === 'ar') {
      this.currentLanguage = "عـــربـــى";
      this.secondLanguage = "English";
      this.thirdLanguage = "French";
      this.pageDirection = 'rtl';
    }
    else if (this.translate.currentLang === 'fr') {
      this.currentLanguage = "French";
      this.secondLanguage = "English";
      this.thirdLanguage = "عـــربـــى";
      this.pageDirection = 'ltr';
    }
    else {
      this.currentLanguage = "English";
      this.secondLanguage = "عـــربـــى";
      this.thirdLanguage = "French";
      this.pageDirection = 'ltr';
    }
  }

  ngOnInit(): void {
    this.statuesList = this.share.statuesList;
  }

  ngAfterViewInit(): void {
    this.translate.onLangChange.subscribe(lang => {
      console.log('currentLang >>', lang.lang);
      if (lang.lang === 'ar') {
        this.currentLanguage = "عـــربـــى";
        this.secondLanguage = "English";
        this.thirdLanguage = "French";
        this.translate.use('ar');
        this.pageDirection = 'rtl';
      }
      else if (lang.lang === 'fr') {
        this.currentLanguage = "French";
        this.secondLanguage = "English";
        this.thirdLanguage = "عـــربـــى";
        this.translate.use('fr');
        this.pageDirection = 'ltr';
      }
      else {
        this.currentLanguage = "English";
        this.secondLanguage = "عـــربـــى";
        this.thirdLanguage = "French";
        this.translate.use('en');
        this.pageDirection = 'ltr';
      }
    })
  }

  onChangeLang(lang: string) {
    if (lang === 'عـــربـــى') {
      this.currentLanguage = "عـــربـــى";
      this.secondLanguage = "English";
      this.thirdLanguage = "French";
      this.translate.use('ar');
      this.pageDirection = 'rtl';
    }
    else if (lang === 'French') {
      this.currentLanguage = "French";
      this.secondLanguage = "English";
      this.thirdLanguage = "عـــربـــى";
      this.translate.use('fr');
      this.pageDirection = 'ltr';
    }
    else {
      this.currentLanguage = "English";
      this.secondLanguage = "عـــربـــى";
      this.thirdLanguage = "French";
      this.translate.use('en');
      this.pageDirection = 'ltr';
    }
  }
}
