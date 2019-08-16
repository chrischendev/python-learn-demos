import time

# 阻塞式
while True:
    print(time.strftime('%Y-%m-%d %X', time.localtime()), end=' : ')
    print('定时任务执行')
    time.sleep(1)
