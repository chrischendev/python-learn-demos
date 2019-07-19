# 爬取百度新闻

import requests
from bs4 import BeautifulSoup

url = 'http://news.baidu.com/'

strHtml = requests.get(url)
# print(strHtml.text)

soup = BeautifulSoup(strHtml.text, 'html')
data = soup.select('#pane-news > div > ul > li.hdline0 > strong > a')
print(data)
