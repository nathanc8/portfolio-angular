import { Component, OnInit } from '@angular/core';
import { LinktreeComponent } from '../linktree/linktree.component';
import { Title } from '@angular/platform-browser';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [LinktreeComponent, TitleCasePipe, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  dynamicText: string = '';
  description: string[] = [
    'aspiring developer',
    'backend enthusiast',
    'future full-stack programmer',
    'breaking into tech',
  ];

  currentDescriptionIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  speed: number = 100;
  deletingSpeed: number = 100;
  delay: number = 2500;

  constructor(private title: Title) {
    this.title.setTitle('NCZ - Home');
  }

  ngOnInit(): void {
    this.describeMe();
  }

  describeMe() {
    const currentPhrase = this.description[this.currentDescriptionIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }
    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.describeMe(), this.delay);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentDescriptionIndex =
        (this.currentDescriptionIndex + 1) % this.description.length;
      setTimeout(() => this.describeMe(), 500);
    } else {
      setTimeout(() => this.describeMe(), this.speed);
    }
  }
}
