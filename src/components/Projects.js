import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ProjectsService from '../services/Projects';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    imgBack: {
        position: 'relative',
        height: 250,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function Projects() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [itemSelected, setSelected] = useState([])

    const [projects, setProjects] = useState('')

    const projectsService = new ProjectsService();

    useEffect(() => {
        projectsService.getProjects().then(data => setProjects(data)); // eslint-disable-next-line
    }, []
    )

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 11
            }
        },
    }

    const handleOpen = (image) => {
        setOpen(true);
        const data = projects.filter((data) => data.id === image)
        setSelected(data)
        console.log(data)
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <AnimatePresence>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={classes.root}
            >

                {projects && projects.map((image) => (
                    <div style={{ width: "50%", padding: "10px 0", textAlign: "center" }} key={image.id}>
                        <ButtonBase
                            focusRipple
                            className={classes.imgBack}
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: "80%",
                            }}
                            onClick={() => handleOpen(image.id)}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${process.env.PUBLIC_URL + image.image})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    </div>
                ))}
                {itemSelected.map((image) => (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        className={classes.modal}
                        key={image.time}
                    >
                        <div className={classes.paper} >
                            <h2 style={{ color: "black" }}>{image.title}</h2>
                            <h4 style={{ color: "black" }}>{image.time}</h4>
                            <ul style={{ listStyle: "none", color: "black" }}>
                                <li>{image.description.one}</li>
                                <li>{image.description.two}</li>
                                <li>{image.description.three}</li>
                                <li>{image.description.four}</li>
                            </ul>
                            <span style={{ color: "black" }}><b>Technologies Used:</b> {image.technology}</span>
                        </div>

                    </Modal>
                ))}

            </motion.div>
        </AnimatePresence>
    );
}