export function imageBuilder(inputString: any) {
  if (inputString) {
    const imageRef = inputString?.asset._ref;
    const parts = imageRef?.split("-");
    const imageId = parts?.slice(1, -2).join("-"); // Extract the image ID
    const dimensions = parts[parts?.length - 2]; // Extract the dimensions
    const extension = parts[parts?.length - 1]; // Extract the image extension

    const baseURL = "https://cdn.sanity.io/images/iwnmqr8g/production/";
    const imageURL = `${baseURL}${imageId}-${dimensions}.${extension}`;

    return imageURL;
  } else {
    return "#";
  }
}
