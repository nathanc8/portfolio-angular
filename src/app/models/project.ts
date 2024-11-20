import { Tag } from './tags';
import { ProjectType } from './project-type.enum';

export interface Project {
  id: number;
  type: ProjectType;
  name: string;
  summary: string;
  description: string;
  link: string;
  pictures: string[];
  tags: Tag[];
}
