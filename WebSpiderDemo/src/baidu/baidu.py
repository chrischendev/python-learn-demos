# -*- coding:utf-8 -*-
# 爬取百度 不成功
import time
import uuid

import pymysql
import requests
from bs4 import BeautifulSoup


# 爬取内容


def spider():
    # 需要爬取的网页地址
    url = 'http://www.baidu.com'
    # 主要内容选择器
    selector = '#s_xmancard_news > div > div.water-container > div > div'

    # 获取网页代码
    strHtml = requests.get(url)
    # strHtml = requests.get(url, {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'})

    # 获取内容 用 content会自动解决乱码问题，text会有乱码，还不知道怎么解决
    content = strHtml.text
    print('content: ')
    print(content)

    # 将网页内容写入文本文件
    f = open('D:\\baidu.html', 'w', encoding='utf-8')
    f.write(content)
    f.close()
    return

    # 解析数据
    soup = BeautifulSoup(content, 'lxml')

    # 解析得到主要的数据集合
    data = soup.select(selector)
    print(len(data))  # 数据集合的长度
    print(data[0].h2.a.attrs['href'])  # 获取属性值
    print(data[0].h2.a.text)  # 获取包含内容
    print(data[0].select('footer > span')[0])  # 子节点选择器

    # 遍历数据集合 解析需要的数据 写入文本文件或者数据库
    conn, cursor = getDbInfo()
    f1 = open('D:\\ccnovel_data.txt', 'w+', encoding='utf-8')
    for i in range(len(data)):
        art = data[i]
        try:
            cls = art.attrs['class']
            if 'excerpt' in cls:
                main_image = art.a.img.attrs['src']  # 主图
                title = art.h2.a.text  # 标题
                url = art.h2.a.attrs['href']  # 链接
                description = art.p.text  # 摘要
                time = art.footer.time.text  # 时间
                footer_span = art.select('footer > span')
                news_type = footer_span[0].a.text  # 类型
                news_tag = footer_span[1].find_all('a')[0].text  # 标签 只取其一

                print('news_type:' + news_type)
                print('news_tag:' + news_tag)

                # 写入文本文件
                d = '主图：' + main_image + '\t标题：' + title + '\t连接：' + url + '\t摘要：' + description + '\t时间：' + time
                f1.write(d + '\n')

                # 写入数据库
                writoDb(conn, cursor, main_image, title, url, description, time, news_type, news_tag)
        except Exception as e:
            print(i)
            print(e)
    f1.close()
    # 关闭光标对象
    cursor.close()
    conn.close()


# 写入数据库
def writoDb(conn, cursor, main_image, title, url, description, sub_time, news_type, news_tag):
    # sql语句
    sql = 'insert into tb_news values (null,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);'
    current_time = time.localtime(time.time())
    try:
        # 执行sql语句
        cursor.execute(sql, (
            str(uuid.uuid1()), title, url, 0, main_image, main_image, 'chris', news_tag, description, current_time))
        conn.commit()  # 把修改的数据提交到数据库
    except Exception as e:
        print(e)
        conn.rollback()  # 捕捉到错误就回滚


# 获取mysql数据库信息
def getDbInfo():
    # 连接database
    conn = pymysql.connect(host='192.168.0.102', port=3307, user='root', password='root', database='spider_news',
                           charset='UTF8')
    # 得到一个可以执行SQL语句的光标对象
    cursor = conn.cursor()
    return conn, cursor


# 执行
if __name__ == '__main__':
    spider()
