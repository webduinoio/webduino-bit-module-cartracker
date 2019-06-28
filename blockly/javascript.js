Blockly.JavaScript['cartracker_motor'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_mrf_ = block.getFieldValue('mrf_');
  var dropdown_mrb_ = block.getFieldValue('mrb_');
  var dropdown_mlf_ = block.getFieldValue('mlf_');
  var dropdown_mlb_= block.getFieldValue('mlb_');
  var code = variable_name_ + '= getCarTracker(board, '+ dropdown_mrf_ + ', ' + dropdown_mrb_ + ', ' + dropdown_mlf_ + ', ' + dropdown_mlb_ +');\n';
  return code;
};

Blockly.JavaScript['cartracker_irsensor'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_mlf_ = block.getFieldValue('ir_left_');
  var dropdown_mlb_= block.getFieldValue('ir_center_');
  var dropdown_mrf_ = block.getFieldValue('ir_right_');
  var code = variable_name_ + '.setTrackPin(' + dropdown_mlf_ + ', ' + dropdown_mlb_ + ', ' +  dropdown_mrf_ + ');\n';
  return code;
};

Blockly.JavaScript['cartracker_speed'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_motor_ = block.getFieldValue('motor_');
  var value_speed = Blockly.JavaScript.valueToCode(block, 'speed_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_name_ + '.' + dropdown_motor_ + '('+ value_speed + ');\n';
  return code;
};

Blockly.JavaScript['cartracker_track'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_');
  var dropdown_direction_ = block.getFieldValue('direction_');
  var code = variable_name_ + '.track(' + dropdown_status_ + ', ' + dropdown_direction_ + ');\n';
  return code;
};

Blockly.JavaScript['cartracker_track_do'] = function (block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var dropdown_status_ = block.getFieldValue('status_');
  var dropdown_direction_ = block.getFieldValue('direction_');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = variable_name_ + '.track(' + dropdown_status_ + ', ' + dropdown_direction_ + ', ' + 'async function(){\n' +
  statements_do + '});\n';
  return code;
};

Blockly.JavaScript['cartracker_on'] = function(block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.on();\n';
  return code;
};

Blockly.JavaScript['cartracker_off'] = function(block) {
  var variable_name_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name_'), Blockly.Variables.NAME_TYPE);
  var code = variable_name_ + '.off();\n';
  return code;
};
