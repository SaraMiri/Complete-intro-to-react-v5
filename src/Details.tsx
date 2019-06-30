import React, { lazy } from "react";
import pf, { PetMedia } from "petfinder-client";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { RouteComponentProps, navigate } from "@reach/router";

const Modal = lazy(() => import("./Modal"));

if (!process.env.API_KEY || !process.env.API_SECRET) {
  throw new Error("No API keys available. What's wrong with you?");
}
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

interface IProps {
  id: string;
}

class Details extends React.Component<RouteComponentProps<IProps>> {
  public state = {
    loading: true,
    showModal: false,
    name: "",
    animal: "",
    location: "",
    description: "",
    media: {} as PetMedia,
    breed: ""
  };
  public componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        this.setState({
          name: data.petfinder.pet.name,
          animal: data.petfinder.pet.animal,
          location: `${data.petfinder.pet.contact.city}, ${data.petfinder.pet.contact.state}`,
          description: data.petfinder.pet.description,
          media: data.petfinder.pet.media,
          breed: data.petfinder.pet.breeds.breed,
          loading: false
        });
      });
  }
  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });
  public render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {theme => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
        {showModal ? null : (
          <Modal>
            <div>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props: IProps) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
