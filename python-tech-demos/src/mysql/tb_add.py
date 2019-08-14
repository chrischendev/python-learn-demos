#!/usr/bin/python
# -*- coding: UTF-8 -*-

import time

# 导入pymysql模块
import pymysql

# 连接database
conn = pymysql.connect(host='192.168.0.102', port=3307, user='root', password='root', database='spider_news',
                       charset='UTF8')
# 得到一个可以执行SQL语句的光标对象
cursor = conn.cursor()

# sql语句
sql = 'insert into tb_news values (null,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);'
current_time = time.localtime(time.time())

try:
    # 执行sql语句
    cursor.execute(sql, ('NNNN82138349875', '台独港独统统去填厕所', 'http://sss.cvasadgk', 0, 'http://sadsdfggtwe.png',
                         'http://as4456gj.jpg,http://ddsg9768.jpg', 'chris', '正气网', '测试新闻', current_time))
    conn.commit()  # 把修改的数据提交到数据库
except Exception as e:
    print(e)
    conn.rollback()  # 捕捉到错误就回滚

# 关闭光标对象
cursor.close()
# 关闭数据库连接
conn.close()
