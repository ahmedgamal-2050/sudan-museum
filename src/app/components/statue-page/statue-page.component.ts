import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Statue } from '../statue.interface';
import { ShareService } from './../share.service';

@Component({
  selector: 'app-statue-page',
  templateUrl: './statue-page.component.html',
  styleUrls: ['./statue-page.component.scss']
})
export class StatuePageComponent implements OnInit {
  statuesList: Statue[] = [];
  statueId: number = 0;
  statue!: Statue;
  currentLanguage: string = "English";
  secondLanguage: string = "عـــربـــى";
  thirdLanguage: string = "French";
  pageDirection: string = '';

  constructor(
    private share: ShareService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    if (translate.currentLang === 'ar') {
      this.currentLanguage = "عـــربـــى";
      this.secondLanguage = "English";
      this.thirdLanguage = "French";
      this.pageDirection = 'rtl';
    }
    else if (translate.currentLang === 'fr') {
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
    this.route.params.subscribe((param) => {
      this.statueId = parseInt(param['id']);
      this.statue = this.share.getStatue(this.statueId);
    });
  }

  play(): void {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play();
    }
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
