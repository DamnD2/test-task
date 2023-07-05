import { ItemData } from "types";

export interface JsonPlaceholderItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const formatImagesData = (items: JsonPlaceholderItem[]): ItemData[] =>
  items.map((item) => ({
    name: `${item.title.replace(/ .*/, "")} ${item.id}`, // id for name uniqueness
    description: item.title,
    url: item.url.replace("600", "250"), // change images size
  }));
