import { Component, Input } from '@angular/core';
import { Project } from '../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../services/projects.service';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ProjectType } from '../models/project-type.enum';

@Component({
    selector: 'app-single-project-page',
    standalone: true,
    imports: [UpperCasePipe, LowerCasePipe],
    templateUrl: './single-project-page.component.html',
    styleUrl: './single-project-page.component.css',
})
export class SingleProjectPageComponent {
    @Input() projectPreview!: Project;

    project!: Project;
    projects!: Project[];
    ProjectType = ProjectType;

    constructor(
        public route: ActivatedRoute,
        private projectsService: ProjectService,
        public router: Router,
    ) {}

    ngOnInit(): void {
        this.getProject();
    }

    private getProject() {
        const projectId = this.route.snapshot.params['id'];
        this.project = this.projectsService.getProjectById(projectId);
        console.log(this.project.type);
    }

    onProjectsListClick() {
        this.router.navigateByUrl('portfolio');
    }

    onHomepageClick() {
        this.router.navigateByUrl('home');
    }
}
