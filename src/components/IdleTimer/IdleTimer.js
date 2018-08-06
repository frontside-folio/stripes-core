import React from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';
import ReactDOM from 'react-dom';

function idleTimer(onActive,onIdle,timeout,rootdocument) {
  return (<IdleTimer
      element={rootdocument}
      onActive={onActive}
      onIdle={onIdle}
      timeout={timeout}
      startOnMount
    />);

}

export default idleTimer;
