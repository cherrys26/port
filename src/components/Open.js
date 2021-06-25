import React from 'react';
import { motion } from 'framer-motion';
import Grid from '@material-ui/core/Grid';
import Twitter from '@material-ui/icons/Twitter'
import Facebook from '@material-ui/icons/Facebook'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Instagram from '@material-ui/icons/Instagram'
import './Styles.css'
const nameVariants = {
    hidden: {
        fontSize: "60px",
        y: "-11em",
        height: "50vh",
    },
    visible: {
        fontSize: "20px",
        y: 0,
        x: "-28%",
        height: "0px",
        transition: {
            delay: 2,
            duration: 3
        },

    }
}
const greetVariants = {
    hidden: {
        opacity: 0,
        x: "-60%",
        height: "0px",
    },
    visible: {
        fontSize: "20px",
        transition: {
            delay: 4,
            duration: 2
        },
        height: "0px",
        opacity: 1,
        x: "-38%",
        y: "13px"

    }
}
const sectionVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 6.5,
            staggerChildren: 2,
        }
    }
}
const staggered = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}
const stag = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

export default function PageOpen() {
    return (
        <>
            <motion.div id="open-section">
                <motion.div variants={greetVariants}
                    initial="hidden"
                    animate="visible" >
                    <motion.h4 style={{ margin: 0, paddingTop: "14em" }}>Hi, I'm</motion.h4>
                </motion.div>
                <motion.div
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={staggered} style={{ margin: 0, paddingTop: "8em" }}>Steve Chirayath</motion.h1>
                </motion.div>
                <motion.div variants={greetVariants}
                    initial="hidden"
                    animate="visible" >
                    <motion.h4 style={{ margin: 0, paddingTop: "18em", marginLeft: "20%" }}>Junior Front End Developer <br /> UI/UX Designer</motion.h4>
                </motion.div>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate="visible">
                    <Grid container style={{ margin: "150px 0" }}>
                        <Grid item xs={4}>
                            <div></div>
                        </Grid>
                        <Grid item sm={4}>
                            <motion.h5 variants={stag}>
                                <img src={process.env.PUBLIC_URL + '/image.jpeg'} alt="myself" style={{ height: "400px", borderRadius: "5px" }} />
                            </motion.h5>
                        </Grid>
                        <Grid item sm={4}>
                            <motion.h5 variants={stag}>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <a href="https://twitter.com/_cherrys26" target="_blank" rel="noreferrer" className="socials">
                                            <Twitter />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a href="https://www.facebook.com/steve.chirayath" target="_blank" rel="noreferrer" className="socials">
                                            <Facebook />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a href="https://www.instagram.com/cherrys_26/" target="_blank" rel="noreferrer" className="socials">
                                            <Instagram />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a href="https://www.linkedin.com/in/steve-chirayath/" target="_blank" rel="noreferrer" className="socials">
                                            <LinkedIn />
                                        </a>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <a href="https://github.com/cherrys26" target="_blank" rel="noreferrer" className="socials">
                                            <GitHub />
                                        </a>
                                    </Grid>
                                </Grid>
                            </motion.h5>
                        </Grid>
                    </Grid>
                </motion.div>
            </motion.div>
        </>
    )
}