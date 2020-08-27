import Link from '@material-ui/core/Link';
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
    },
    order: {
        verticalAlign: 'super'
    },
    ProductTitle: {
        color: '#3c3b76'
    },
    lineThrough: {
        textDecoration: 'line-through'
    }
});
export default function CardDetails({ name, desc, price, imgTag }) {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.title} color="textSecondary" align="left" gutterBottom>
                Xtreamer Technology
                </Typography>
            <Typography variant="h6" className={classes.ProductTitle}  align="left">
                {name || ''}
            </Typography>
            <Typography variant="h5" className={classes.imgTag}  align="left">
                {imgTag}
            </Typography>
            <Typography className={classes.pos} variant="body2" color="textSecondary" align="left">
                {desc || ''}
            </Typography>
            <Typography variant="h6" align="left" className={classes.priceColor}>
                ₹ {price || 'Not Available'} 
            </Typography>

            <Typography variant="body3" color="textSecondary" align="left" className={classes.lineThrough}>
                ₹ {price + 200 || ''} 
            </Typography>

            <Typography variant="body1" className={classes.imgTag} component="h2" align="left">
                <img alt="Suresh" src={whatsapp} height="30px" width="30px" />
                <Link href="https://wa.me/+918124031111?product=test" className={classes.order} >Order Now</Link>
            </Typography>
        </>
    )
} 