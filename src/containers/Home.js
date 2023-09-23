import React, {useState} from "react";
import { Grid } from "@mui/material";
import Blogcard from "../components/BlogCard";
import { useGlobalContext } from "../context/AppContext"
import useStyles from "../styles/home";
import BlogRightBar from "../components/BlogRightBar";


export default function HomeContainer({ DarkMode }) {
  const classes = useStyles();
  const { Blogs } = useGlobalContext()

  return (
    <Grid container className={classes.root}>
      <Grid item lg={8.2} className={classes.test2}>
        <Grid container>
        {
          Blogs.map(item => {
            const {_id, body, category, date, img, imgalt, imgsource, number, readduration, smallbody, tags, title, views} = item
            return <Blogcard key={_id} DarkMode={DarkMode} _id={_id} body={body} category={category} date={date} readduration={readduration} img={img} imgalt={imgalt} imgsource={imgsource} number={number} smallbody={smallbody} tags={tags} title={title} views={views}/>
          })
        }
        </Grid>
      </Grid>

      <BlogRightBar DarkMode={DarkMode}/>
    </Grid>
  );
}
