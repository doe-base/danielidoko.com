import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      test: {
        background: "rgb(248, 249, 250)",
        padding: "3rem 1rem !important",
      },
      test2: {
        padding: "4rem 2.5rem !important",
        backgroundImage: "url(/img/me.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
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
      importantText: {
          fontWeight: "bold",
          fontSize: "1.1rem"
      }
    };
  });

  export default useStyles