import time

import gpio


def flashLed(bin, t):
    gpio.output(bin, gpio.HIGH)
    time.sleep(t)
    gpio.output(bin, gpio.LOW)
    time.sleep(t)
    pass


gpio.setmode(gpio.BCM)

gpio.setup(18, gpio.OUT)
gpio.setup(23, gpio.OUT)
gpio.setup(24, gpio.OUT)

for i in range(3):
    flashLed(18, 0.5)
    flashLed(23, 0.5)
    flashLed(24, 0.5)
