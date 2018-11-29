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
    updateTemperature();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  });

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })


});
