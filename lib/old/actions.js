﻿var util = require('../util/util.js');
var variableManager = require('../variablemanagement/variablemanagement.js');
exports.createAutocompleteActions = function () {

    Homey.manager('flow').on('action.set_countdown_timer.variable.autocomplete', function (callback, value) {
        callback(null, variableManager.getVariables().filter(util.filterVariable(value, 'number')));
    });

    Homey.manager('flow').on('action.set_random_countdown_timer.variable.autocomplete', function (callback, value) {
        callback(null, variableManager.getVariables().filter(util.filterVariable(value, 'number')));
    });

    Homey.manager('flow').on('action.stop_countdown_timer.variable.autocomplete', function (callback, value) {
        callback(null, variableManager.getVariables().filter(util.filterVariable(value, 'number')));
    });

    Homey.manager('flow').on('action.adjust_countdown_timer.variable.autocomplete', function (callback, value) {
        callback(null, variableManager.getVariables().filter(util.filterVariable(value, 'number')));
    });
}
