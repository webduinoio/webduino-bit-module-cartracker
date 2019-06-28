var mainUrl = 'https://tutorials.webduino.io/zh-tw/docs/';
var utmUrl = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Blocks['cartracker_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_SET, "設定")
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_FRONT, "馬達腳位 右前")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "mrf_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_BACK, "右後")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "mrb_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_FRORT, "左前")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "mlf_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_BACK, "左後")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "mlb_");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['cartracker_irsensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_SET, "設定")
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_LEFT, "感測器腳位  L")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "ir_left_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_CENTER, " C")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "ir_center_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT, " R")
        .appendField(new Blockly.FieldDropdown(Code.getPinDropdown), "ir_right_");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['cartracker_speed'] = {
  init: function() {
    this.appendValueInput("speed_")
        .setCheck(null)
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_SET, "設定")
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.WEBDUINO_CARTRACKER_BOTH_MOTOR,"setAllSpeed"], 
          [Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_MOTOR,"setLeftSpeed"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_MOTOR,"setRightSpeed"]
        ]), "motor_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_SPEED, "速度");
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_PERCENT, "％");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['cartracker_track'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_WHEN, "當")
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_INDUCTION, "循跡偵測訊號為")
        .appendField(new Blockly.FieldDropdown([
          ["○○○","\"000\""], 
          ["○○●","\"001\""], 
          ["○●○","\"010\""],
          ["○●●","\"011\""],
          ["●○○","\"100\""],
          ["●○●","\"101\""],
          ["●●○","\"110\""],
          ["●●●","\"111\""],
        ]), "status_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_MOTION, "時，動作")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.WEBDUINO_CARTRACKER_FORWARD,"1"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_BACK,"4"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_FORWARD,"7"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_FORWARD,"8"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_BACK,"9"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_BACK,"10"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_RIGHT,"3"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_LEFT,"2"], 
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_RIGHT_SLOWLY, "6"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_LEFT_SLOWLY, "5"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_STOP,"0"]
      ]), "direction_");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
};

Blockly.Blocks['cartracker_track_do'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_WHEN, "當")
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_INDUCTION, "循跡偵測訊號為")
        .appendField(new Blockly.FieldDropdown([
          ["○○○","\"000\""], 
          ["○○●","\"001\""], 
          ["○●○","\"010\""],
          ["○●●","\"011\""],
          ["●○○","\"100\""],
          ["●○●","\"101\""],
          ["●●○","\"110\""],
          ["●●●","\"111\""],
        ]), "status_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_MOTION, "時，動作")
        .appendField(new Blockly.FieldDropdown([
          [Blockly.Msg.WEBDUINO_CARTRACKER_FORWARD,"1"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_BACK,"4"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_FORWARD,"7"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_FORWARD,"8"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_LEFT_BACK,"9"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_RIGHT_BACK,"10"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_RIGHT,"3"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_LEFT,"2"], 
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_RIGHT_SLOWLY, "6"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_TURN_LEFT_SLOWLY, "5"],
          [Blockly.Msg.WEBDUINO_CARTRACKER_STOP,"0"]
      ]), "direction_");
    this.appendStatementInput("do")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl); 
  }
};

Blockly.Blocks['cartracker_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_ON, "啟動循跡");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

Blockly.Blocks['cartracker_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("cartracker"), "name_")
        .appendField(Blockly.Msg.WEBDUINO_CARTRACKER_OFF, "停止循跡");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl(mainUrl + 'basic/index.html' + utmUrl);
  }
};

