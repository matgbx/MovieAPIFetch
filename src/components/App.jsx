import React from 'react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currPage: 1,
      totalPages: 1,
      subStr: 'spiderman',
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    const { subStr, currPage } = this.state;
    this.fetch(subStr, currPage);
  }

  fetch(searchStr, pageNum) {
    const {
      movies,
      currPage,
      totalPages,
      subStr,
    } = this.state;
    fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${searchStr}&page=${pageNum}`)
      .then(response => response.json())
      .then((myJson) => {
        const currData = movies;
        this.setState({
          movies: currData.concat(myJson.data),
          totalPages: myJson.total_pages,
        }, () => {
          if (totalPages > currPage) {
            const page = currPage + 1;
            this.setState({
              currPage: page,
            }, () => this.fetch(subStr, currPage));
          }
        });
      });
  }

  render() {
    const { movies } = this.state;
    const titleList = movies.map(movie => movie.Title).sort();
    return (
      <div>
        <List titleList={titleList} />
      </div>
    );
  }
}

export default App;
