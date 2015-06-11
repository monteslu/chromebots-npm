'use strict';

var controls = require('./lib/controls');

function speak(text){
  const msg = {
    command: 'speak',
    payload: new String(text || '')
  };

  console.log('speak ' + JSON.stringify(msg));

  window.parent.postMessage(msg, '*');
}

module.exports = {
  controls : controls,
  speak : speak
}

