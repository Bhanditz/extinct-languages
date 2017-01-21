import React from 'react';
import LightBox from './LightBox';

const lightBoxProps = (props) => {
  return {
    data: props.data.filter(d => d.name === props.selectedLang)[0],
  };
};

const View = (props) => {
  return (
    <LightBox {...lightBoxProps(props)} />
  );
};

export default View;
