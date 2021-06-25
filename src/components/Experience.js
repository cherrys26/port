import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import "./Styles.css";
import FadeInWhenVisible from './FadeIn/Fade';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{ marginLeft: "30%" }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({

    info: {
        color: "white",
        backgroundColor: "black",
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing(1),
    },
    spacing: {
        padding: "10px 0"
    },
    listSpacing: {
        padding: "2px 0",
        maxWidth: "60%"
    },
    root: {
        flexGrow: 1,
        marginTop: "150px"
    },
    tabs: {
        height: "200px",
        width: "200px",
    },
    tab: {
        paddingTop: "20px",
        paddingBottom: "50px",
    }
}));

export default function Experience() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const EduTitle = <><h2>Education</h2><div className={classes.spacing}>Sept 2017 - Dec 2020</div></>
    const DepotTitle = <><h2>Home Depot</h2><div className={classes.spacing}>Nov 2017 - Present</div></>
    const McdsTitle = <><h2>McDonalds</h2><div className={classes.spacing}>Feb 2016 - Aug 2017</div></>

    return (
        <div>
            <FadeInWhenVisible>
                <div className={classes.root}>
                    <h2 style={{ textAlign: "center", padding: "50px 0" }}>Past Work / Education</h2>
                    <Tabs value={value} onChange={handleChange} centered >
                        <Tab label={DepotTitle} {...a11yProps(0)} className={classes.tabs} />
                        <Tab label={McdsTitle} {...a11yProps(1)} className={classes.tabs} />
                        <Tab label={EduTitle} {...a11yProps(2)} className={classes.tabs} />
                    </Tabs>
                    <TabPanel value={value} index={0} className={classes.tab}>
                        <div>
                            <div className={classes.spacing}><i>Sales Associate </i> </div>
                            <ul >
                                <li className={classes.listSpacing}>Tool rental associate.</li>
                                <li className={classes.listSpacing}>Trained in several departments, available to work wherever needed.</li>
                                <li className={classes.listSpacing}>Taught and trained new associates departmental standards and procedures.</li>
                                <li className={classes.listSpacing}>Took charge to help coworkers while finishing tasks given to me.</li>
                                <li className={classes.listSpacing}>Given the responsibility to run the department on my own or with a team. </li>
                            </ul>

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} className={classes.tab}>
                        <div>
                            <div className={classes.spacing}><i>Crew Member </i>  </div>

                            <ul>
                                <li className={classes.listSpacing}>Model employee that was given the privilege of learning both kitchen and store facing responsibilities.</li>
                                <li className={classes.listSpacing}>Worked together with crew managers to keep workflow very efficient.</li>
                                <li className={classes.listSpacing}>Cooked food and maintained high quality of service for guests.</li>
                                <li className={classes.listSpacing}>Helped and initiated new employees and taught departmental procedures.</li>
                                <li className={classes.listSpacing}>Worked with guests to provide the best experience.</li>
                                <li className={classes.listSpacing}>Employee of the month: May 2017</li>
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} className={classes.tab}>
                        <div>
                            <div className={classes.spacing}>Sheridan College - <i>Business Administration Accounting</i> </div>

                            <ul>
                                <li className={classes.listSpacing}>
                                    Advanced Diploma in Business Administration Accounting
                                </li>
                            </ul>
                        </div>
                    </TabPanel>
                </div>
            </FadeInWhenVisible>
        </div>
    );
}
