/* eslint-disable max-len */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import dataRes from '../restaurants.json';

const MediaContext = React.createContext([{}, () => {}]);

const MediaProvider = (props) => {
  const [media, setMedia] = useState(dataRes.restaurants);
  return (
    <MediaContext.Provider value={[media, setMedia]}>
      {props.children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  children: PropTypes.node,
};

export {MediaContext, MediaProvider};
