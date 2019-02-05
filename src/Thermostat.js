"use strict";

function Thermostat() {
  this.MEDIUM_USAGE_LIMIT = 18;
  this.MAX_PSM_ON_TEMP = 25;
  this.MAX_PSM_OFF_TEMP = 32;
  this.powerSavingMode = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
  if (this.temperature > this.MAX_PSM_ON_TEMP) {
    return (this.temperature = this.MAX_PSM_ON_TEMP);
  }
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === true) {
    return this.temperature === this.MAX_PSM_ON_TEMP;
  }
  return this.temperature === this.MAX_PSM_OFF_TEMP;
};

Thermostat.prototype.resetTemperature = function() {
  return (this.temperature = this.DEFAULT_TEMPERATURE);
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
    return "low-usage";
  } else if (this.temperature > this.MAX_PSM_ON_TEMP) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
};
