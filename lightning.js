/**
 * Created by yannick on 15/03/2015.
 */

var Gpio = require('pi-gpio');
var piblaster = require("pi-blaster.js");



var maxLen = 200; //ms
var maxLightNumbers = 10;


var maxOut = 1;



var lightning = {

    myLeds: [],

    init : function() {
        if (arguments.length === 0) {
            throw (err)
        } else {
            for (var i = 0; i<arguments.length; i++) {
               lightning.myLeds.push(arguments[i]);
            }
        }
    },

    light: function(level) {
        for (var i = 0; i < lightning.myLeds.length; i++) {
            piblaster.setPwm(lightning.myLeds[i], Math.min(level, 1));
        }
    },

    lightning: function(level) {

    }
}
