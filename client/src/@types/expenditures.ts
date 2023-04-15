export interface Tag {
  color: string;
  tagCategory: string;
  backgroundColor: string;
}

export interface ExpenditureItem {
  id: number | string;
  value: number; // amount of money
  date: number; // unix timestamp
  description: string;
  categories: Tag[];
}
