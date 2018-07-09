import React from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';
import ReactDOM from 'react-dom';

function idleTimer(onActive,onIdle,timeout,rootdocument) {

  //console.log('idleTimer')
  //const doc = document.getElementById('root');
  //const doc = ReactDOM.render(element, document.getElementById('root'));
  //element=rootdocument
  return (<IdleTimer
      element={rootdocument}
      activeAction={onActive}
      idleAction={onIdle}
      timeout={timeout}
      startOnLoad
    />);

}

export default idleTimer;
