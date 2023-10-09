import React, { useEffect, useState } from "react";
import SingleBlogContainer from "../containers/SingleBlog";



export default function SingleBlog({ item, DarkMode }) {

  return (
    <SingleBlogContainer item={item} DarkMode={DarkMode}/>
  );
}
