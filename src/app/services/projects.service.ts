import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { ProjectType } from '../models/project-type.enum';
import { Tag } from '../models/tags';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projects: Project[] = [
        new Project(
            'Poker',
            ProjectType['solo'],
            "Implementation of the Texas Hold'em Poker game logic in Object-Oriented Programming with Java",
            new Date('2024-10'),
            'https://github.com/nathanc8/poker_OOP',
            './assets/projects/poker-1.png',
            `Picture of my IDE opened on my Poker project`,
            [Tag.JAVA, Tag.OOP],
        )
            .withDevelopmentTime('Approximately one day')
            .withDescription([
                "At first, this project was an exercise assigned at Ada Tech School, in vanilla Javascript : we had to code the algorithm behind the Texas Hold'em Poker game. I decided to try and code it in Java, in a Object-Oriented Programming logic, as I want to specialize in this language.",
                'I want to implement logics of differents cards games, such as Omaha poker, 5-card-draw, or blackjack.',
            ]),

        new Project(
            'Ike-AH',
            ProjectType['group'],
            'Full stack project, e-commerce platform to sell furnitures.',
            new Date('2024-11'),
            'https://github.com/nathanc8/ikeah',
            './assets/projects/ikeah-1.png',
            'Picture of our site landing page',
            [
                Tag.ANGULAR,
                Tag.JAVA,
                Tag.SPRINGBOOT,
                Tag.TYPESCRIPT,
                Tag.JPA,
                Tag.OOP,
                Tag.HIBERNATE,
                Tag.RESTAPI,
                Tag.SQL,
            ],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                "This project introduced us to full-stack programming, and into the integration between front-end and back-end development. As it was the our first experience with full-stack development, the primary difficulty we had was with initializing the project on our machines. A good solution would have been using Docker, but we did not have much time to study this option. Regarding the organization of our team, we divided into two groups of three members each: one focusing on the front-end and the other on the back-end. After a week, we had to rotate roles. That led to another challenge: to write understandable code for others, and understands others' code.",
                'We faced a challenging social situation with one member of the team. After discussions between us and our academic advisors, we mutually agreed not to continue the project with this person. Even if it was a hard decision, it was taken to ensure a more cohesive working environment not only for the team, but for this person as well.',
                'On the technical side, I was assigned to the front-end part during the first week. We decided to work with Angular, and built an architecture similar to this portfolio (a model and a service, used to get the data from the API, then called into differents components).',
                'The social incident happened after 3 days, in our back-end team. Out of necessity, I was required to quickly join and assist our back-end team in building the database and the API that we chose to develop in Java using Spring Boot and JPA. One of the main challenges was to connect the front-end to the back-end through the API.',
                //@Todo Description is not finished
            ])
            .withTeamSize('6 persons, divided in two sub-groups'),

        new Project(
            'Social Network',
            ProjectType['group'],
            'Social network programmed in PHP, starting with a code base that we had to clean before implementing anything',
            new Date('2024-10'),
            'https://github.com/adatechschool/projet-collectif-reseau-social-php-olnaye-long',
            '',
            '',
            [Tag.PHP, Tag.SQL, Tag.CSS, Tag.HTML5],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'This project was about learning how to managing a database, and how to program server-side, and not client-side like we had previously done with Javascript. To complete this goal, we were given a PHP codebase that had some @Todo tasks to complete. In fine, another goal of this project was to learn another language, and to understand the code produced by another person.',
                "We created a database from scratch purely in SQL, to save the posts and everything related such as likes, comments, and tags, as well as the users. We learned how to connect to a database, and how to interact with it, by adding SQL requests in our code. Of course, without users, a social network isn't social, so we implemented a registration and a login system with password hash and protection against SQL injections.",

                //@Todo finish the description of this project, for exemple with improvements points.
            ])
            .withTeamSize('3 persons'),

        new Project(
            'FocusPage',
            ProjectType['group'],
            'Chrome extension that replaces the home page',
            new Date('2024-09'),
            'https://github.com/nathanc8/focuspage',
            './assets/projects/focuspage-1.png',
            'Picture of a new tab affected by our extension, presenting a weather widget, a to-do list, a calendar, and a Google search bar',
            [Tag.TYPESCRIPT, Tag.JAVASCRIPT, Tag.RESTAPI, Tag.CSS, Tag.HTML5, Tag.OOP],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'FocusPage is a Chrome extension that replaces the browser home page (when opening a new window or a new tab) with differents widgets. This extension allows the user to have everything they need to work when opening Chrome and start their day.',
                'The main goal of the project was to learn how to make a Chrome extension and how to use Chrome API.',
                'We implemented differents widgets : a calendar (which is a component that we got on the web), a weather widget using an API, and a Google search bar.',
                'The main difficulty was to implement the to-do-list, that we chose to do from scratch in TypeScript (a first time with this language for us). This to-do list uses the local storage from Chrome API to save the tasks in an array and to interact with it. A place of improvemment for this feature would be to save the tasks in another format, like an array of objects, with each object containing an id, the content, and the creation date.',
            ])
            .withTeamSize('3 persons'),

        new Project(
            'Dataviz',
            ProjectType['group'],
            'Data visualization representing filming locations in Paris since 2016, using a public API from opendata',
            new Date('2024-07'),
            'https://github.com/nathanc8/dataviz_project_tournages_paris',
            './assets/projects/dataviz-1.png',
            "Picture of our project, presenting the filmings locations in Paris of the movie 'L'attaché'",
            [Tag.JAVASCRIPT, Tag.RESTAPI, Tag.CSS, Tag.HTML5],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'This project was completed after two months into our formation. We implemented a data vizualisation of the filming locations in Paris since 2016, using a public API from opendata.paris.',
                'The goal of this project was to get familiar with API and asynchrone concept.',
                'We used Leaflet open-source library to have a map, and JavaScript to fetch the data from the API. This data was returned as a Json file, that we parsed with JavaScript.',
                'Once we were done with the data visualization, we wanted to implement a drop-down list with auto completion. This was made at the end of the project and could use some improvements.',
                //@Todo Need to think about some exemples of improvements here.
            ])
            .withTeamSize('3 persons'),

        new Project(
            'Chat-Grin',
            ProjectType['group'],
            'Chat-Grin is a video game, developped on Pico-8 during our first month in AdaTechSchool',
            new Date('2024-06'),
            'https://www.lexaloffle.com/bbs/?tid=142791',
            './assets/projects/chat-grain-1.png',
            'Screenshot of our game menu',
            [Tag.LUA],
        )
            .withDevelopmentTime('Approximately 7 days')
            .withDescription([
                'Chat-Grin is a Pico-8 video game developed in LUA by a team of three people who were new to the development field. Play a cat that is lost in a world filled with enemies, unlock new powers and try to get to your home. (Please be careful with the volume)',
                'The goal of this project was to get familiar with the basics of programming (functions, loops, conditions, project architecture...) and to investigate game concepts, like collisions, movements and animations.',
                'We had to learn how to work as a team on the same codebase, but on differents machines, which was the main challenge since Git was a new concept to us at the moment.',
            ])
            .withTeamSize('3 persons'),
    ];

    //return a shallow copy to not affect projects data directly
    getProjects(): Project[] {
        return [...this.projects];
    }

    getProjectById(projectId: string): Project {
        const foundProject = this.projects.find((Project) => Project.id === projectId);
        console.log(foundProject);
        if (foundProject == null) {
            throw new Error('Project not found!');
        }
        return foundProject;
    }
}
