import axios from "axios";

interface Country {
  code: string;
  name: string;
}

const getCountry = async function (): Promise<Country> {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    return {
      code: response.data.country_code,
      name: response.data.country_name,
    };
  } catch (e) {
    console.log("error in getting country", e);
  }
};

export default getCountry;

export type { Country };
