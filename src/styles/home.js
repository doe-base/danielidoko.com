import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      test: {
        background: "rgb(248, 249, 250)",
        padding: "4rem 0rem !important",
      },
      test2: {
        padding: "4rem 2.5rem !important",
      },
      root: {
        width: "100%",
        height: "100%",
      },
      inputHolder: {
        position: "relative",
        marginTop: "0.8rem",
        marginBottom: "2rem",
      },
      input: {
        width: "100%",
        height: "52px !important",
        padding: "1rem",
        paddingLeft: "2.5rem",
        fontFamily: "inherit",
        fontSize: "1rem",
        border:  "1px solid rgb(230, 230, 230)"
      },
      sendIcon: {
        position: "absolute",
        top: "30%",
        left: "0.7rem",
        color: "gray",
        fontSize: "1rem !important"
      },
      title: {
        fontFamily: "Lora, Arial, serif",
        fontSize: "1.2rem",
        fontWeight: "normal",
        fontStyle: "italic",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        color: "rgba(0, 0, 0, 0.8)",
      },
      section: {
        padding: "1.5rem 1.5rem"
      },
      categoryLink: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1.8px solid #b1b1b1",
        paddingBottom: "10px",
        color: "#000 !important",
        fontSize: "1rem",
        fontWeight: "500",
        marginBottom: "10px"
      },
      categoryLinkSpan: {
        fontSize: "1.1rem",
        color: "#b1b1b1",
        fontWeight: "600",
        letterSpacing: "1.9px"
      },
      smallball: {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        marginLeft: "5px"
      },
      tagCloud: {
        textTransform: "uppercase",
        display: "inline-block",
        padding: "0.5rem 1rem",
        marginBottom: "0.7rem",
        marginRight: "0.5rem",
        borderRadius: "4px",
        color: "#000000",
        border: "1px solid #ccc",
        fontSize: "11px",
        fontWeight: "bold",
        transition: "all 0.3s linear",
        cursor: "pointer",
        
        "&:hover": {
          border: "1px solid #000",
        }
      },
      newlettersection: {
        padding: "0 1rem"
      },
      newletter: {
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundImage: "url(/img/bg11.jpg)",
        display: "block",
        zIndex: "0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        margin: "1.5rem 0"
      },
      overlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        opacity: "0.5",
        background: "#000000",
        zIndex: "-1",
        padding: "1.5rem"
      },
      newsletterText: {
        marginBottom: "1.6rem",
        lineHeight: "1.3"
      },
      newsletterForm: {
        display: "grid"
      },
      newsletterInput: {
        fontFamily: "inherit",
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontWeight: "600",
        background: "transparent !important",
        color:" rgba(255, 255, 255, 0.7) !important",
        fontSize: "1.028rem",
        height: '52px !important',
        boxShadow: "none !important",
        lineHeight: "1.5",
        marginBottom: '0.8rem',
        padding: "0 1rem",
        letterSpacing: "0.6px"
      },
      newsletterButton: {
        fontFamily: "inherit",
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontWeight: "600",
        background: "#fff !important",
        color:" rgba(0, 0, 0) !important",
        fontSize: "1.028rem",
        height: '52px !important',
        boxShadow: "none !important",
        lineHeight: "1.5",
        marginBottom: '0.8rem',
        padding: "0 1rem",
        letterSpacing: "0.6px"
      },
      authorP: {
        fontSize: '15px',
        lineHeight: '1.8',
        fontWeight: '400',
        color:' rgb(102, 102, 102)',
        display: "block"
      },
      authorPLink: {
        color: 'rgb(30, 175, 237)'
      }
    };
  });

  export default useStyles