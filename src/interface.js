var thermostat = new Thermostat();

$(document).ready(function(){

  function updateTemperature() {
    $('#temperature-read-out').text(thermostat.getCurrentTemperature());
  };

  $('#temperature-read-out').text(thermostat.getCurrentTemperature());

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  function checkPowerSaveStatus() {
    $('#power-saving-status').text(thermostat.isPowerSavingModeOn());
  };

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    checkPowerSaveStatus();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    checkPowerSaveStatus();
  });

});
