import React, {useEffect} from "react";
import HomeContainer from "../containers/Home";
import { useGlobalContext } from "../context/AppContext";

export default function Home({ DarkMode }) {

  const { setIsNavOpen } = useGlobalContext()

  useEffect(()=>{
    setIsNavOpen(false)
  }, [])

  return (
    <HomeContainer DarkMode={DarkMode}/>
  );
}
