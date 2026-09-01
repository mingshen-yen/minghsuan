import links from "../content/links.json";
import type { LinksData } from "../lib/type";

export function getLinks(): LinksData {
  return links as LinksData;
}
