import React from 'react';
import List from './List';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currPage: 1,
            totalPages: 1,
            subStr: 'spiderman'
        };
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        const { subStr, currPage } = this.state;
        this.fetch(subStr, currPage);
    }

    fetch(substr, pageNum) {
        fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${pageNum}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const currData = this.state.movies;
                this.setState({
                    movies: currData.concat(myJson.data),
                    totalPages: myJson.total_pages
                }, () => {
                    if (this.state.totalPages > this.state.currPage) {
                        const page = this.state.currPage + 1;
                        this.setState({
                            currPage: page,
                        }, () => this.fetch(this.state.subStr, this.state.currPage));
                    }
                })
            });
    }
    render() {
        const titleList = this.state.movies.map(movie => movie.Title).sort();
        return (
            <div>
                <List titleList={titleList}/>
            </div>
        )
    }
}

export default App;
