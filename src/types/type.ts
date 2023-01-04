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
  capital: string[];
  //   generic type parameter for attributes
  //   { [indexName: KeyType]: ValueType }.
  languages: { [key: string]: string };
  lating: string[];
};
export default Country;
