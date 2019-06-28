+(function (window, webduino) {

  'use strict';

  window.getCarTracker = function (board, mlf, mlb, mrf, mrb) {
    return new webduino.module.CarTracker(board, mlf, mlb, mrf, mrb);
  };

}(window, window.webduino));
  