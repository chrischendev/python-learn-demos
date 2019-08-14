#!/usr/bin/python
# -*- coding: UTF-8 -*-

# 导入pymysql模块
import pymysql

# 连接database
conn = pymysql.connect(host='192.168.0.102', port=3307, user='root', password='root', database='spider_news',
                       charset='UTF8')
# 得到一个可以执行SQL语句的光标对象
cursor = conn.cursor()
# 定义要执行的SQL语句
sql = 'select * from tb_news'
# 执行SQL语句
result = cursor.execute(sql)
# print(cursor.fetchone()[1])

# 打印结果集
for row in cursor.fetchall():
    print(row[0])
    print(row[1])
    print(row[2])
    print(row[3])
    print(row[5])

# 关闭光标对象
cursor.close()
# 关闭数据库连接
conn.close()
