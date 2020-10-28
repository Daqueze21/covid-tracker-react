import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.scss';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {

   if (!confirmed) {
      return 'Loading...';
   };
   
   const date = new Date(lastUpdate).toDateString();

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
                  end={confirmed.value}
                  duration={4}
                  separator=' '
                  />
               </Typography>
               <Typography color='textSecondary'>{date}</Typography>
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
                  end={recovered.value}
                  duration={4}
                  separator=' '
                  />
               </Typography>
               <Typography color='textSecondary'>{date}</Typography>
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
                  end={deaths.value}
                  duration={4}
                  separator=' '
                  />
               </Typography>
               <Typography color='textSecondary'>{date}</Typography>
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
