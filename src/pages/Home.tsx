import SearchForm from "src/components/search/searchform/SearchForm";
import SearchHandler from "src/components/search/searchhandler/SearchHandler";

const Home = () => {
  // render
  return (
    <div className="home_page">
      <SearchForm />
      <SearchHandler />
    </div>
  );
};

export default Home;
