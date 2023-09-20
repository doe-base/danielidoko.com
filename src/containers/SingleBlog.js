import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Highlight from 'react-highlight'
import useStyles from "../styles/singleblog";





export default function SingleBlogContainer({ item }) {

    const {number} = item
    const [blogBody, setBlogBody] = useState({})
    console.log(blogBody)

    useEffect(()=>{
        const url = "http://localhost:8080/get-blog-body"

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({number: number})
        })
        .then(res => res.json())
        .then(result => {
            setBlogBody(result.body)
        })
        .catch(err => console.error(err))
    }, [])

  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Grid container>
        <Grid item lg={12} className={classes.test2}>
            
            <div className="Container" dangerouslySetInnerHTML={{__html: blogBody}}></div>

        </Grid>
      </Grid>
    </main>
  );
}
