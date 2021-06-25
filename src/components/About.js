import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import emailjs from 'emailjs-com';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import Work from './Skills';
import FadeInWhenVisible from './FadeIn/Fade';
import Experience from './Experience'
import './Styles.css'
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: "black",
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4),
    },
    image: {
        height: "400px", borderRadius: "5px", background: "#121212",
        boxShadow: "-20px 20px 18px #070707, 8px -8px 24px #2f2f2f"
    }
}));

export default function About() {
    const classes = useStyles();
    const [toastOpen, setToastOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setToastOpen(false);
    };

    function sendEmail(e) {
        e.preventDefault();
        setToastOpen(true)
        console.log("sent")
        setOpen(false)
        emailjs.sendForm('stevechirayath@gmail.com', 'Portfolio_Template', e.target, 'user_z1mc5H4woTKhai9CqPTai')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const handleOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <FadeInWhenVisible>
                <Grid container>
                    <Grid item md={12} >
                        <h1 style={{ height: "100px" }}>About Me</h1>
                    </Grid>
                    <Grid item md={6} style={{ paddingRight: "100px", textAlign: "right" }}>
                        <img src={process.env.PUBLIC_URL + '/image.jpeg'} className={classes.image} alt="me" />
                    </Grid>
                    <Grid item md={6} style={{ paddingLeft: "60px", maxWidth: "380px", textAlign: "center" }} >
                        <h4>
                            Passionate up-and-coming front-end developer
                            that’s looking for an organization
                            that can make me the best.
                        </h4>
                        <Button variant="contained" color="primary" id="hire" onClick={handleOpen}>Hire me</Button>
                    </Grid>
                    <Modal open={open}
                        onClose={handleClose}
                        className={classes.modal}>
                        <div className={classes.paper}>
                            <h1 style={{ textAlign: "center" }}>Send Me an Email</h1>
                            <Card style={{ height: "400px", backgroundColor: "black" }}>
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
                        </div>
                    </Modal>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={toastOpen}
                        autoHideDuration={6000}
                        onClose={handleToastClose}
                        message="Message Sent :)"
                        severity="success"
                        action={
                            <>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleToastClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </>
                        }
                    />
                </Grid>
            </FadeInWhenVisible>
            <Experience />
            <Work />
        </div >
    )
}