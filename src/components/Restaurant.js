import React from 'react';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';


const Restaurant = (props) => {
  const {name, image, description, online} = props.restaurant;
  return (
    <article className="restaurant">
      <div className="img-container">
        <img src={image} alt="single restaurant" />
      </div>
      <div className="info-container">
        <div className='text-container'>
          <p className="res-name">{name}</p>
          <p className='description'>{description}</p>
        </div>
        <div className='order-i'>
          {online ? (
            <div className='checkOnline'>
              <p className='green'>Online</p>
              <i className="fa fa-circle on" aria-hidden="true"></i>
            </div>
            ):(
              <div className='checkOnline'>
                <p className='red'>Offline</p>
                <i className="fa fa-circle off" aria-hidden="true"></i>
              </div>
            )
          }
        </div>

      </div >
    </article>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  }),
};
export default Restaurant;
