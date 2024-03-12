export interface FoodItemAttributes {
  Title: string;
  Description: string;
  Image: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    }[];
  };
}

export interface RandomFoodItem {
  id: string;
  attributes: {
    Title: string;
    Description: string;
    imageData: FoodImages[];
  };
}

export interface FoodImages {
  alternativeText: string;
  url: string;
}

export interface Contents {
  description: string;
}

export interface FoodItem {
  id: string;
  attributes: {
    Title: string;
    Description: string;
    imageData: Array<{ alternativeText: string; url: string }>;
  };
}
