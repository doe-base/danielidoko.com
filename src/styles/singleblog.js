import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
      root: {
          width: "100%"
      },
      test: {
          background: "rgb(248, 249, 250)",
          padding: "4rem 0rem !important",
      },
      test2: {
          padding: "4rem 2.5rem !important",
      },
      // Structrue:
      Blogtitle: {
          marginBottom: "1rem !important",
          lineHeight: '1.5',
          color: ({DarkMode})=>{
            if(DarkMode){
              return '#fff !important'
            }else{
              return "#000 !important"
            }
          },
          fontWeight: "600",
          fontFamily: "Lora, Arial, serif",
          fontSize: "2.5rem",
          marginBottom: "3rem"
      },
      BlogBannerImg: {
          width: "100%",
          marginBottom: "3rem"
      },
      BlogExplanation: {
          marginBottom: "3rem",
          fontSize: "1.108rem",
          fontWeight: "500",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#868686",
      },
      BoldParagraph: {
          marginBottom: "2rem",
          fontSize: "1.278rem",
          fontWeight: "600",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#000",
      },
      li: {
          marginBottom: "1.4rem",
          fontSize: "1.108rem",
          fontWeight: "500",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#000",
          paddingLeft: "1rem"
      },
      ol: {
          margin: "0 1.1rem",
          marginBottom: "3rem",
      },
      enphases: {
          color: "purple",
          fontWeight: "600",
          letterSpacing: "1.5px"
      },
      Paragraph: {
          marginBottom: "3rem",
          fontSize: "1.178rem",
          fontWeight: "500",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#000",
      },
      CodeBoard: {
          width: "100%",
          marginBottom: "3rem"
      },
      CodeBoardTitle: {
          backgroundColor: "#1f4287",
          padding: '1rem 1rem',
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px"
      },
      CodeBoardTitleP: {
          textAlign: "right",
          color: '#fff',
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: '1rem',
          letterSpacing: "0.7px",
          
      },
      Code: {
          padding: "1rem",
          backgroundColor: "#071e3d",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          color: "#fff"
      },
      infosHolder: {
        display: 'flex',
        marginBottom: '0.5rem',
        color: ({DarkMode})=>{
            if(DarkMode){
              return '#bbbbbb !important'
            }else{
              return "#686868 !important"
            }
          },
      },
      infoCard: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem'
      },
      titleSection: {
        marginBottom: '2rem'
      },
      icon:{
        marginRight: '0.2rem',
        fontSize: '1rem !important',
      }
    };
  });

  export default useStyles