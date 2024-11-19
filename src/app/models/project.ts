import { Tag } from './tags';

export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  link: string;
  pictures: string[];
  tags: Tag[];
}
