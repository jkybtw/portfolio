import { Item } from './item';

export interface Potion {
  name: string;
  alt: string;
  description: string;
  image: string;
  ingredients: any[];
  headerClass: string;
}
