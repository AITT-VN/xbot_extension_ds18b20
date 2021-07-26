Blockly.Blocks["update_ds18b20"] = {
  init: function () {
    this.jsonInit({
      [{
      colour: "#ff3333",
      tooltip: "",
      message0: "cập nhật cảm biến ds18b20 cổng %1 pin %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "0"],
            ["2", "1"],
          ],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["read_ds18b20"] = {
  init: function () {
    this.jsonInit({
      colour: "#ff3333",
      tooltip: "",
      message0: "đọc cảm biến ds18b20 cổng %1 pin %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1", "0"],
            ["2", "1"],
          ],
        },
        ],
      output: "Null",
      helpUrl: "",
    });
  },
};

// PYTHON
Blockly.Python["update_ds18b20"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ds18b20'] = "import onewire";
  Blockly.Python.definitions_['ds18b20' + port + pin] = "ds18b20_"+port+"_"+pin+" = onewire.DS18B20(onewire.OneWire(Pin(PORTS_DIGITAL[" + port + "][" + pin + "])))";
  var code = "ds18b20_"+port+"_"+pin+".convert_temp()\n";
  return code;
};

Blockly.Python["read_ds18b20"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_ds18b20'] = "import onewire";
  Blockly.Python.definitions_['ds18b20' + port + pin] = "ds18b20_"+port+"_"+pin+" = onewire.DS18B20(onewire.OneWire(Pin(PORTS_DIGITAL[" + port + "][" + pin + "])))";
  var code = "ds18b20_"+port+"_"+pin+".read_temp()\n";
  return [code, Blockly.Python.ORDER_NONE];
};

