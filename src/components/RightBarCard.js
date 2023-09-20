import React from "react"
import { makeStyles } from '@mui/styles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { Grid } from '@mui/material'

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            display: "flex",
            marginBottom: "1.5rem !important",
            alignItems: "flex-start"
        },
        cardImgHolder: {
            width: "100%",
        },
        cardImg: {
            display: "block",
            height: "80px",
            width: "80px",
            borderRadius: "2px",
            background: "url(img/bg6.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
        },
        cardTitle: {
            fontSize: "1.020rem",
            fontFamily: "Lora, Arial, serif",
            fontWeight: "500",
            letterSpacing: "1px",
            lineHeight: "1.4",
            marginBottom: '0.5rem'
        },
        cardTextarea: {
            textAlign: "left",
            paddingLeft: "0.8rem !important" 
        },
        cardInfo: {
            display: "flex",
            alignItems: "center",
            paddingRight: "0.3rem",
            fontWeight: "550 !important",
            color: "#b1b1b1 !important",
            fontSize: "0.9rem",
            lineHeight: "1.5"
        },
        cardInfoHolder: {
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap'
        },
        cardInfoIcon: {
            paddingRight: "0.2rem",
            fontSize: "1rem !important",
        },
        cardInfoTextJavascipt: {
            color: "#afaf17bb !important",

        },
        cardP: {
            fontSize: "1rem",
            fontWeight: "500",
            letterSpacing: "0.8px",
            lineBreakMode: "1.4",
            lineHeight: "1.4",
            color: "#868686",
            marginBottom: "1.5rem"
        },
        cardLink: {
            color: "rgb(30, 175, 237) !important",
            display: "flex",
            alignItems: "center",
        }
    }
})
  

export default function RightbarCard(){
    const classes = useStyles() 

    return (
        <>
            <Grid container className={classes.card}>
                <Grid item lg={4} className={classes.cardImgHolder}>
                    <div className={classes.cardImg}></div>
                </Grid>
                <Grid item lg={8} className={classes.cardTextarea}>
                    <h1 className={classes.cardTitle}>All to know about TCP/IP</h1>
                    <div className={classes.cardInfoHolder}>
                        <div className={classes.cardInfo}><CalendarMonthIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>June 28, 2019</p></div>
                        <div className={classes.cardInfo}><FolderOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoTextJavascipt}>Javascript</p></div>
                        <div className={classes.cardInfo}><TimerOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>15</p></div>
                    </div>
                </Grid>
            </Grid>
            <Grid container className={classes.card}>
                <Grid item lg={4} className={classes.cardImgHolder}>
                    <div className={classes.cardImg}></div>
                </Grid>
                <Grid item lg={8} className={classes.cardTextarea}>
                    <h1 className={classes.cardTitle}>Can one really learn CSS</h1>
                    <div className={classes.cardInfoHolder}>
                        <div className={classes.cardInfo}><CalendarMonthIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>June 28, 2019</p></div>
                        <div className={classes.cardInfo}><FolderOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoTextJavascipt}>Javascript</p></div>
                        <div className={classes.cardInfo}><TimerOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>15</p></div>
                    </div>
                </Grid>
            </Grid>
            <Grid container className={classes.card}>
                <Grid item lg={4} className={classes.cardImgHolder}>
                    <div className={classes.cardImg}></div>
                </Grid>
                <Grid item lg={8} className={classes.cardTextarea}>
                    <h1 className={classes.cardTitle}>What is Internent protocols | 4 layers of protocol</h1>
                    <div className={classes.cardInfoHolder}>
                        <div className={classes.cardInfo}><CalendarMonthIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>June 28, 2019</p></div>
                        <div className={classes.cardInfo}><FolderOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoTextJavascipt}>Javascript</p></div>
                        <div className={classes.cardInfo}><TimerOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>15</p></div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}