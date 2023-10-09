import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [ Blogs, SetBolgs ] = useState([])
    const [Blogsloading, setBlogsloading] = useState(true)
    const [ isNavOpen, setIsNavOpen ] = useState(true)
    const [ DarkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('mode')))

    
    useEffect(()=>{
        const url = "http://localhost:8080/get-blogs"
        setBlogsloading(true)

        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then(res => res.json())
        .then(result => {
            SetBolgs(result)
            setBlogsloading(false)
            // localStorage.setItem('blogs', JSON.stringify(result))
        })
        .catch(err => console.error(err))
    }, [])

    useEffect(()=>{
        localStorage.setItem('mode', JSON.stringify(DarkMode))
    },[DarkMode])

    return (
        <AppContext.Provider
            value = {{
                Blogs,
                DarkMode, 
                setDarkMode,
                isNavOpen,
                setIsNavOpen,
                Blogsloading
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export { AppContext, AppProvider }