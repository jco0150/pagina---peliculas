import React, { useState } from 'react';
import './MovieSection.css';

const MovieSection = ({ title, movies, id }) => {
  const [currentItem, setCurrentItem] = useState(4);

  const loadMore = () => {
    setCurrentItem(prev => prev + 4);
  };

  return (
    <section className="movies container">
      <h2>{title}</h2>
      <hr />
      <div className={`box-container-${id}`}>
        {movies.slice(0, currentItem).map((movie, index) => (
          <div className={`box-${id}`} key={index}>
            <div className="content">
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
      {currentItem < movies.length && (
        <div className="load-more" onClick={loadMore}>Cargar más</div>
      )}
    </section>
  );
};

export default MovieSection;
