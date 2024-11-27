import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/projects.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-portfolio',
    imports: [ProjectCardComponent, CommonModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
    projects!: Project[];

    constructor(private projectsServices: ProjectService) {}

    ngOnInit(): void {
        this.projects = this.projectsServices.getProjects();
    }
}
