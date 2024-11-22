import { Tag } from './tags';
import { ProjectType } from './project-type.enum';

export class Project {
    id: string;
    images?: string[];
    description?: string[];
    developmentTime?: string;
    numberOfPersons?: number;

    constructor(
        public name: string,
        public type: ProjectType,
        public summary: string,
        public createdAt: Date,
        public githubUrl: string,
        public mainImageUrl: string,
        public tags: Tag[],
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

    getDevelopmentTime(): string | undefined {
        return this.developmentTime;
    }

    setDevelopmentTime(developmentTime: string) {
        this.developmentTime = developmentTime;
    }

    withDevelopmentTime(developmentTime: string): Project {
        this.setDevelopmentTime(developmentTime);
        return this;
    }

    getDescription(): string[] | undefined {
        return this.description;
    }

    setDescription(description: string[]) {
        this.description = description;
    }

    withDescription(description: string[]): Project {
        this.setDescription(description);
        return this;
    }

    getImages(): string[] | undefined {
        return this.images;
    }

    setImages(imagesUrls: string[]) {
        this.images = imagesUrls;
    }

    withImages(imagesUrls: string[]): Project {
        this.setImages(imagesUrls);
        return this;
    }

    getNumberOfPersons(): number | undefined {
        return this.numberOfPersons;
    }

    setNumberOfPersons(numberOfPersons: number) {
        this.numberOfPersons = numberOfPersons;
    }

    withNumberOfPersons(numberOfPersons: number): Project {
        this.setNumberOfPersons(numberOfPersons);
        return this;
    }
}
