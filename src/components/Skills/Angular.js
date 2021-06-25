import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

function AngProg(props) {
    return (
        <>
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
                                width="60" height="60"
                                viewBox="0 0 50 50"
                                stroke="red"
                                fill="#750000"
                            ><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 8 }} d="M 24.929688 2.0019531 C 24.819813 2.0024531 24.709016 2.0206406 24.603516 2.0566406 L 3.671875 9.3417969 C 3.227875 9.4957969 2.9498125 9.93925 3.0078125 10.40625 L 6.3164062 37.529297 C 6.3554062 37.850297 6.5450781 38.133109 6.8300781 38.287109 L 24.478516 47.878906 C 24.626516 47.959906 24.791078 48 24.955078 48 C 25.120078 48 25.286547 47.958953 25.435547 47.876953 L 43.173828 38.154297 C 43.455828 37.999297 43.647547 37.717438 43.685547 37.398438 L 46.992188 10.277344 C 47.050187 9.8083437 46.769312 9.3609844 46.320312 9.2089844 L 25.253906 2.0527344 C 25.148906 2.0177344 25.039562 2.0014531 24.929688 2.0019531 z M 25 7 L 38 35 L 33.5625 35 L 30.78125 29.007812 L 19.21875 29.007812 L 16.4375 35 L 12 35 L 25 7 z M 25 16.5 L 21.080078 25 L 28.919922 25 L 25 16.5 z"></motion.path></svg>
                            <div>Angular</div>
                        </div>
                        <div>
                            <Typography variant="subtitle1" component="div" color="inherit">{`${Math.round(
                                props.value,
                            )}%`}</Typography>
                        </div>
                    </>

                </Box>
            </Box>
        </>
    );
}

AngProg.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function AngBar(props) {

    const [prog, setProg] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setProg((prevProg) => (prevProg >= 80 ? 80 : prevProg + 1));
        }, 80);
    }, []);

    return (
        <AngProg value={prog} thickness={1.75} size={150} style={{ padding: "0 20px" }} />
    )
}