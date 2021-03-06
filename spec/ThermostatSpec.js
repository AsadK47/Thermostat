'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a default temp of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('sets a minimum temperature to 10 degrees', function() {
    for (var i = 1; i < 11; i++) {
      thermostat.down();
    };
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  describe('power saving mode', function() {

    it('checks that power saving mode is on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('checks that you can turn power saving mode off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('checks that you can turn power saving mode on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

  });

  describe('when power saving mode is on', function() {

    it('sets the max temp to 25 degrees', function() {
      for (var i = 1; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  });

  describe('when power saving mode is off', function() {

    it('sets the max temp to 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 1; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    });

    it('resets the temp to 25 if PSM is switched back on when temp is above 25', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 1; i < 13; i++) {
        thermostat.up();
      }
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });

  });

  it('temperature can be reset back to 20 degrees', function() {
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20)
  });

  describe('displays usage levels', function() {

    describe('when the temperature is below 18 degrees', function() {

      it('shows the usage level as low', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage')
      });

    });

    describe('when the temperature is above 25 degrees', function() {

      it('shows the usage level as high', function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage')
      });

    });

    describe('when the temperature is between 18 and 25', function() {

      it('shows the usage level as normal', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage')
      });

    });

  });

});
