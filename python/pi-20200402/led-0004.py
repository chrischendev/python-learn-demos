import time

import gpio


def flashLed(bin, t):
    gpio.output(bin, gpio.HIGH)
    time.sleep(t)
    gpio.output(bin, gpio.LOW)
    time.sleep(t)


gpio.setmode(gpio.BCM)
gpio.setup(18, gpio.OUT)

for i in range(1, 4):
    flashLed(18, 1)

for i in range(1, 10):
    flashLed(18, 0.5)

for i in range(1, 20):
    flashLed(18, 0.05)
