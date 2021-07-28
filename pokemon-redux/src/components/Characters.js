import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../actions/actions";
import CharacterCard from "./CharacterCard";

const Characters = (props) => {
  useEffect(() => {
    props.getCharacters();
  }, []);

  return (
    <div>
      {props.characters.map((char) => {
        return <CharacterCard character={char} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.results,
  };
};

const mapActionsToProps = {
  getCharacters,
};

export default connect(mapStateToProps, mapActionsToProps)(Characters);
