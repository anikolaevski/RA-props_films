import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export class DispFilms extends React.Component {
  static propTypes = {
    films: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
  }
  render () {
    const films = this.props.films.map( film => ({id: shortid.generate(), value: film }));
    return (
      <div className='movie-info'>
        <h2>My Super Puper Movie Rating</h2>
        <ul>
          {films.map( o => <ShowMovieInformation key={o.id} film={o.value} />)}
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
  }
  render() {
    const name = this.props.film.name;
    const stars = parseInt(this.props.film.stars, 10);
    if (stars >= 1 && stars <= 5) {
      return ( 
        <li>{name} 
          <Stars count={stars} />
        </li>
      );
    } else {
      /* eslint-disable-next-line no-undef */
      console.log(`Movie "${name}" has rating "${stars}" which is out of range`);
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
