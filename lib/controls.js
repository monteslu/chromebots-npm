'use strict';

var EventEmitter = require('events').EventEmitter;

var controlCache = {};

function controls(name){
  controlCache[name] = controlCache[name] || new EventEmitter();
  return controlCache[name];
}

module.exports = controls;

