import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/projects.service';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { ProjectType } from '../../models/project-type.enum';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-single-project-page',
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
        private title: Title,
    ) {}

    ngOnInit(): void {
        this.getProject();
    }

    private getProject() {
        const projectId = this.route.snapshot.params['id'];
        this.project = this.projectsService.getProjectById(projectId);
        if (this.project && this.project.name) {
            this.title.setTitle(`NCZ | ${this.project.name}`);
        } else {
            console.warn("Page title can't be set. Project is not totally defined");
        }
    }

    onProjectsListClick() {
        this.router.navigateByUrl('portfolio');
    }

    onHomepageClick() {
        this.router.navigateByUrl('home');
    }
}
