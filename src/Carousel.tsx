import React from "react";
import { PetMedia, PetPhoto } from "petfinder-client";

interface IProps {
  media: PetMedia;
}

class Carousel extends React.Component<IProps> {
  public state = {
    photos: [] as PetPhoto[],
    active: 0
  };
  public static getDerivedStateFromProps({ media }: { media: PetMedia }) {
    let photos: PetPhoto[] = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return { photos };
  }
  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };
  public render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              className={index === active ? "active" : " "}
              src={photo.value}
              key={photo.value}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
