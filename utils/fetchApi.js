import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

//   headers: {
//     'X-RapidAPI-Key': '89a38abe48msh382e33480319f47p130eeajsnc48712600b27',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '89a38abe48msh382e33480319f47p130eeajsnc48712600b27',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });

    return data;
}