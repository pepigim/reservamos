import axios from "axios";
import CiudadesResponse from '../models/responses/Ciudades.response';


export const getCiudades = async (q: string) => {
    const url = `https://search.reservamos.mx/api/v2/places?${q}`
    const respCiudades = await axios.get<CiudadesResponse>(url);
    if (respCiudades.status === 201) {
        return [];
    }
    return respCiudades.data;
}

export const getWeather = async (lat: string, lon: string ) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=a5a47c18197737e8eeca634cd6acb581`
    const respCiudades = await axios.get<CiudadesResponse>(url);
    if (respCiudades.status === 201) {
        return [];
    }
    return respCiudades.data;
}