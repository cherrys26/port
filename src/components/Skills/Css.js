import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function CssProg(props) {
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
                            viewBox="0 0 30 30"
                            stroke="#2E2EFF"
                            fill="#0000D1"
                        >    <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8 }} d="M25.428,3.333C25.238,3.121,24.967,3,24.683,3H5.317C5.033,3,4.762,3.121,4.572,3.333c-0.19,0.212-0.28,0.495-0.249,0.777 l2.202,19.823c0.044,0.403,0.329,0.74,0.719,0.851l7.48,2.137c0.09,0.026,0.183,0.039,0.275,0.039s0.185-0.013,0.275-0.039 l7.48-2.137c0.39-0.111,0.674-0.448,0.719-0.851L25.676,4.11C25.708,3.828,25.618,3.545,25.428,3.333z M20.516,13.074l-0.446,7.285 l-5.038,1.647l-5.038-1.647l-0.191-3.484h2.55l0.064,1.584l2.615,0.887l2.615-0.887l0.191-2.85h-5.612l-0.127-2.534h5.867 l0.191-2.534H9.356L9.165,8.006h11.67L20.516,13.074z"></motion.path></svg>
                        <div>CSS</div>
                    </div>
                    <div>
                        <Typography variant="subtitle1" component="div" color="inherit">{`${Math.round(
                            props.value,
                        )}%`}</Typography>
                    </div>
                </>
            </Box>
        </Box >
    );
}

CssProg.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function CssBar(props) {

    const [prog, setProg] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProg((prevProg) => (prevProg >= 90 ? 90 : prevProg + 1));
        }, 80);
    }, []);

    return (
        <CssProg value={prog} thickness={1.75} size={150} style={{ padding: "0 20px" }} />

    )
}