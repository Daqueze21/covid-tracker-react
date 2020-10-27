import React from 'react';
import styles from './App.module.scss';
import Cards from './components/Cards/Cards'
import logo from './images/image.png';

class App extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <img src={logo} className={styles.image} alt='COVID-19' />
        <Cards  />
        {/* selectcountry */}
        {/* chart */}
      </div>
    );
  }
}

export default App;
