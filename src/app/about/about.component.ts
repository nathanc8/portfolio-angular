import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
})
export class AboutComponent {
    constructor(private title: Title) {
        this.title.setTitle('NCZ | About me');
    }
}
