import React from "react";
import { Grid } from "@mui/material";
import Form from "../components/Form"
import useStyles from "../styles/needhelp";


export default function NeedHelpContainer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item lg={8.2} className={classes.test2}>
       <Form />
      </Grid>

      <Grid item lg={3.8} className={classes.test}>
        <p className={classes.theParagraph}>send me a mail if:</p>
        <ul className={classes.theParagraph}>
          <li className={classes.li}>need help with web project or bug fixing</li>
          <li className={classes.li}>need advise or guaidiance pataining a development</li>
          <li className={classes.li}>any random question I might have answers to</li>
          <li className={classes.li}>you'd like to employ my services</li>
        </ul>
        <p className={classes.theParagraph}>I'll reply with six hours of reciver</p>
      </Grid>
    </Grid>
  );
}
