import about from "../content/about.json";
import type { AboutData } from "../lib/type";

export function getAbout(): AboutData {
  return about as AboutData;
}
