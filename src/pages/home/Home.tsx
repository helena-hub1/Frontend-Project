import SearchForm from "../../components/search/searchform/SearchForm";
import SearchHandler from "../../components/search/searchHandler/searchhandlerpage/SearchHandler";

const Home = () => {
  return (
    <div className="home_page">
      <SearchForm />
      <SearchHandler />
    </div>
  );
};

export default Home;
