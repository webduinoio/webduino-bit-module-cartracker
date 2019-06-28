+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';
  var SENSOR_CARTRACKER = 0x46;
  var CARTRACKER_MESSAGE = [0x04, 0x46];
  var CARTRACKEREvent = [];
  var proto;
  
  var Module = scope.Module,
      BoardEvent = scope.BoardEvent;

  function CarTracker(board, mrf, mrb, mlf, mlb) {
    Module.call(this);
    this._board = board;
    this._mrf = mrf;
    this._mrb = mrb;
    this._mlf = mlf;
    this._mlb = mlb;
    this._state = 'off';
    this._callback = {};
    
    this._board.on(BoardEvent.SYSEX_MESSAGE,
      function (event) {
        var msg = event.message;
        if (msg[0] == CARTRACKER_MESSAGE[0] && msg[1] == CARTRACKER_MESSAGE[1]) {
          var data = msg[2];
          for(var i in CARTRACKEREvent){
            if(parseInt(CARTRACKEREvent[i], 2) == data)
              this.emit(CARTRACKEREvent[i], data);
          }
          // console.log("carTracker response:",msg);
        }
      });
    this._board.send([0xF0, 0x04, SENSOR_CARTRACKER, 0x00, mlf, mlb, mrf, mrb, 0xF7]);
  }

  CarTracker.prototype = proto = Object.create(Module.prototype, {
    constructor: {
      value: CarTracker
    }
  });

  proto.setTrackPin = function(left, center, right){
    var cmd = [0xF0, 0x04, SENSOR_CARTRACKER, 0x01, left, center, right, 0xF7];
    this._board.send(cmd);
  }

  proto.setRightSpeed = function(speed) {
    if(speed > 100){
      speed = 100;
    }else if(speed < 0){
      speed = 0;
    }
    console.log(speed);
    var cmd = [0xF0, 0x04, SENSOR_CARTRACKER, 0x02, 0x0, speed, 0xF7];
    this._board.send(cmd);
  }

  proto.setLeftSpeed = function(speed) {
    if(speed > 100){
      speed = 100;
    }else if(speed < 0){
      speed = 0;
    }
    var cmd = [0xF0, 0x04, SENSOR_CARTRACKER, 0x02, 0x1, speed, 0xF7];
    this._board.send(cmd);
  }

  proto.setAllSpeed = function(speed) {
    this.setRightSpeed(speed);
    this.setLeftSpeed(speed);
  }

  proto.track = function(status, direction, callback){
    var statusInt = parseInt(status, 2);
    var cmd = [0xF0, 0x04, SENSOR_CARTRACKER, 0x03, statusInt, direction, 0xF7];
    this._board.send(cmd);
    if(typeof(callback) != 'function') return;
    CARTRACKEREvent.push(status);
    this._callback[status] = callback;
  }


  proto.on = function(){
    var cmd = [0xF0, 0x04, SENSOR_CARTRACKER, 0x04, 0xF7];
    this._board.send(cmd);
    var self = this;
    if(this._state == "off"){
      for(var i in CARTRACKEREvent){
        this._board.addListener(CARTRACKEREvent[i], self._callback[CARTRACKEREvent[i]]);
      }
    }
    this._state = 'on';
  }

  proto.off = function(){
    var cmd = [0xF0, 0x04, SENSOR_CARTRACKER, 0x05, 0xF7];
    this._board.send(cmd);
    if(this._state == 'on'){
      for(var i in CARTRACKEREvent){
        this._board.removeAllListeners(CARTRACKEREvent[i]);
      }
    }
    this._state = 'off';
  }

  scope.module.CarTracker = CarTracker;
}));