import time

import gpio

def flasLed(bin, t):
    gpio.output(bin, gpio.HIGH)
    time.sleep(t)
    gpio.output(bin, gpio.LOW)
    time.sleep(t)
    pass

def flasRepeatLed(bin, t, r):
    for i in range(r):
        flasLed(bin, t)

gpio.setmode(gpio.BCM)
gpio.setup(18, gpio.OUT)
gpio.setup(23, gpio.OUT)
gpio.setup(24, gpio.OUT)

for i in range(3):
    flasLed(18, 0.5)
    flasLed(23, 0.5)
    flasLed(24, 0.5)

for i in range(4):
    flasLed(18, 0.3)
    flasLed(23, 0.3)
    flasLed(24, 0.3)

for i in range(5):
    flasRepeatLed(18, 0.1, 3)
    flasRepeatLed(23, 0.1, 3)
    flasRepeatLed(24, 0.1, 3)
