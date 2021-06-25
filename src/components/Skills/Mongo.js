import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function MonProg(props) {
    return (

        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="80" height="80"
                            viewBox="0 0 48 48"
                        ><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8 }} stroke="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8 }} stroke="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 6 }} stroke="#dcedc8" d="M23 28H25V36H23z"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4 }} stroke="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></motion.path><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4 }} stroke="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></motion.path></svg>
                        <div>MongoDB</div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" component="div" color="inherit">{`${Math.round(
                            props.value,
                        )}%`}</Typography>
                    </div>
                </>
            </Box>
        </Box>
    );
}

MonProg.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function MonBar(props) {

    const [prog, setProg] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProg((prevProg) => (prevProg >= 50 ? 50 : prevProg + 1));
        }, 80);
    }, []);

    return (
        <MonProg value={prog} thickness={1.75} size={150} style={{ padding: "0 20px" }} />

    )
}