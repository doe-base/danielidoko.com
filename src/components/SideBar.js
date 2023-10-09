import React from "react"
import { makeStyles } from "@mui/styles"
import Nav from "./Nav"
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const useStyles = makeStyles((theme)=>{
    return {
        sidebar: {
            width: "25% !important",
            height: "100vh !important",
            borderRight: "1px solid rgb(230, 230, 230)",
            paddingTop: "3em",
            paddingBottom: "30px",
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: ({ DarkMode })=>{
                if(DarkMode){
                    return "#181818"
                }else{
                    return "#fff"
                }
            },
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },

        bioText: {
            display: "block",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "1.05",
            marginBottom: "1.677rem",
            letterSpacing: '0.5px',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#bbbbbb"
                }else{
                    return "#686868"
                }
            }
        },
        label: {
            fontSize: '1.163rem',
            fontWeight: "600",
            fontFamily: 'Lora',
            marginBottom: '1rem !important',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
        },
        inputHolder: {
            position: 'relative',
            marginTop: "0.8rem",
            marginBottom: "2rem"
        },
        input: {
            width: "100%",
            height: "52px !important",
            padding: "1rem",
            paddingRight: "3rem",
            fontFamily: "inherit",
            fontSize: "1rem",
            border:  "1px solid rgb(30, 175, 237)",
            backgroundColor: ({ DarkMode })=>{
                if(!DarkMode){
                    return "#fff"
                }else{
                    return "rgb(24, 24, 24)"
                }
            },
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
        },
        sendIcon: {
            position: "absolute",
            top: "34%",
            right: "1.2rem",
            color: "gray"
        },
        copyright: {
            fontSize: "1.019rem",
            lineHeight: "1.4",
            letterSpacing: "0.5px",
            fontWeight: "400",
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#bbbbbb"
                }else{
                    return "#686868"
                }
            },
        },
        lightSwitch:{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            border: '1px solid',
            cursor: 'pointer',
            borderColor: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
            position: 'absolute', top: '1rem', right: '1rem',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
    }
})

export default function Sidebar({ DarkMode, toggleMode }){

    const classes = useStyles({ DarkMode })

    return(
        <aside className={classes.sidebar}>

            <div className={classes.lightSwitch} onClick={toggleMode}><TipsAndUpdatesIcon style={{fontSize: '1.1rem'}}/></div>

            <Nav DarkMode={DarkMode}/>

            <div className={classes.downEl}>

                {/* <div className={classes.nameLogo}>
                    <a href="#" className="namelogoLink" style={{backgroundImage: "url(/img/bg11.jpg"}}>Bahd <br /> Since <span>'O2</span></a>
                </div> */}
                <div>
                    <p className={classes.bioText}>Hey, I'm <a href="/about" className="namelogoLink" style={{backgroundImage: "url(/img/bg11.jpg"}}>Daniel Idoko</a>. <br/> I'm a Software Developer in Abuja Nigeria. Welcome to my website where I post blogs about topic that intrest me and share source code to my project. </p>
                </div>

                <form action="#">
                    <label htmlFor="email" className={classes.label}>Subscribe for newsletter</label>
                    <div className={classes.inputHolder}>
                        <input type="email" name="email" placeholder="Enter Your Email" className={classes.input}/>
                        <div className={classes.sendIcon}>
                            <i className="fa fa-paper-plane"></i>
                        </div>
                    </div>
                </form>

                {/* <p className={classes.copyright}>Copyright ©2022 All rights reserved | This template was made by IDG</p> */}
            </div>

        </aside>
    )
}