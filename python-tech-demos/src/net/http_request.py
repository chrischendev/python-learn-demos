# 网络http接口调用并解析数据
import requests,json


url='http://localhost:8031/news/search?newsType=BOLAN&page=0&pageSize=10'

response=requests.get(url)

newsList=json.loads(response.text)
# print(type(newsList))
# print(newsList)

for news in newsList:
    print(news['title'])