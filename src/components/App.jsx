import { Component } from 'react';
import * as ImageService from 'service/image-service';
import { SearchBar } from 'components/searchbar/searchbar';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };

  // componentDidMount() {
  //   ImageService.getImage(this.state.query, this.state.page);
  // }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      const data = await ImageService.getImage(query, page);
      console.log(data.data.hits);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.data.hits],
        };
      });
    }
  }

  getQuery = query => {
    this.setState({
      query,
      page: 1,
      images: [],
    });
  };

  render() {
    return <SearchBar onSubmit={this.getQuery} />;
  }
}
