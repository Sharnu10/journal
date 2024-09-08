export interface CardData {
  id: number;
  headerText: string;
  priority: string;
  title: string;
  category: string[];
  description: string;
}

export interface CardStyle {
  width: string;
}

export interface CardProps {
  cardData: CardData;
  cardStyle: CardStyle;
}
