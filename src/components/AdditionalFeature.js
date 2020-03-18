import React from 'react';
import { connect } from "react-redux";

import { addFeature } from "../actions/appActions";

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{
        console.log("Clicked: ", props.feature.id);
        props.addFeature(props.feature.id)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
