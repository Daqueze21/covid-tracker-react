import React from 'react';
import styles from './App.module.scss';
import Cards from './components/Cards/Cards'
import logo from './images/image.png';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={logo} className={styles.image} alt='COVID-19' />
        <Cards data = {data} />
        {/* selectcountry */}
        {/* chart */}
      </div>
    );
  }
}

export default App;
