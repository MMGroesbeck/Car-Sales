import React from 'react';
import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';

import { addFeature } from "../actions/appActions";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.filter(item => !props.currentFeatures.includes(item.id)).map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
    currentFeatures: state.car.features
  };
};

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);

//.filter(item => !props.currentFeatures.includes(item.id))