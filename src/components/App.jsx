import { Component } from 'react';
import * as ImageService from 'service/image-service';
import { SearchBar } from 'components/searchbar/searchbar';
import { ImageGallery } from 'components/imageGallery/imageGallery';
import { ImageGalleryItem } from 'components/imageGalleryItem/imageGalleryItem';
import { Button } from 'components/button/button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    totalImages: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      const data = await ImageService.getImage(query, page);
      console.log(data);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.data.hits],
          totalImages: data.data.total,
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

  incrementPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, totalImages } = this.state;

    const showButton = images.length !== totalImages;
    console.log(images.length);
    return (
      <div>
        <SearchBar onSubmit={this.getQuery} />
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {showButton && <Button onClick={this.incrementPage} />}
      </div>
    );
  }
}
