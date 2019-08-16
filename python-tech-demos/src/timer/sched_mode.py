import time,sched,datetime

s=sched.scheduler(time.time(),time.sleep())

def job():
    print('Job:按时执行一次的任务')
    print('Job-excuteTime:%s' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')))


# if __name__=='__main__':