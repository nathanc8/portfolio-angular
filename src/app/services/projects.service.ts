import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { ProjectType } from '../models/project-type.enum';
import { Tag } from '../models/tags';
import { TaggedTemplateExpr } from '@angular/compiler';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[] = [
        new Project(
            'Poker - Object-Oriented Programming',
            ProjectType['solo project'],
            "Implementation of the Texas Hold'em Poker game logic in OOP with Java",
            new Date('2024-10'),
            'https://github.com/nathanc8/poker_OOP',
            '../../public/assets/poker-1.png',
            [Tag.OOP, Tag.JAVA],
        )
            .withDevelopmentTime('Approximately one day.')
            .withDescription([
                "At first, this project was an exercise realized at Ada Tech School, in vanilla Javascript : we had to code the algorithm behind the Texas Hold'em Poker game. I decided to try and code it in Java, as I want to specialize in this language.",
                'I want to implement logics of differents cards games, such as Omaha poker, or blackjack.',
            ]),

        new Project(
            'Ike-AH',
            ProjectType['group project'],
            'Full stack project, e-commerce platform to sell furnitures.',
            new Date('2024-11'),
            'https://github.com/nathanc8/ikeah',
            '../../public/assets/ikeah-1.png',
            [
                Tag.ANGULAR,
                Tag.JAVA,
                Tag.JPA,
                Tag.SQL,
                Tag.HIBERNATE,
                Tag.OOP,
                Tag.SPRINGBOOT,
                Tag.RESTAPI,
                Tag.TYPESCRIPT,
            ],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'This project introduced us to full-stack programming, and into the integration between front-end and back-end development. As it was the our first experience with full-stack development, we had a hard time with initializing the project on our machines. A good solution would have been using Docker, but we did not had much time to study this option. Regarding the organization of our team, we divided into two groups of three members each: one focusing on the front-end and the other on the back-end. After a week, we had to rotate roles. That led to a challenge: to write understandable code for others, and understands others code.',
                'We faced a challenging social situation with one member of the team. After discussions between us and our academic advisors, we mutually agreed not to continue the project with this person. Even if it was a hard decision, it was taken to ensure a more cohesive working environment not only for the team, but for this person as well.',
                'On the technical side, I was affected to the front-end part the first week. We decided to work with Angular, and built a architecture similar to this portfolio (a model and a service, used to get the datas from the API, then called into differents components).',
                'The social incident happened after 3 days in our back-end team. I had to jump in to assist our back-end team in building the database and the API that we chose to develop in Java using Spring Boot and JPA. One of the main challenges was to connect the front-end to the back-end through the API.',
            ])
            .withNumberOfPersons(6),

        new Project(
            'Social Network',
            ProjectType['group project'],
            'Social network programmed in PHP, starting with a code base that we had to clean before implementing anything',
            new Date('2024-10'),
            'https://github.com/adatechschool/projet-collectif-reseau-social-php-olnaye-long',
            '',
            [Tag.PHP, Tag.CSS, Tag.HTML5, Tag.SQL],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'This project was about learning about managing a database, and how to program server-side, and not client-side like we used to do during the beginning of the formation with Javascript. To complete this goal, we were given a PHP codebase that had some @Todo to realize. In fine, another goal of this project was to apprehend another language, and to understand the code of another person.',
                "We created a database from scratch in pure SQL, to save the posts and everything related to those (likes, comments, tags) and the users. We learned how to connect to a database, and how to interact with it, by adding SQL requests in our code. Of course, without users, a social network isn't one, so we implemented a registration and a login system with password hash and protection against SQL injections.",
                '',
            ])
            .withNumberOfPersons(3),

        new Project(
            'FocusPage',
            ProjectType['group project'],
            'Chrome extension that replaces the home page',
            new Date('2024-09'),
            'https://github.com/nathanc8/focuspage',
            '../../public/assets/focuspage-1.png',
            [
                Tag.CSS,
                Tag.HTML5,
                Tag.JAVASCRIPT,
                Tag.TYPESCRIPT,
                Tag.RESTAPI,
                Tag.OOP,
            ],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'FocusPage is a Chrome extension that replaces the home page (when opening a new window or a new tab) with differents widgets. This extension allows the user to have everything they need to work when opening Chrome and start their day.',
                'The main goal of the project was to learn how to make a Chrome extension and how to use Chrome API.',
                'We implemented differents widgets : a calendar (which is a composent that we got on the web), a meteo widget using an API, and a Google search bar.',
                'The main difficulty was to implement the to-do-list, that we chose to do from scratch in TypeScript (a first time for us). This to-do list uses the local storage from Chrome API to save the items and to interact with it. An improvement point about this feature would be to save the items in another format, like an array of objects, whith each object containing a id, the content and the creation date.',
            ])
            .withNumberOfPersons(3),

        new Project(
            'Dataviz',
            ProjectType['group project'],
            'Data visualization representing filming locations in Paris since 2016, using a public API from opendata',
            new Date('2024-07'),
            'https://github.com/nathanc8/dataviz_project_tournages_paris',
            '../../public/assets/dataviz-1.png',
            [Tag.CSS, Tag.HTML5, Tag.JAVASCRIPT, Tag.RESTAPI],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'This project was realised after a month and a half into our formation. We implemented a data vizualisation of the filming locations in Paris since 2016, using a public API from opendata.paris.',
                'The goal of this project was to get familiar with API and asynchrone concept.',
                'We used Leaflet open-source library to have a map, and JavaScript to fetch the datas from the API. These datas were returned as a Json file, that we parsed with JavaScript.',
                'Once we were done with the data visualization part, we wanted to implement a drop-down list with auto completion. This was realized at the end off the project and could use some ameliorations.',
            ])
            .withNumberOfPersons(3),

        new Project(
            'Chat-Grin',
            ProjectType['group project'],
            'Chat-Grin is a video game, developped on Pico-8 during our first month in AdaTechSchool',
            new Date('2024-06'),
            'https://www.lexaloffle.com/bbs/?tid=142791',
            '../../public/assets/chat-grain-1.png',
            [Tag.LUA],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'Chat-Grin is a Pico-8 video game developed in LUA, by a team of three people, who were new to the development field. Play a cat that is lost in a world filled with enemies, unlock new powers and try to get to your home. (Please be careful with the volume)',
                'The goal of this project was to get familiar with the basics of programming (functions, loops, conditions, project architecture...) and to apprehend game concepts, like collisions, movements and animations.',
                'We had to learn how to work as a team on the same codebase, but on differents machines, which was the main challenge since we had no clue of Git at the moment.',
            ])
            .withNumberOfPersons(3),
    ];

    getProjects(): Project[] {
        return [...this.projects];
    }

    getProjectCardById(projectId: string): Project {
        const foundProject = this.projects.find(
            (Project) => Project.id === projectId,
        );
        if (!foundProject) {
            throw new Error('Project not found!');
        }
        return foundProject;
    }
}
