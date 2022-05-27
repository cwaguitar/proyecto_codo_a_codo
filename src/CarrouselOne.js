import React from 'react';


const CarrouselOne = ({id,homepage,img,title,overview}) => {


  return (

    <div className="row">
    <div className="col s04 m3">
      <div className="card">
        <div className="card-image">
          <img key={id} src={`https://image.tmdb.org/t/p/original/${img}`} alt={title}/>
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p>{overview}</p>
        </div>
        <div className="card-action">
          <a href="#">{homepage}</a>
        </div>
      </div>
    </div>
  </div>

  )
}

export default CarrouselOne;

/*<div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">{movie}</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>*/

