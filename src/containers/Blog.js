import React, {useState, useEffect} from "react";
import useStyles from "../styles/blog";
import { Button, Grid } from "@mui/material";
import BlogCard2 from "../components/BlogCard2";
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext"
import Preloader from "../components/Preloader";


export default function BlogContainer({DarkMode}){

    const classes = useStyles({DarkMode})
    const [topBlogs, setTopBlogs] = useState([])
    const { Blogs, setIsNavOpen, Blogsloading } = useGlobalContext()


    function getTop4HighestHeights(data) {
        // Sort the array of objects based on the 'views' property in descending order
        const sortedData = data.sort((a, b) => b.views - a.views);
      
        // Take the first three items (the top 3 highest views)
        const top4HighestHeights = sortedData.slice(0, 4);
      
        return top4HighestHeights;
      }
      
      useEffect(()=>{
        setTopBlogs(getTop4HighestHeights(Blogs))
      }, [Blogs])

      useEffect(()=>{
        const backToTopButton = document.getElementById("backToTop")
        window.addEventListener('scroll', () => {
          if (window.scrollY > 250) {
            backToTopButton.style.display = 'block';
          } else {
            backToTopButton.style.display = 'none';
          }
        });
      })
    
      const backToTop =()=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    

    return(
        <Grid className={classes.root}>

            <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                <MenuIcon className={classes.menuIcon}/>
                <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
            </div>

            <div>
              {
                  Blogsloading ?
                  <Preloader /> :
                  <div>
                      <section className={classes.section}>
                          <h2 className={classes.title}>Blogs</h2>

                          {
                              Blogs.map(item => {
                                  return (
                                      <div key={item._id} id="blog-card" className={classes.blogCard}>
                                          <p id="blog-text" className={classes.blogText} style={{display: 'block'}}>{item.title}</p>
                                          <time className={classes.dateText} style={{display: 'block'}}>{item.date.slice(0, -6)}</time>
                                      </div>
                                  )
                              })
                          }

                      </section>

                      <section className={classes.section}>
                          <h2 className={classes.title}>Popular Release</h2>

                          <Grid container>
                              {
                                  topBlogs.map(item => <BlogCard2 item={item} DarkMode={DarkMode}/>)
                              }
                              
                          </Grid>
                      </section>
                  </div>
              }
            </div>

            
            <div id="backToTop" className={classes.bttContainer}>
                <Button variant="outlined" className={classes.backToTop} onClick={backToTop}>back to top</Button>
            </div>
        </Grid>
    )
}