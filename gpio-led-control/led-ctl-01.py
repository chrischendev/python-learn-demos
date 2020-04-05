import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

# GPIO.setup(17, GPIO.OUT)
# GPIO.output(17, GPIO.LOW)

GPIO.setup(27, GPIO.OUT)
GPIO.output(27, GPIO.LOW)

# GPIO.setup(22, GPIO.OUT)
# GPIO.output(22, GPIO.LOW)

# for i in range(3):
#     GPIO.output(17, GPIO.HIGH)
#     time.sleep(0.3)
#     GPIO.output(17, GPIO.LOW)
#     time.sleep(0.3)

while True:
# for i in range(3):
    GPIO.output(27, GPIO.HIGH)
    time.sleep(0.3)
    GPIO.output(27, GPIO.LOW)
    time.sleep(0.3)

# for i in range(3):
# while True:
#     GPIO.output(22, GPIO.HIGH)
#     time.sleep(0.3)
#     GPIO.output(22, GPIO.LOW)
#     time.sleep(0.3)

GPIO.cleanup()