import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {MediaContext} from '../contexts/MediaContext';
import Restaurant from './Restaurant';
import logo from '../logo.svg';


const ResFilter = () => {
  const [media, setMedia] = useContext(MediaContext);
  const [state, setState] = useState({
    resList: [],
    isAscending: true,
  });
  useEffect(() => {
    const resList = media;
    setState({
      isAscending: true,
      resList: resList,
    });
  }, []);
  const sortByName = () => {
    const {resList} = state;
    let newResList = resList;
    if (state.isAscending) {
      newResList = resList.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    setState({
      isAscending: !state.isAscending,
      resList: newResList,
    });
  };
  const toggleSortName = () => {
    sortByName();
  };
  const toggleListReverse = () => {
    const {resList} = state;
    let newResList = resList;
    if (!state.isAscending) {
      newResList = resList.sort((a, b) => a.name < b.name ? 1 : -1);
    }
    setState({
      isAscending: !state.isAscending,
      resList: newResList,
    });
  };
  const {resList} = state;
  return (
    <div className='main-container'>
      <div>
        <nav className='navbar'><img src={logo} alt="Beach Resort" /></nav>
      </div>
      <div className='filter-container'>
        <h1>Sort restaurants alphabetically</h1>
        <div className="btn-container">
          <button onClick={toggleSortName}><p>Ascending Order</p></button>
          <button onClick={toggleListReverse}><p>Descending Order</p></button>
        </div>
      </div>
      <section className="restaurantslist">
        <div className="restaurantslist-center">
          {resList.map((item, index) => {
            return <Restaurant key={index} restaurant={item} />;
          })}
        </div>
      </section>

      <footer>© Wolt 2014–2020</footer>

    </div>
  );
};

export default ResFilter;
