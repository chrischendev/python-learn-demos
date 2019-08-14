#!/usr/bin/python
# -*- coding: UTF-8 -*-

# 导入pymysql模块
import pymysql

# 连接database
conn = pymysql.connect(host='192.168.0.102', port=3307, user='root', password='root', database='spider_news',
                       charset='UTF8')
# 得到一个可以执行SQL语句的光标对象
cursor = conn.cursor()

# sql语句
sql = 'delete from tb_news where id = %s;'

try:
    # 执行sql语句
    cursor.execute(sql, (2))
    conn.commit()  # 把修改的数据提交到数据库
except Exception as e:
    print(e)
    conn.rollback()  # 捕捉到错误就回滚

# 关闭光标对象
cursor.close()
# 关闭数据库连接
conn.close()
