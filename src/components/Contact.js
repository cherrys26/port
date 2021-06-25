import React, { useState } from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker
} from '@react-google-maps/api';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { motion } from "framer-motion";
import FadeInWhenVisible from './FadeIn/Fade';

import './Styles.css'

const mapContainerStyle = {
    width: '',
    height: '55vh',
    borderRadius: "5px"
};
const center = {
    lat: 43.72332946813944,
    lng: - 79.82586171681207
};



export default function Contact() {

    const [toastOpen, setToastOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setToastOpen(false);
    };

    function sendEmail(e) {
        e.preventDefault();
        setToastOpen(true)
        console.log("sent")

        emailjs.sendForm('stevechirayath@gmail.com', 'Portfolio_Template', e.target, 'user_z1mc5H4woTKhai9CqPTai')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <>
            <FadeInWhenVisible>
                <Grid container style={{ paddingTop: "50px" }}>

                    <Grid item md={5} >
                        <h1>Send Me an Email</h1>
                        <Card elevation={5} style={{ paddingBottom: "25px", backgroundColor: "transparent" }}>
                            <form onSubmit={sendEmail}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField required label="Name" name="name" style={{ width: "60%" }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField required label="Email" name="email" type="email" style={{ width: "60%" }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            label="Message"
                                            multiline
                                            rowsMax={5}
                                            name="message"
                                            style={{ width: "60%" }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <br />
                                        <Button type="submit" style={{ backgroundColor: "white" }}>Send Message</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                    <Grid item md={2}>
                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="30" height="30"
                                    viewBox="0 0 50 50"
                                    stroke="white"
                                ><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z">
                                    </motion.path>
                                </svg>
                                <span style={{ paddingLeft: "5px" }}>
                                    Brampton, ON
                                </span>
                            </Grid>
                            <br />
                            <Grid item xs={12}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="30" height="30"
                                    viewBox="0 0 50 50"
                                    stroke="white">
                                    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M 11.839844 2.988281 C 11.070313 2.925781 10.214844 3.148438 9.425781 3.703125 C 8.730469 4.1875 7.230469 5.378906 5.828125 6.726563 C 5.128906 7.398438 4.460938 8.097656 3.945313 8.785156 C 3.425781 9.472656 2.972656 10.101563 3 11.015625 C 3.027344 11.835938 3.109375 14.261719 4.855469 17.980469 C 6.601563 21.695313 9.988281 26.792969 16.59375 33.402344 C 23.203125 40.011719 28.300781 43.398438 32.015625 45.144531 C 35.730469 46.890625 38.160156 46.972656 38.980469 47 C 39.890625 47.027344 40.519531 46.574219 41.207031 46.054688 C 41.894531 45.535156 42.59375 44.871094 43.265625 44.171875 C 44.609375 42.769531 45.800781 41.269531 46.285156 40.574219 C 47.390625 39 47.207031 37.140625 45.976563 36.277344 C 45.203125 35.734375 38.089844 31 37.019531 30.34375 C 35.933594 29.679688 34.683594 29.980469 33.566406 30.570313 C 32.6875 31.035156 30.308594 32.398438 29.628906 32.789063 C 29.117188 32.464844 27.175781 31.171875 23 26.996094 C 18.820313 22.820313 17.53125 20.878906 17.207031 20.367188 C 17.597656 19.6875 18.957031 17.320313 19.425781 16.425781 C 20.011719 15.3125 20.339844 14.050781 19.640625 12.957031 C 19.347656 12.492188 18.015625 10.464844 16.671875 8.429688 C 15.324219 6.394531 14.046875 4.464844 13.714844 4.003906 L 13.714844 4 C 13.28125 3.402344 12.605469 3.050781 11.839844 2.988281 Z M 11.65625 5.03125 C 11.929688 5.066406 12.09375 5.175781 12.09375 5.175781 C 12.253906 5.398438 13.65625 7.5 15 9.53125 C 16.34375 11.566406 17.714844 13.652344 17.953125 14.03125 C 17.992188 14.089844 18.046875 14.753906 17.65625 15.492188 L 17.65625 15.496094 C 17.214844 16.335938 15.15625 19.933594 15.15625 19.933594 L 14.871094 20.4375 L 15.164063 20.9375 C 15.164063 20.9375 16.699219 23.527344 21.582031 28.410156 C 26.46875 33.292969 29.058594 34.832031 29.058594 34.832031 L 29.558594 35.125 L 30.0625 34.839844 C 30.0625 34.839844 33.652344 32.785156 34.5 32.339844 C 35.238281 31.953125 35.902344 32.003906 35.980469 32.050781 C 36.671875 32.476563 44.355469 37.582031 44.828125 37.914063 C 44.84375 37.925781 45.261719 38.558594 44.652344 39.425781 L 44.648438 39.425781 C 44.28125 39.953125 43.078125 41.480469 41.824219 42.785156 C 41.195313 43.4375 40.550781 44.046875 40.003906 44.457031 C 39.457031 44.867188 38.96875 44.996094 39.046875 45 C 38.195313 44.972656 36.316406 44.953125 32.867188 43.332031 C 29.417969 41.714844 24.496094 38.476563 18.007813 31.984375 C 11.523438 25.5 8.285156 20.578125 6.664063 17.125 C 5.046875 13.675781 5.027344 11.796875 5 10.949219 C 5.003906 11.027344 5.132813 10.535156 5.542969 9.988281 C 5.953125 9.441406 6.558594 8.792969 7.210938 8.164063 C 8.519531 6.910156 10.042969 5.707031 10.570313 5.339844 L 10.570313 5.34375 C 11.003906 5.039063 11.382813 5 11.65625 5.03125 Z">
                                    </motion.path>
                                </svg>
                                <span style={{ paddingLeft: "5px" }}>

                                    (647)784-0190
                                </span>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5} style={{ textAlign: "-webkit-center" }}>
                        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>
                            <Marker
                                position={{ lat: 43.72332946813944, lng: - 79.82586171681207 }} />
                        </GoogleMap>
                    </Grid>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={toastOpen}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Message Sent :)"
                        severity="success"
                        action={
                            <>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </>
                        }
                    />
                </Grid >
            </FadeInWhenVisible>
        </>
    )
}

