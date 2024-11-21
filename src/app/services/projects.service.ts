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
                'The goal of this project was to get familiar with API and aynchrone concept.',
                'We used Leaflet open-source library to have a map, and JavaScript to fetch the datas from the API. These datas were returned as a Json file, that we parsed with JavaScript.',
            ]),

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
            ]),
    ];

    getProjects(): Project[] {
        return [...this.projects];
    }

    getProjectCardById(projectId: string): Project {
        const foundProject = this.projects.find((Project) => Project.id === projectId);
        if (!foundProject) {
            throw new Error('Project not found!');
        }
        return foundProject;
    }
}
