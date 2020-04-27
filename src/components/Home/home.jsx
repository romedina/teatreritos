import React from 'react';
import { makeStyles } from '@material-ui/core';
import styles from './styles';
import top from '../../assets/closed.png';
import left from '../../assets/izquierda.png';
import right from '../../assets/derecha.png';
import floor from '../../assets/floor.png';
import boy from '../../assets/boy.png';
import girl from '../../assets/girl.png';
import logo from '../../assets/whiteLogo.png';

const useStyles = makeStyles(styles);

export const Home = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.back} id='home'>
        <div className={classes.pattern}>
          <div className={classes.floor}>
            <img className={classes.floorImg} src={`${floor}`} alt="telon izquiedo" />
          </div>
          <div className={classes.boy}>
            <img className={classes.boyImg} src={`${boy}`} alt="telon izquiedo" />
          </div>
          <div className={classes.girl}>
            <img className={classes.girlImg} src={`${girl}`} alt="telon izquiedo" />
          </div>
          <div className={classes.logo}>
            <img className={classes.logoImg} src={`${logo}`} alt="telon izquiedo" />
          </div>
          <div className={classes.top}>
            <img className={classes.topImg} src={`${top}`} alt="telon izquiedo" />
          </div>
          <div className={classes.left}>
            <img className={classes.leftImg} src={`${left}`} alt="telon izquiedo" />
          </div>
          <div className={classes.right}>
            <img className={classes.rightImg} src={`${right}`} alt="telon izquiedo" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}