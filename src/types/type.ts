// Type
type Country = {
  name: {
    common: string;
  };
  region: string;
  subregion: string;
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  capital: string;
  languages: { [key: string]: string };
  latlng: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  car: {
    signs: string;
    side: string;
  };
  continents: string;
  timezones: string;
};
export default Country;
