# success

import time

import RPi.GPIO as GPIO


def flashLed(bin, t):
    GPIO.output(bin, GPIO.HIGH)
    time.sleep(t)
    GPIO.output(bin, GPIO.LOW)
    time.sleep(t)
    pass


GPIO.setmode(GPIO.BCM)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)
GPIO.setup(24, GPIO.OUT)

for i in range(1, 5):
    flashLed(18, 0.5)
    flashLed(23, 0.5)
    flashLed(24, 0.5)

for i in range(1, 3):
    flashLed(18, 0.3)
for i in range(1, 3):
    flashLed(23, 0.3)
for i in range(1, 3):
    flashLed(24, 0.3)

for i in range(1, 100):
    flashLed(18, 0.05)
    flashLed(23, 0.05)
    flashLed(24, 0.05)
