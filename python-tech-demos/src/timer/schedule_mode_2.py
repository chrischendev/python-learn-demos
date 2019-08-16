import datetime

import schedule


def job():
    print('Job1:按时执行一次的任务')
    print('Job1-excuteTime:%s' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')))


if __name__ == '__main__':
    # 每天正点执行
    schedule.every().day.at('11:37').do(job)
    # 每周星期四正点执行
    schedule.every().thursday.at('11:41').do(job)
    while True:
        schedule.run_pending()
