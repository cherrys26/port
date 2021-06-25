import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./Styles.css";
import HtmlBar from './Skills/Html'
import CssBar from './Skills/Css'
import JsBar from "./Skills/Javescript";
import AngBar from "./Skills/Angular";
import ReactBar from "./Skills/React";
import NodeBar from "./Skills/Node";
import MonBar from "./Skills/Mongo";
import Grid from "@material-ui/core/Grid";

function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    const testing = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    }

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 2 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
        >
            <motion.div variants={testing}> {children} </motion.div>
        </motion.div>
    );
}

export default function Work(props) {

    return (
        <>
            <div className="container">
                <FadeInWhenVisible>
                    <h1 style={{ textAlign: "center", paddingBottom: "50px" }}>Skills</h1>
                    <Grid container>
                        <Grid item xs={6} sm={4} md={3} className="skill">
                            <HtmlBar />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} className="skill">
                            <CssBar />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} className="skill">
                            <JsBar />
                        </Grid>
                        <Grid item xs={6} sm={4} md={3} className="skill">
                            <ReactBar />
                        </Grid>
                        <Grid item xs={6} sm={4} md={4} className="skill">
                            <AngBar />
                        </Grid>
                        <Grid item xs={6} sm={4} md={4} className="skill">
                            <NodeBar />
                        </Grid>
                        <Grid item xs={6} sm={4} md={4} className="skill">
                            <MonBar />
                        </Grid>
                    </Grid>
                </FadeInWhenVisible>
            </div>
        </>
    );
}

