import SearchForm from "../../components/search/searchForm/SearchForm";
import SearchHandler from "../../components/search/searchHandler/searchHandlerPage/SearchHandler";

const Home = () => {
  return (
    <div className="home_page">
      <SearchForm />
      <SearchHandler />
    </div>
  );
};

export default Home;
