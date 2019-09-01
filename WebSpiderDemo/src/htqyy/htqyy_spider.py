# 爬取好痛轻音乐网的歌曲
# 网址 http://www.htqyy.com
import datetime
import re

import requests

songId = []
songName = []

for n in range(0, 1):
    url = 'http://www.htqyy.com/top/musicList/hot?pageIndex={}&pageSize=20'.format(n)
    print(url, end='\n')
    html = requests.get(url)
    resultId = re.findall('sid="(.*?)">', html.text)
    resultName = re.findall('<a href=".*?" target="play" title="(.*?)" sid=".*?">', html.text)
    songId.extend(resultId)
    songName.extend(resultName)
print(songId)
print(songName)

for m in range(len(songId)):
    # songUrl='http://f2.htqyy.com/play7/{}/mp3/1'.format(songId[m])
    # 下载地址被修改 构建方式是
    # PageData.DownHost + PageData.down + "/" + PageData.musicId + "/" + PageData.format + "/" + PageData.code + "/" + new Date().getHours();
    # 最后部分是时间 分别是小时数和分秒 http://d.htqyy.com/down7/33/mp3/8/1?m=3:48
    now_time = datetime.datetime.now()
    h = int(now_time.strftime('%H'))
    ms = now_time.strftime('%M:%S')
    songUrl = 'http://d.htqyy.com/down7/{}/mp3/8/{}?m={}'.format(songId[m], h, ms)
    # 请求头 伪装浏览器
    header_dict = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER'
    }
    # 设置ip代理
    session = requests.session()
    proxy_dict = {
        'http': '114.139.35.40:8118'
    }
    print(songUrl, end='\n')
    print('正在下载第{}首...'.format(m + 1))
    response = requests.get(songUrl, headers=header_dict, proxies=proxy_dict).content
    f = open('K:\\spider_music\\{}.mp3'.format(songName[m]), 'wb')
    f.write(response)
    f.close()
