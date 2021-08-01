import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <div>
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie__data">
            <h3 className="movie__title">{location.state.title}</h3>
            <h5 className="movie__year">{location.state.year}</h5>
            <ul className="movie__genres">
              {location.state.genres.map((genre, index) => (
                <li className="genres_genre" key={index}>
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return <span>hello</span>;
    }
  }
}
export default Detail;
