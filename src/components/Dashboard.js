import React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import hoc from '../images/hoc.jpeg';
import cofe_1 from '../images/cofe_1.jpeg';
import cofe_2 from '../images/cofe_2.jpeg';
import mouse_1 from '../images/mouse_1.jpeg';
import CardDetails from './CardDetails';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

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
    },
});
export default function Dashboard() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" style={{ backgroundColor: 'rgb(240 241 243)', height: '100%', minHeight: '100%' }}>
            <Box component="span" m={1} color="info.main">
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start" spacing={3}>

                    <Grid item xs={12}>
                        <Card className={classes.root} variant="outlined">
                        <CardContent>                          
                            <CardDetails name="DVD WIFI Receiver" desc="Connect your DVD with WIFI" price={1200} imgTag={<img src={hoc} alt="hoc" height="200px" /> }/>
                        </CardContent>
                        </Card>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Card className={classes.root} variant="outlined">
                        <CardContent>                           
                            <CardDetails name="COFE 4G SIM ROUTER" desc="Check your camera view from mobile" price={100} imgTag={<img src={cofe_1} alt="hoc" height="200px" /> }/>
                        </CardContent>
                        </Card>
                    </Grid>
                    

                    <Grid item xs={12}>
                        <Card className={classes.root} variant="outlined">
                        <CardContent>                           
                            <CardDetails name="COFE 4G SIM ROUTER" desc="Check your camera view from mobile" price={800} imgTag={<img src={cofe_2} alt="hoc" height="200px" /> }/>
                        </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card className={classes.root} variant="outlined">
                        <CardContent>                           
                            <CardDetails name="WIRELESS MOUSE" desc="Connect your Mouse to laptop with wireless" imgTag={<img src={mouse_1} alt="hoc" height="200px" /> }/>
                        </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}