import * as CS from '../colorSystem/colorSystem';

export const beOrNotBeStyles ={
    container:{
        backgroundColor: CS.orange,
    },
    whiteType:{
        color:CS.white
    },
    orangeType:{
        color: CS.orange,
        fontWeight: 'bold',
    },
    darkOrangeType:{
        color: CS.darkOrange,
        fontWeight: '700'
    },
    geometrias:{
        height:250,  
    },
    secondaryContainer:{
        backgroundColor: CS.white
    },
    blueType:{
        color: CS.lightBlue
    },
    '@keyframes scale': {
        '0%': { transform: 'scale(0.95)' },
        '50%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0.95)' },
    },
    paperHeight:{
        height:'100%',
        animation:'$scale 2.5s infinite'
    },

}