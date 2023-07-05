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
    name: item.title.replace(/ .*/, ""),
    description: item.title,
    url: item.url,
  }));
