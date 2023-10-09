import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Highlight from 'react-highlight'
import useStyles from "../styles/singleblog";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';



export default function SingleBlogContainer({ item, DarkMode }) {

    const {number, body, title} = item
    
    

  const classes = useStyles({ DarkMode });
  return (
    <main className={classes.root}>
      <Grid container>
        <Grid item lg={12} className={classes.test2}>
            
            <div className={classes.titleSection}>

              <div className={classes.infosHolder}>

                <div className={classes.infoCard}>
                  <CalendarMonthIcon className={classes.icon}/>
                  <div> <p>15 May, 2020</p> </div>
                </div>

                <div className={classes.infoCard}>
                  <FolderOpenIcon className={classes.icon}/>
                  <div> <p>Javascript</p> </div>
                </div>

                <div className={classes.infoCard}>
                  <AccessAlarmIcon className={classes.icon}/>
                  <div> <p>15 mins</p> </div>
                </div>

              </div>


              <div>
                <h1 className={classes.Blogtitle}>{title}</h1>
              </div>
            </div>

            <div className="Container" dangerouslySetInnerHTML={{__html: body}}></div>

        </Grid>
      </Grid>
    </main>
  );
}
