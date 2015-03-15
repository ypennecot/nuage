# Adapted from https://github.com/sarfata/pi-blaster.js

# this is the set of pins common to both the model A and B raspberry pi, that's safe to use
# DONT USE PIN 27 ON MODEL A THIS IS NO LONGER SAFE
safePins = [4, 7, 8, 9, 10, 11, 14, 15, 17, 18, 22, 23, 24, 25, 27]

fs = require "fs"
PIGPIO_PATH = "/dev/pigpio"

writeCommand = (cmd) ->
  buffer = new Buffer cmd + "\n"
  fd = fs.open PIGPIO_PATH, "w", `undefined`, (err, fd) ->
    if err
      console.log "Error opening file: " + err
    else
      # By default, node tries to seek the file, but returns an error because we are using a FIFO
      # So we tell node to not seek with -1, and use write() with a buffer
      fs.write fd, buffer, 0, buffer.length, -1, (error, written, buffer) ->
        if error
          console.log "Error occured writing to " + PIGPIO_PATH + ": " + error
        else
          fs.close fd

pigpio =
  setPwm: (pin, value) -> # might want to make this PWM #{pin} #{value}
    pin in safePins and writeCommand "P #{pin} #{value*255}"
  setPwmFrequency: (pin, hertz) ->
    # hertz should be between 100 and 8000
    hertz = Math.min hertz,8000
    pin in safePins and writeCommand "PFS #{pin} #{hertz}"

module.exports = pigpio
