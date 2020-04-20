import pattern from '../../assets/pattern-somos.svg';
import * as CS from '../colorSystem/colorSystem';


export const homeStyles = {
    back:{
        backgroundColor:CS.darkBlue,
        width: '100%',
        height:'100vh'
    },
    pattern:{
        backgroundSize:300,
        backgroundPosition:'center',
        backgroundImage: `url(${pattern})`,
        width: '100%',
        height:'100vh',
        position:'relative',
        overflow:'hidden',

    },
    '@keyframes showBegins': {
        '0%': { transform: 'translateY(700px)' },
        '100%': { transform: 'translateY(0px)' },
    },
    topImg:{
        height: 'auto',
    },
    top:{
        position:'absolute',
        overflow:'hidden',
        top:-700,
        animation:'$showBegins 2.5s' 
    },
    floorImg:{
        width:'100%',
    },
    floor:{
        position:'absolute',
        overflow:'hidden',
        bottom:-10
    },
    '@keyframes spinsBoy': {
        '0%': { transform: 'rotate(-10deg)' },
        '50%': { transform: 'rotate(10deg)' },
        '100%': { transform: 'rotate(-10deg)' },
    },
    boyImg:{
        height:'300px',
    },
    boy:{
        position:'absolute',
        overflow:'hidden',
        left: '20%',
        bottom:-10,
        animation:'$spinsBoy 1.5s infinite'
    },
    '@keyframes spinsGirl': {
        '0%': { transform: 'rotate(10deg)' },
        '50%': { transform: 'rotate(-10deg)' },
        '100%': { transform: 'rotate(10deg)' },
    },
    girlImg:{
        height:'300px',
    },
    girl:{
        position:'absolute',
        overflow:'hidden',
        left: '55%',
        bottom:-10,
        animation:'$spinsGirl 1.5s infinite'
    },
    leftImg:{
        height: '100vh',
    },
    left:{
        position:'absolute',
        top:0,
        height: '100vh',
        overflow:'hidden'
    },
    '@keyframes logoIntro': {
        '0%': { 
            transform: 'translateY(-30px)',
            opacity: 0 
        },
        '100%': { 
            transform: 'translateY(45px)',
            opacity: 1
        },
    },
    logo:{
        width:'20%'
    },
    logoImg:{
        
        animation:'$logoIntro 1s ease 1.6s',
        position:'absolute',
        animationFillMode: 'both',
        top:70,
        left:'35%',
        overflow:'hidden',
    },
    rightImg:{
        height: '100vh',
    },
    right:{
        position:'absolute',
        top:0,
        right:-1,
        height: '100vh',
        overflow:'hidden'
    }
}