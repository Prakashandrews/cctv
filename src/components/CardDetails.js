import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import whatsapp from '../images/whatsapp.png';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        color: '#9d9d9d',
    },
    priceColor: {
        color: '#498404'
    },
    imgTag: {
        paddingTop: 10, 
    }
});
export default function CardDetails({ name, desc, price, imgTag }) {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
                Xtreamer Technology
                </Typography>
            <Typography variant="h6" component="h2" align="left">
                {name || ''}
            </Typography>
            <Typography variant="h5" className={classes.imgTag}  component="h2" align="left">
                {imgTag}
            </Typography>
            <Typography className={classes.pos} variant="body2" color="textSecondary" align="left">
                {desc || ''}
            </Typography>
            <Typography variant="body1" align="left" className={classes.priceColor}>
                ₹ {price || 'Not Available'}
            </Typography>

            <CardActions>
                
                    <img alt="Suresh" src={whatsapp} height="50px" width="50px" /> <a href="https://wa.me/+918124031111?product=test">Whatsapp Me</a>
                
            </CardActions>
        </>

    )
} 