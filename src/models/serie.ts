import { Content } from './content';

export interface Serie {
  template: string;
  parentalrating: number;
  title: string;
  offset: number;
  limit: string;
  total: number;
  count: number;
  contents: Content[];
}
