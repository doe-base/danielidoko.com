import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./Layout";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
import NeedHelp from "./pages/NeedHelp";
import { useGlobalContext } from "./context/AppContext"
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary:{
      main: 'rgb(30, 175, 237)',
    },
    secondary: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: 'Questrial',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  const { Blogs, DarkMode, setDarkMode } = useGlobalContext()

  const toggleMode = ()=>{
    setDarkMode(!DarkMode)
  }

  useEffect(()=>{
    document.getElementsByTagName('body')[0].style.background = `${DarkMode ? '#181818' : '#fff'} `
  }, [DarkMode])

  const createBlogUrl =(title, number)=>{
    title = title.replaceAll(" ", "-")
    const url = title + "-" + number
    return url
  }



  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout DarkMode={DarkMode} toggleMode={toggleMode}>
          <Routes>
            <Route path="/" element={<Home DarkMode={DarkMode}/>} />
            {
              Blogs.map(item => {
                const {title, number, _id, body} = item
                const url = createBlogUrl(title, number)
                return (
                  <Route key={_id} path={url} element={<SingleBlog item={item}/>} />
                )
              })
            }
            <Route path="/about" element={<About />} />
            <Route path="/need_help_with_coding" element={<NeedHelp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
