export type CategoriesProps = {
  categories: any;
  selectedCategory: string;
  onCategoryPress: (selected: string) => void;
};

export type Category = {
  name: string;
  isEnabled?: boolean;
};
