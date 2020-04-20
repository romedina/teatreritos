import * as CS from '../colorSystem/colorSystem';
import pattern2 from '../../assets/pattern-somos.svg';

export const teatrerotesStyles = {
    mainContainer:{
        backgroundColor:CS.extraLightBlue,
    },
    blueContainer:{
        backgroundColor:CS.lightBlue,
    },
    whiteFont:{
        color:CS.white
    },
    darkBluefont:{
        color: CS.darkBlue,
        paddingBottom: '20px'
    },
    pattern:{
        backgroundSize:300,
        backgroundPosition:'center',
        backgroundImage: `url(${pattern2})`,
        width: '100%',
        height:'100vh',
        position:'relative',
        overflow:'hidden',

    },
}