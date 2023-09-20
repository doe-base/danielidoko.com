import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, FormLabel, Button  } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../blog.css"


const useStyles = makeStyles(() => {
  return {
    form: {
      fontFamily: "Questrial !important"
    },
    field: {
      display: "inline-block !important",
      marginBottom: '20px !important',
      fontFamily: "Questrial !important"
      // padding: '0 !important'
    },
    names: {
      display: 'flex',
      justifyContent: "space-between"
    },
    Title: {
      marginBottom: "2rem"
    }
  };
});

export default function Form() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [myHtml, setHtml] = useState("")

  function onFormSubmit(e){
    e.preventDefault()

    setHtml(myHtml)
  }

  return (
    <div>
      <h2 className={classes.Title}>Send me a message</h2>
      <form className={classes.form} onSubmit={onFormSubmit}>
        <div className={classes.names}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Your Name"
            variant="outlined"
            color="secondary"
            fullWidth
            multiline
            margin="dense"
            className={classes.field}
            // error={titleError}
            style={{marginRight: "1rem"}}
            />
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Your Name"
            variant="outlined"
            color="secondary"
            fullWidth
            multiline
            margin="dense"
            className={classes.field}
            // error={titleError}
            style={{marginLeft: "1rem"}}
          />
        </div>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Email Address"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          margin="dense"
          className={classes.field}
          // error={titleError}
        />
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Subject"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          margin="dense"
          className={classes.field}
          // error={titleError}
        />
        <TextField
          onChange={(e) => setHtml(e.target.value)}
          label="Drop your message here"
          variant="outlined"
          color="secondary"
          fullWidth
          margin="dense"
          multiline
          rows={4}
          className={classes.field}
          // error={detailsError}
        />
       
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          submit
        </Button>
      </form>
    </div>
  );
}
