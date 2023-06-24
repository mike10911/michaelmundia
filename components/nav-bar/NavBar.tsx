"use client";
import React from "react";
import { colors } from "../../lib/colors";
import { H1, StyledLink } from "../../lib/typography";
import { buttonAnimations } from "./NavBar.animations";
import {
  StyledNavBarContainer,
  StyledNavBarItem,
  StyledNavBarList,
  StyledNavLink,
} from "./NavBar.styles";

import startup from "./startup.mp3";
import main from "./main.mp3";
import click from "./click.mp3";
import { useState, useEffect } from "react";
import { motion, useInView, useTransform } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import { Button, IconButton, Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleProjectClick = () => {
    setOpen(true);
  };

  const handleProjectClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    
  };

  const action = (
    <React.Fragment>
      
      <IconButton
        size="large"
        aria-label="close"
        color="inherit"
        onClick={handleProjectClose}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  );

  // const startupAudio = new Audio(startup);
  // const mainMenuAudio = new Audio(main);
  // const playAudio = () => {
  //   startupAudio.play();
  //   mainMenuAudio.loop = true;
  //   mainMenuAudio.play();
  // };

  // const clickAudio = new Audio(click);
  // const playAudioClick = () => {
  //   clickAudio.play();
  // };
  const [navBarVisible, setNavBarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setNavBarVisible(false);
      } else {
        setNavBarVisible(true);
      }
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
      animate={{ y: navBarVisible ? 0 : -100, opacity: navBarVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <StyledNavBarContainer 
      // animate="animate"
      >
      {/* onClick={playAudioClick} */}
        <StyledNavBarList>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <StyledNavBarItem>
              <StyledNavLink href="/#about">ABOUT</StyledNavLink>
            </StyledNavBarItem>
          </Link>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            <StyledNavBarItem>
              <StyledNavLink href="/#skills" >SKILLS</StyledNavLink>
            </StyledNavBarItem>
          </Link>
          <Link to="exp" smooth={true} duration={1000} offset={-70}>
            <StyledNavBarItem>
              <StyledNavLink href="/#exp">EXPERIENCE</StyledNavLink>
            </StyledNavBarItem>
          </Link>
          <Link to="design" smooth={true} duration={500} offset={-70}>
            <StyledNavBarItem>
              <StyledNavLink href="#">DESIGN</StyledNavLink>
            </StyledNavBarItem>
          </Link>
          <li>
          {/* onClick={playAudio} */}
            <StyledNavLink  href="#">
              <H1
                onClick={scrollToTop}
                whileHover="hover"
                whileTap="tap"
                variants={buttonAnimations}
              >
                M
              </H1>
            </StyledNavLink>
          </li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <StyledNavBarItem>
              <StyledNavLink onClick={handleProjectClick}>PROJECTS</StyledNavLink>
              <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleProjectClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        message="Coming Soon!"
        action={action}
        color="success"
        
      />
            </StyledNavBarItem>
          </Link>
          
            <StyledNavBarItem>
              <StyledNavLink href="https://mikemundia.wordpress.com/" target="blank">PHOTO</StyledNavLink>
            </StyledNavBarItem>
     
          <StyledNavBarItem>
            <StyledNavLink onClick={handleProjectClick}>THEATRE</StyledNavLink>
          </StyledNavBarItem>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <StyledNavBarItem>
              <StyledNavLink href="/#contact">CONTACT</StyledNavLink>
            </StyledNavBarItem>
          </Link>
        </StyledNavBarList>
      </StyledNavBarContainer>
    </motion.nav>
  );
};

export default NavBar;
