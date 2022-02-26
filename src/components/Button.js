import React from "react";
import PropTypes from "prop-types";

export function Button({ label }) {
  return (
    <button>{label}</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  label: 'valor padrão',
};
