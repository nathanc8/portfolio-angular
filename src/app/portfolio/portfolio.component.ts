import { Component } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tags';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Chat-Grin',
      summary:
        'Chat-Grin is a video game, developped on Pico-8 during our first month in AdaTechSchool',
      description:
        'Chat-Grin is a Pico-8 video game developed in LUA, by a team of three people, who were new to the development field. Play a cat that is lost in a world filled with enemies, unlock new powers and try to get to your home.',
      link: 'https://www.lexaloffle.com/bbs/?tid=142791',
      pictures: ['../../public/assets/chat-grain-1.png'],
      tags: [Tag.LUA],
    },
    {
      id: 2,
      name: 'Dataviz',
      summary:
        'Data visualization representing filming locations in Paris since 2016, using a public API from opendata',
    },
  ];
}
