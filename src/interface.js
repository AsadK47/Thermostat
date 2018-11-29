var thermostat = new Thermostat();

$(document).ready(function(){

  function updateTemperature() {
    $('#temperature-read-out').text(thermostat.getCurrentTemperature());
    $('#temperature-read-out').attr('class', thermostat.energyUsage());
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

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  });

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

});
