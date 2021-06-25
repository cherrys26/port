import React, { useRef, useEffect, useState } from "react";
import Divider from '@material-ui/core/Divider';
import { motion } from 'framer-motion';
import "./Styles.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
        height,
        offsetTop,
        offsetBottom,
    };
};

const scrollTo = ele => {
    ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};

export default function ToolbarHeader() {
    const [visibleSection, setVisibleSection] = useState();

    const headerRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = [
        { section: "Projects", ref: projectsRef },
        { section: "About", ref: aboutRef },
        { section: "Contact", ref: contactRef },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const { height: headerHeight } = getDimensions(headerRef.current);
            const scrollPosition = window.scrollY + headerHeight; // eslint-disable-next-line
            const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current;
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele);
                    return scrollPosition > offsetTop && scrollPosition < offsetBottom;
                }
            });

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
                // console.log("section is in view")
            } else if (!selected && visibleSection) {
                setVisibleSection(undefined);
                // console.log("not in view")
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }; // eslint-disable-next-line
    }, [visibleSection]);

    const showToolbarVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 10,
                duration: 2
            }
        }
    }

    return (
        <div className="App">
            <div className="content">
                <div className="sticky"
                >
                    <motion.div className="header" ref={headerRef}
                        variants={showToolbarVariants}
                        initial="hidden"
                        animate="visible">

                        <button
                            type="button"
                            className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
                            onClick={() => {
                                scrollTo(projectsRef.current);
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.2 }}> Projects</motion.div>
                        </button>
                        <Divider orientation="vertical" flexItem />
                        <button
                            type="button"
                            className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
                            onClick={() => {
                                scrollTo(aboutRef.current);
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.2 }}> About</motion.div>
                        </button>
                        <Divider orientation="vertical" flexItem />
                        <button
                            type="button"
                            className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
                            onClick={() => {
                                scrollTo(contactRef.current);
                            }}
                        >
                            <motion.div whileHover={{ scale: 1.2 }}> Contact</motion.div>
                        </button>
                    </motion.div>
                </div>
                <div id="main">
                    <div className="section" ref={projectsRef} ><Projects /></div>
                    <div className="section" ref={aboutRef}><About /></div>
                    <div className="section" ref={contactRef} ><Contact /> </div>
                </div>
            </div>
        </div >
    );
}

