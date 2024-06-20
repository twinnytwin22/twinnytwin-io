export const getOpenSeaKey = () => {
  if (process.env.NEXT_PUBLIC_OPENSEA_KEY) {
    return process.env.NEXT_PUBLIC_OPENSEA_KEY;
  } else {
    throw new Error("Error retrieving Opensea API KEY");
  }
};

export const OSoptions = {
  method: "GET",
  headers: { "X-API-KEY": getOpenSeaKey() || "", accept: "application/json" },
};

export const baseOpenSeaURL = "https://api.opensea.io/api/v2/";

export const getOpenSeaURL = (type: string) => {
  const url = baseOpenSeaURL + type;
  return url;
};


export const fetchOpensea = async (type: string, endpoint: string) => {
const res = await fetch(getOpenSeaURL(type) + endpoint)
const data = await res.json()

if (data){
    return data
}
}