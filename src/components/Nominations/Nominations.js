import { React, useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getNominations,
  removeNomination,
} from "../../actions/nominationActions";
import NominationCard from "./NominationCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: "1em",
    justifyContent: "space-around",
  },
});

function Nominations(props) {
  const classes = useStyles();
  var list = [];
  useEffect(() => {
    props.getNominations();
  }, []);
  if (props.nominations !== undefined && props.nominations instanceof Array) {
    list = props.nominations.map((movie, i) => (
      <NominationCard
        Title={movie.Title}
        Poster={movie.Poster}
        Year={movie.Year}
        key={i}
        number={i}
        imdbID={movie.imdbID}
        removeNomination={props.removeNomination}
        getNominations={props.getNominations}
      ></NominationCard>
    ));
  }
  return (
    <div className={classes.root}>
      <Typography variant="h5" style={{ padding: "0.5em" }}>
        Nominations
      </Typography>
      {list}
    </div>
  );
}

Nominations.propTypes = {
  getNominations: PropTypes.func.isRequired,
  removeNomination: PropTypes.func.isRequired,
  nominations: PropTypes.array,
};
const mapStateToProps = (state) => ({
  nominations: state.nominations.items,
});
export default connect(mapStateToProps, { getNominations, removeNomination })(
  Nominations
);