import React from 'react';
import { connect } from "react-redux";

import { removeFeature } from "../actions/appActions";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {
        props.removeFeature(props.feature);
      }}>X</button>
      {props.additionalFeatures[props.feature-1].name}: ${props.additionalFeatures[props.feature-1].price}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    currentFeatures: state.car.features,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
