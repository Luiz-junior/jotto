import React from "react";
import PropTypes from "prop-types";

// import { Container } from './styles';

function Congrats(props) {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="component-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
