import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//get data for cards
export const fetchData = async () => {

   try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate }
      } = await axios.get(url);

      return { confirmed, recovered, deaths, lastUpdate };
   } catch (error) {
      console.log(error);
   }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    console.log(countries);

    return countries.map(country => country.name);
  } catch (error) {
    console.log(error);
  }
};
