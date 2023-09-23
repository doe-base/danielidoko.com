import React from 'react'
import { makeStyles } from '@mui/styles'
import { Grid } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            display: "flex",
            width: "100%",
            marginBottom: "5rem !important"
        },
        cardImg: {
            display: "block",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundPosition: "center",
            backgroundSize: "cover",

            backgroundImage: ({img})=>{
                return `url(${img})`
            },
        },
        cardTitle: {
            fontFamily: "Lora, Arial, serif",
            fontWeight: "400",
            letterSpacing: "1px",
            lineHeight: "1.4",
            marginBottom: '1rem',
            transition: 'all 0.3s linear',
            color: ({DarkMode})=>{
                if(DarkMode){
                  return '#bbbbbb'
                }else{
                  return "#686868"
                }
              },
              
              "&:hover": {
                color: ({DarkMode})=>{
                  if(DarkMode){
                    return '#ffffff'
                  }else{
                    return "#000000"
                  }
                },
              }
        },
        cardTextarea: {
            textAlign: "left",
            paddingLeft: "1.5rem"
        },
        cardInfo: {
            display: "flex",
            alignItems: "center",
            paddingRight: "0.8rem",
            fontWeight: "550 !important",
            color: "#b1b1b1 !important"
        },
        cardInfoHolder: {
            display: "flex",
            alignItems: "center",
            marginBottom: '1rem'
        },
        cardInfoIcon: {
            paddingRight: "0.4rem",
            fontSize: "1.6rem !important",
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
  
  export default function Blogcard({DarkMode, img, title, smallbody, readduration, date, catergory, number }){
  
    const classes = useStyles({img, DarkMode})
    
    const createBlogUrl =(title, number)=>{
        title = title.replaceAll(" ", "-")
        const url = title + "-" + number
        console.log(url)
        return url
      }
      const blogUrl = createBlogUrl(title, number) 
  
    return (
        <Grid item xs={12} className={classes.card}>
            <Grid container>
                <Grid item lg={3}>
                    <div className={classes.cardImg}></div>
                </Grid>

                <Grid item lg={9} className={classes.cardTextarea}>
                    <a href={blogUrl}><h1 className={classes.cardTitle}>{title}</h1></a>
                    <div className={classes.cardInfoHolder}>
                        <div className={classes.cardInfo}><CalendarMonthIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>{date}</p></div>
                        <div className={classes.cardInfo}><FolderOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoTextJavascipt}>{catergory}</p></div>
                        <div className={classes.cardInfo}><TimerOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>{readduration} min read</p></div>
                    </div>
                    <p className={classes.cardP}>{smallbody}</p>
                    <a href={blogUrl} className={classes.cardLink}><p>Read More</p> <ChevronRightOutlinedIcon /></a>
                </Grid>
            </Grid>
        </Grid>
    )
}