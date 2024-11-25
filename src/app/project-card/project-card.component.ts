import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
    @Input() project!: Project;

    constructor(private router: Router) {}

    viewProject() {
        this.router.navigateByUrl(`project/${this.project.id}`);
    }
}
