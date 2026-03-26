export type Category = 'Foundations' | 'Identity' | 'Healing' | 'Warfare';

export interface Teaching {
  id: number;
  title: string;
  category: Category;
  excerpt: string;
  content: string;
  slug: string;
}
