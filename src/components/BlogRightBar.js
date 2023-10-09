import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import RightbarCard from "../components/RightBarCard";
import useStyles from "../styles/home";
import Fuse from "fuse.js";
import RightbarCardPlaceHolder from "./RightBarCardPlaceHolder";



export default function BlogRightBar({ DarkMode, Blogs, setFilterStatus, setSearchTerm, divideArrayIntoChunks, setDividedArrays }) {
  const classes = useStyles({ DarkMode });
  const backgroundColor = `${DarkMode ? "rgba(248, 249, 250, 0.2)" : "rgb(248, 249, 250)"}`
  const [topBlogs, setTopBlogs] = useState([])

  const options = {
    keys: ['title', 'category', 'smallbody'], // Specify the properties to search within
    threshold: 0.4, // Adjust the fuzzy search threshold (0 to 1)
  };

  const fuse = new Fuse(Blogs, options)
  const searchFunction =(term)=>{
    setSearchTerm(term)
    if(!term){
      setFilterStatus({isActive: false, filterOption: ''})
      setDividedArrays(divideArrayIntoChunks(Blogs, 5))
    }else{
      setFilterStatus({isActive: true, filterOption: 1})
      const filterBlogArr = fuse.search(term)
      setDividedArrays(divideArrayIntoChunks(filterBlogArr, 5))
    }
  }

  const categorySearch = (term)=>{
    setSearchTerm(term)
    if(term === 'all'){
      setFilterStatus({isActive: false, filterOption: ''})
      setDividedArrays(divideArrayIntoChunks(Blogs, 5))
    }else{
      setFilterStatus({isActive: true, filterOption: 2})
      const FilteredBlog = Blogs.filter(item => item.category === term)
      const dividedArr = divideArrayIntoChunks(FilteredBlog, 5)
      setDividedArrays(dividedArr)
    }
  }

  const options2 = {
    keys: ['title', 'tags'], // Specify the properties to search within
    threshold: 0.4, // Adjust the fuzzy search threshold (0 to 1)
  };

  const fuse2 = new Fuse(Blogs, options2)
  const tagSearch =(term)=>{
    setSearchTerm(term)
    if(term === 'all'){
      setFilterStatus({isActive: false, filterOption: ''})
      setDividedArrays(divideArrayIntoChunks(Blogs, 5))
    }else{
      setFilterStatus({isActive: true, filterOption: 3})
      const filterBlogArr = fuse2.search(term)
      setDividedArrays(divideArrayIntoChunks(filterBlogArr, 5))
    }
  }


  function getTop3HighestHeights(data) {
    // Sort the array of objects based on the 'views' property in descending order
    const sortedData = data.sort((a, b) => b.views - a.views);
  
    // Take the first three items (the top 3 highest views)
    const top3HighestHeights = sortedData.slice(0, 3);
  
    return top3HighestHeights;
  }
  
  useEffect(()=>{
    setTopBlogs(getTop3HighestHeights(Blogs))
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

 
  return (
      <Grid item lg={3.8} className={classes.test} style={{background: backgroundColor}}>

        {/* Search form start */}
        <section className={classes.disappearingSection} style={{padding: "0 1.5rem"}}>
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
                onChange={(e)=> searchFunction(e.target.value)}
              />
              <div className={classes.sendIcon}>
                <SearchOutlinedIcon />
              </div>
            </div>
          </form>
        </section>
        {/* Search form end */}

        {/* Category section starts */}
        <section className={classes.disappearingSection} styles={{padding: '0px'}}>
          <h5 className={classes.title}>Category</h5>

          <div>
            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('all')}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>All</p>
              </span>
              <span className={classes.categoryLinkSpan}>(6)</span>
            </div>

            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('guide')}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Guide</p>
              </span>
              <span className={classes.categoryLinkSpan}>(6)</span>
            </div>
            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('shell')}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Shell</p>
              </span>
              <span className={classes.categoryLinkSpan}>(4)</span>
            </div>
            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('javascript')}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Javascript</p>
               
              </span>
              <span className={classes.categoryLinkSpan}>(7)</span>
            </div>
            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('python')}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>Python</p>
                <div className={classes.smallball} style={{backgroundColor: "#113f85bb"}}></div>
              </span>
              <span className={classes.categoryLinkSpan}>(3)</span>
            </div>
            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('golang')}>
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
              {
                topBlogs.length > 0 ?
                topBlogs.map(item => {
                  const {_id, body, category, date, img, imgalt, imgsource, number, readduration, smallbody, tags, title, views} = item
                  return <RightbarCard key={_id} DarkMode={DarkMode} _id={_id} body={body} category={category} date={date} readduration={readduration} img={img} imgalt={imgalt} imgsource={imgsource} number={number} smallbody={smallbody} tags={tags} title={title} views={views}/>
                })
                :
                <RightbarCardPlaceHolder />
              }
            </div>

          </section>
        {/* Recent Post Section ENDS */}

        {/* Tag cloud BEGINS */}
        <section className={classes.disappearingSection}>
          <h5 className={classes.title}>Tag Cloud</h5>

          <div className={classes.tagcloudHolder}>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('all')} >all</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('administration')} >administration</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('web dev')} >web dev</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('backend')} >backend</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('linux')} >linux</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('arrays')} >arrays</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('node JS')} >node JS</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('css')} >css</div>
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
        <div id="backToTop" className={classes.bttContainer}>
          <Button variant="outlined" className={classes.backToTop} onClick={backToTop}>back to top</Button>
        </div>
      </Grid>
  );
}
