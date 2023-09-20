import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      test: {
        background: "rgb(248, 249, 250)",
        padding: "4rem 1.5rem !important",
      },
      test2: {
        padding: "4rem 2.5rem !important",
      },
      root: {
        width: "100%",
        height: "100%",
      },
      theParagraph: {
        fontFamily: "Lora, Arial, serif",
        fontSize: "1rem",
        fontWeight: "normal",
        fontStyle: "italic",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        color: "rgba(0, 0, 0, 0.8)",
      },
      li:{
        marginBottom: '0.5rem'
      }
    };
  });

  export default useStyles