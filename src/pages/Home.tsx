import { useSelector, useDispatch } from "react-redux";

import SearchForm from "../components/search/searchform/SearchForm";
import SearchHandler from "../components/search/searchhandler/SearchHandler";
import { Appdispatch, RootState } from "../redux/store";

const Home = () => {
  const dispatch = useDispatch<Appdispatch>();
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  console.log(isLoading, "loading from Home");
  // render
  return (
    <div>
      <SearchForm />
      <SearchHandler />
    </div>
  );
};

export default Home;
