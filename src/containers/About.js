import React from "react";
import { Grid } from "@mui/material";
import useStyles from "../styles/about";

export default function  AboutContainer(){
    const classes = useStyles();
    return(
        <Grid container className={classes.root}>
            <Grid item lg={6.5} className={classes.test2}></Grid>

            <Grid item lg={5.5} className={classes.test}>
                <p className={classes.theParagraph}>Hi 👋, I'm <span className={classes.importantText}>Daniel Idoko</span> and I'm a <span className={classes.importantText}>software development</span> living in Abuja, Nigeria. <br/>Welcome to my website where I post blogs and tutorials about topics of intrest to me, share source codes to my projects and offer free guidiance and methorship to new software developers.</p>
                <p className={classes.theParagraph}>I currently work as a <span className={classes.importantText}>freelance web developer</span>. So if you gat work for me, have a question about something or just want to hala at me, drop me a mail at <span className={classes.importantText}>info.idoko@gmail.com</span></p>
                <p className={classes.theParagraph}>Even though I studied chemistry as my first degree, I had a special passion for programming that lead me to taken various online courses, building numerous projects and establishing myself as a <span className={classes.importantText}>self though programmer</span>.<br />When I'm not coding am either reading a book or viding to afro music</p>
                <p className={classes.theParagraph}>This website is <span className={classes.importantText}>100% ads free</span> because the motivation for this site is to share what I've learned with the world and hopefully connect with a few people.</p>
            </Grid>
        </Grid>
    )
}