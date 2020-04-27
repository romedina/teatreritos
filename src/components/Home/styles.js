import pattern from '../../assets/pattern-somos.svg';
import * as CS from '../../styles/colorSystem/colorSystem';

const homeStyles = {
    back:{
        backgroundColor:CS.darkBlue,
        width: '100%',
        height:'100vh',
        '@media (max-width: 700px)':{
            height:'500px',
        }
    },
    pattern:{
        backgroundSize:300,
        backgroundPosition:'center',
        backgroundImage: `url(${pattern})`,
        width: '100%',
        height:'100vh',
        position:'relative',
        overflow:'hidden',
        '@media (max-width: 700px)':{
            height:'500px',
        }

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
        animation:'$showBegins 2.5s',
        left: 0,
        right: 0,
        margin: 'auto',
    },
    floorImg:{
        width:'100%',
        '@media (max-width: 700px)': {
            height: '250px',
            objectFit: 'cover',
        }
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
        height:'350px',
        '@media (max-width: 700px)':{
            height:'220px',
        }
    },
    boy:{
        position:'absolute',
        overflow:'hidden',
        bottom:-10,
        animation:'$spinsBoy 1.5s infinite',
        right: '51%',
        '@media (max-width: 700px)': {
            right: '45%'
        },
        '@media (max-width: 400px)':{
            bottom: 20,
            right: '42%'
        },
    },
    '@keyframes spinsGirl': {
        '0%': { transform: 'rotate(10deg)' },
        '50%': { transform: 'rotate(-10deg)' },
        '100%': { transform: 'rotate(10deg)' },
    },
    girlImg:{
        height:'350px',
        '@media (max-width: 700px)':{
            height:'220px',
        }
    },
    girl:{
        position:'absolute',
        overflow:'hidden',
        bottom:-10,
        animation:'$spinsGirl 1.5s infinite',
        left: '51%',
        '@media (max-width: 700px)': {
            left: '45%'
        },
        '@media (max-width: 400px)':{
            bottom: 20,
            left: '42%'
        }
    },
    leftImg:{
        height: '100vh',
    },
    left:{
        position:'absolute',
        top:0,
        height: '100vh',
        overflow:'hidden',
        '@media (max-width:700px)': {display: 'none'}
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
        left:'0',
        right: '0',
        overflow:'hidden',
        margin: 'auto',
        maxWidth: '80%',
        '@media (max-width:700px)': {
            top: 35
        }
    },
    rightImg:{
        height: '100vh',
    },
    right:{
        position:'absolute',
        top:0,
        right:-1,
        height: '100vh',
        overflow:'hidden',
        '@media (max-width:700px)': {display: 'none'}
    }
}

export default homeStyles
