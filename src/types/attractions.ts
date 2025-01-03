export interface AttractionItem {
  id: number;
  name: string;
  description: string;
  location: string;
  entryFee: string;
  openingHours: string;
  rating: number;
  image: string | string[];
  tags: string[];
}

export interface Category {
  id: number;
  name: string;
  description: string;
  items: AttractionItem[];
}

export interface AttractionsData {
  categories: Category[];
}
