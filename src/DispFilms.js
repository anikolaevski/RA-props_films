import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export class DispFilms extends React.Component {
  static propTypes = {
    films: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.films = props.films.map( film => ({id: shortid.generate(), value: film }));
  }
  render () {
    // console.log(this.films);
    return (
      <div className='movie-info'>
        <h2>My Super Puper Movie Rating</h2>
        <ul>
          {this.films.map( o => <ShowMovieInformation key={o.id} film={o.value} />)}
        </ul>
      </div>
    );
  }
}

class ShowMovieInformation extends React.Component {
  static propTypes = {
    film: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.name = props.film.name;
    this.stars = parseInt(props.film.stars, 10);
  }
  render() {
    if (this.stars >= 1 && this.stars <= 5) {
      return ( 
        <li>{this.name} 
          <Stars count={this.stars} />
        </li>
      );
    } else {
      /* eslint-disable-next-line no-undef */
      console.log(`Movie "${this.name}" has rating "${this.stars}" which is out of range`);
      return ('');
    }
  }
}

function Stars(prop) {
  const {count} = prop;
  let ret = [];
  for (let k = 0; k < count; k++) { 
    ret.push(
      <span key={shortid.generate()}>
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
          <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
      </span>
    );
  }
  // console.log(ret);
  return (ret);
}
