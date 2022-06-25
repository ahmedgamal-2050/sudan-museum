import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title = 'Sudan Museum';
  showSplash: boolean = true;
  showComingSoon: boolean = false;
  showHome: boolean = false;
  countDownDay: string = '';
  countDownTime: string = '';
  pageDirection: string = '';

  constructor(private translate: TranslateService, private router: Router) {
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
    this.loadContent();
  }

  ngAfterViewInit(): void {
  }

  loadContent() {
    // Set splash screen and end it after 2 seconds
    document.addEventListener('DOMContentLoaded', (event)=> {
        setTimeout(()=>{
          this.showSplash = false;
          // Update the count down every 1 second
          var x = setInterval(() => {
            this.showComingSoon = true;
            this.showHome = false;
            // Set the date we're counting down to
            var countDownDate = new Date("Jun 27, 2021 19:00:00").getTime();
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
    
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in an element
            this.countDownDay = this.translate.instant('home.countDownDay', {dayNo: days});
            this.countDownTime = this.translate.instant('home.countDownTime', {hoursNo: hours, minutesNo: minutes, secondsNo: seconds});
            
            // If the count down is over, write some text
            if (distance < 0) {
              clearInterval(x);
              this.showComingSoon = false;
              this.showHome = true;
            }
          }, 1000);
        }, 2000);
    });
  }

  setLang(lang: string) {
    this.router.navigate(['/statues-list']);
    if (lang === 'ar') {
      this.translate.use('ar');
      this.pageDirection = 'rtl';
    }
    else if (lang === 'fr') {
      this.translate.use('fr');
      this.pageDirection = 'ltr';
    }
    else {
      this.translate.use('en');
      this.pageDirection = 'ltr';
    }
  }
}
