import { Component } from '@angular/core';
import { Project } from '../models/project';
import { Tag } from '../models/tags';
import { ProjectType } from '../models/project-type.enum';

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
      type: ProjectType['group project'],
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
      type: ProjectType['group project'],
      name: 'Dataviz',
      summary:
        'Data visualization representing filming locations in Paris since 2016, using a public API from opendata',
      description:
        'This project was realised after a month and a half into our formation. We implemented a data vizualisation of the filming locations in Paris since 2016, using a public API from opendata.paris. We used Leaflet open-source library to have a map, and JavaScript to fetch the datas from the API. These datas were returned as a Json file, that we parsed with JavaScript.',
      link: 'https://github.com/nathanc8/dataviz_project_tournages_paris',
      pictures: ['../../public/assets/dataviz-1.png'],
      tags: [Tag.CSS, Tag.HTML5, Tag.JAVASCRIPT, Tag.RESTAPI],
    },
    {
      id: 3,
      type: ProjectType['group project'],
      name: 'FocusPage',
      summary: 'Chrome extension that replaces the home page',
      description:
        'FocusPage is a Chrome extension that replaces the home page (when opening a new window, or a new tab), with differents widgets. We implemented a calendar that highlights the current date, a to-do-list done from scratch in TypeScript, a meteo widget using an API, and a Google search bar. This extension allows the user to have everything they needs in order to work when opening Chrome and start their day.',
      link: 'https://github.com/nathanc8/focuspage',
      pictures: ['../../public/assets/focuspage-1.png'],
      tags: [
        Tag.CSS,
        Tag.HTML5,
        Tag.JAVASCRIPT,
        Tag.TYPESCRIPT,
        Tag.RESTAPI,
        Tag.OOP,
      ],
    },
    {
      id: 4,
      type: ProjectType['group project'],
      name: 'Dataviz',
      summary:
        'Data visualization representing filming locations in Paris since 2016, using a public API from opendata',
      description: 'In this project, we wanted',
      link: 'https://github.com/nathanc8/dataviz_project_tournages_paris',
      pictures: ['../../public/assets/dataviz-1.png'],
      tags: [Tag.CSS, Tag.HTML5, Tag.JAVASCRIPT, Tag.RESTAPI],
    },
    {
      id: 5,
      type: ProjectType['group project'],
      name: 'Dataviz',
      summary:
        'Data visualization representing filming locations in Paris since 2016, using a public API from opendata',
      description: 'In this project, we wanted',
      link: 'https://github.com/nathanc8/dataviz_project_tournages_paris',
      pictures: ['../../public/assets/dataviz-1.png'],
      tags: [Tag.CSS, Tag.HTML5, Tag.JAVASCRIPT, Tag.RESTAPI],
    },
  ];
}
