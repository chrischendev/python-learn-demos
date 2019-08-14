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
sql = 'update tb_news set author = %s where id = %s;'
print(sql)

# 执行sql语句
ret = cursor.execute(sql, ('chris', 1))
conn.commit()
print(ret)

# 关闭光标对象
cursor.close()
# 关闭数据库连接
conn.close()
