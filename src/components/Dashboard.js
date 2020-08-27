import React from "react";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import hoc from '../images/hoc.jpeg';
import cofe_1 from '../images/cofe_1.jpeg';
import cofe_2 from '../images/cofe_2.jpeg';
import mouse_1 from '../images/mouse_1.jpeg';
import Card from './CardDetails';
export default function Dashboard() {
    return (
        <Container maxWidth="lg" style={{ backgroundColor: 'rgb(240 241 243)', height: '100%', minHeight: '100%' }}>
            <Box component="span" m={1} color="info.main">
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start" spacing={3}>

                    <Grid item xs={3} sm={3} lg={3} md={3}>
                        <img src={hoc} alt="hoc" width="100%" height="200px" />
                    </Grid>
                    <Grid item xs={9} >
                        <Card name="DVD WIFI Receiver" desc="Connect your DVD with WIFI" price={1200}/>
                    </Grid>

                    <Grid item xs={3} sm={3} lg={3} md={3}>
                        <img src={cofe_1} alt="cofe_1" width="100%" height="200px" price={200}/>
                    </Grid>
                    <Grid item xs={9} >
                        <Card name="COFE 4G SIM ROUTER" desc="Check your camera view from mobile" price={100}/>
                    </Grid>

                    <Grid item xs={3} sm={3} lg={3} md={3}>
                        <img src={cofe_2} alt="cofe_2" width="100%" height="200px" />
                    </Grid>
                    <Grid item xs={9} >
                        <Card name="COFE 4G SIM ROUTER" desc="Check your camera view from mobile" price={800}/>
                    </Grid>


                    <Grid item xs={3} sm={3} lg={3} md={3}>
                        <img src={mouse_1} alt="mouse_1" width="100%" height="200px" />
                    </Grid>
                    <Grid item xs={9} >
                        <Card name="WIRELESS MOUSE" desc="Connect your Mouse to laptop with wireless"/>
                    </Grid>


                </Grid>
            </Box>
        </Container>
    )
}