import React, {useState} from "react";
import HomeContainer from "../containers/Home";

export default function Home({ DarkMode }) {

  return (
    <HomeContainer DarkMode={DarkMode}/>
  );
}
