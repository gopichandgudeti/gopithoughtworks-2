import { Component, ReactNode } from "react";
import "./App.css";

class App extends Component {
  state = {
    searchText: "",
    booksList: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getFetchedData = (data) => ({
    numFound: data.numFound,
    docs: data.docs,
    start: data.start,
    numFoundExact: data.numFoundExact,
  });

  getBooks = async () => {
    const url = "https://openlibrary.org/search.json?q=<your-query>";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const data = response.json();

      const fetchedData = this.getFetchedData(data);
      const booksList = fetchedData.docs;
      console.log(booksList);
    }
  };

  render(): ReactNode {
    return (
      <div className="app-bg-cont">
        <nav className="nav-cont">
          <h1>Books </h1>
          <div className="nav-links-cont">
            <input type="search" />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
