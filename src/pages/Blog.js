import React, { useEffect } from "react";
import BlogContainer from "../containers/Blog";
import { useGlobalContext } from "../context/AppContext";

export default function BlogPage({DarkMode, Blogs}){

  const { setIsNavOpen } = useGlobalContext()

  useEffect(()=>{
    setIsNavOpen(false)
  }, [])

    return(
      <BlogContainer DarkMode={DarkMode} Blogs={Blogs}/>  
    )
}