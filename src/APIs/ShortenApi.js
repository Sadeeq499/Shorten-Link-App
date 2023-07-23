import axios from "axios";

export const shortenUrl = async (url) => {
  try {
    const response = await axios.post(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    );
    // console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
