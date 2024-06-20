import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};

export function getSanityImage(inputString: any) {
  const imageRef = inputString?.asset?._ref || inputString;
  const parts = imageRef?.split("-");
  const imageId = parts?.slice(1, -2).join("-"); // Extract the image ID
  const dimensions = parts[parts?.length - 2] || 200; // Extract the dimensions
  const extension = parts[parts?.length - 1] || 200; // Extract the image extension

  const baseURL = `https://cdn.sanity.io/images/${projectId}/production/`;
  const imageURL = `${baseURL}${imageId}-${dimensions}.${extension}`;

  return imageURL;
}
