import React, {useState} from "react";
import { Grid } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import RightbarCard from "../components/RightBarCard";
import useStyles from "../styles/home";


export default function BlogRightBar({ DarkMode }) {
  const classes = useStyles({ DarkMode });
  const backgroundColor = `${DarkMode ? "rgba(248, 249, 250, 0.2)" : "rgb(248, 249, 250)"}`
 
  return (
      <Grid item lg={3.8} className={classes.test} style={{background: backgroundColor}}>

        {/* Search form start */}
        <section className={classes.section} style={{padding: "0 1.5rem"}}>
          <form action="#">
            <label htmlFor="email" className={classes.label}>
              <h5 className={classes.title}>Search your intentrest</h5>
            </label>
            <div className={classes.inputHolder}>
              <input
                type="email"
                name="email"
                placeholder="Type a keyword and hit enter"
                className={classes.input}
              />
              <div className={classes.sendIcon}>
                <SearchOutlinedIcon />
              </div>
            </div>
          </form>
        </section>
        {/* Search form end */}

        {/* Category section starts */}
        <section className={classes.section}>
          <h5 className={classes.title}>Category</h5>

          <div>
            <div href="" className={classes.categoryLink}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Guide</p>
              </span>
              <span className={classes.categoryLinkSpan}>(6)</span>
            </div>
            <div href="" className={classes.categoryLink}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Networking</p>
              </span>
              <span className={classes.categoryLinkSpan}>(4)</span>
            </div>
            <div href="" className={classes.categoryLink}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Javascript</p>
                <div className={classes.smallball} style={{backgroundColor: "#afaf17bb"}}></div>
              </span>
              <span className={classes.categoryLinkSpan}>(7)</span>
            </div>
            <div href="" className={classes.categoryLink}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Python</p>
                <div className={classes.smallball} style={{backgroundColor: "#113f85bb"}}></div>
              </span>
              <span className={classes.categoryLinkSpan}>(3)</span>
            </div>
            <div href="" className={classes.categoryLink}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Golang</p>
                <div className={classes.smallball} style={{backgroundColor: "#1ad1c8bb"}}></div>
              </span>
              <span className={classes.categoryLinkSpan}>(7)</span>
            </div>
          </div>
        </section>

        {/* Category section ends */}

        {/* Recent Post Section */}
          <section className={classes.section}>
            <h5 className={classes.title}>Popular Articles</h5>

            <div>
              <RightbarCard DarkMode={DarkMode}/>
            </div>

          </section>
        {/* Recent Post Section ENDS */}

        {/* Tag cloud BEGINS */}
        <section className={classes.section}>
          <h5 className={classes.title}>Tag Cloud</h5>

          <div className={classes.tagcloudHolder}>
            <div className={classes.tagCloud}>administration</div>
            <div className={classes.tagCloud}>web dev</div>
            <div className={classes.tagCloud}>backend</div>
            <div className={classes.tagCloud}>linux</div>
            <div className={classes.tagCloud}>arrays</div>
            <div className={classes.tagCloud}>node JS</div>
            <div className={classes.tagCloud}>css</div>
          </div>

        </section>
        {/* Tag cloud ENDS */}

        {/* Newsletter section BEGINS */}
        <section className={classes.newlettersection}>
          <div className={classes.newletter}>
            <div className={classes.overlay}>
              <h5 className={classes.title} style={{color: "#fff"}}>Newsletter</h5>

              <p className={classes.newsletterText} style={{color: "#fff"}}>Please subscribe to our news letter to get posted whenever we post a new aricle</p>

              <form action="#" className={classes.newsletterForm}>
                <input type="text" name="email" placeholder="Email Address" className={classes.newsletterInput}/>
                <button className={classes.newsletterButton}>Subscribe</button>
              </form>
            </div>
          </div>
        </section>
        {/* Newsletter section ENDS */}

        {/* About section BEGINS */}
        <section className={classes.section}>
          <h5 className={classes.title}>Bahd Since 'O2</h5>
          
          <p className={classes.authorP}>Hi 👋, I'm Daniel Idoko and am a being coding everyday since 2018. I post articles and writen tutorials focusing on full stack development and systems administration. <a href="/about" className={classes.authorPLink}>see more</a></p>
        </section>
        {/* About section ENDS */}
      </Grid>
  );
}