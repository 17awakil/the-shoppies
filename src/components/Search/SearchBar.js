import { React } from "react";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
// import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
// import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifySelf: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", justifySelf: "center", alignSelf: "center" }}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Movies"
          inputProps={{ "aria-label": "search movies" }}
          onChange={(e) => props.onSubmit(e.target.value)}
          // onKeyUp={handleKeyPress}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          disabled
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}