# 爬取新闻头条

import requests
from bs4 import BeautifulSoup

url = 'http://www.toutiao.com/ch/news_hot/'
# selector = 'body > div > div.y-box.container > div.y-left.index-content > div:nth-child(2) > div > div > div > ul > li:nth-child(1) > div > div.lbox > a'
selector = 'body > div > div.y-box.container > div.y-left.index-content > div:nth-child(2) > div > div > div > ul'

strHtml = requests.get(url, {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0'})
text = strHtml.text
print(text)

f = open('D:\\toutiao_hot.txt', 'w')
f.write(text)


# soup = BeautifulSoup(text, 'lxml')
# data = soup.select(selector)
# print(data)


