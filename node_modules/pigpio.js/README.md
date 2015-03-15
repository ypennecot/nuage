pigpio
======

NodeJS library for the [pigpio daemon][pigpio].

## Installation

Make sure you have `node` and `npm` installed on your Raspberry Pi.

Install the pigpio daemon ([instructions][pi-blaster]).

Install this library

    npm install pigpio

## Usage

    # example.coffee
    pigpio = require 'pigpio'

    pigpio.setFrequency 8000

    # Set pin 22 to pwm at 50%, faking ~1.65V
    pigpio.setPwm 22, 0.5

## License

Copyright 2014 - Jonathan Dahan. Published under the MIT open source license
Copyright 2013 - Thomas Sarlandie. Published under the MIT open source license

[pigpio]: https://github.com/joan2937/pigpio
