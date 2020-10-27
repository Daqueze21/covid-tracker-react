import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.scss';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = () => {

   return (
      <div className={styles.container}>
         <Grid container spacing={3} justify='center'>
            <Grid
               item
               component={Card}
               xs={12}
               md={3}
               className={cx(styles.card, styles.infected)}>
               <CardContent>
                  <Typography color='textSecondary' gutterBottom>
                  Infected
                  </Typography>
                  <Typography varaint='h5'>
                  <CountUp
                     start={0}
                     end={10000000}
                     duration={4}
                     separator=' '
                  />
                  </Typography>
                  <Typography color='textSecondary'>Date</Typography>
                  <Typography varaint='body2'>
                  Number of active cases of COVID-19
                  </Typography>
               </CardContent>
            </Grid>

            <Grid
               item
               component={Card}
               xs={12}
               md={3}
               className={cx(styles.card, styles.recovered)}>
               <CardContent>
                  <Typography color='textSecondary' gutterBottom>
                  Recovered
                  </Typography>
                  <Typography varaint='h5'>
                  <CountUp
                     start={0}
                     end={1000000}
                     duration={4}
                     separator=' '
                  />
                  </Typography>
                  <Typography color='textSecondary'>date</Typography>
                  <Typography varaint='body2'>
                  Number of recoveries from COVID-19
                  </Typography>
               </CardContent>
            </Grid>

            <Grid
               item
               component={Card}
               xs={12}
               md={3}
               className={cx(styles.card, styles.deaths)}>
               <CardContent>
                  <Typography color='textSecondary' gutterBottom>
                  Deaths
                  </Typography>
                  <Typography varaint='h5'>
                  <CountUp
                     start={0}
                     end={10000000}
                     duration={4}
                     separator=' '
                  />
                  </Typography>
                  <Typography color='textSecondary'>date</Typography>
                  <Typography varaint='body2'>
                  Number of deaths caused by COVID-19
                  </Typography>
               </CardContent>
            </Grid>
         </Grid>
      </div>
   );
};

export default Cards;
