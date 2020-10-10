# 调用新闻头条的接口获取数据

import pandas as pd
import requests


# 爬取数据


def spider():
    # get_for_type('__all__')
    get_for_type('news_hot')


def get_for_type(news_type):
    url = 'https://www.toutiao.com/api/pc/feed/?category=' + news_type

    # 头信息
    header_dict_1 = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER'
    }
    header_dict_2 = {
        'User-Agent': 'PostmanRuntime/7.15.2',
        'Accept': '*/*',
        'Cache-Control': 'no-cache',
        'Postman-Token': 'eb60d248-1f2d-460c-8261-bfc25c467869',
        'Host': 'www.toutiao.com',
        'Cookie': 'tt_webid=6680817507425388048',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive'
    }
    # 设置ip代理
    session = requests.session()
    proxy_dict = {
        'http': '114.139.35.40:8118'
    }

    response = session.get(url, headers=header_dict_1, proxies=proxy_dict)

    response_json = response.json()

    # 遍历字典输出
    news_data_list = response_json['data']
    # 提取需要的数据
    news_list = []
    for news in news_data_list:
        print(news['title'], end='\n')
        try:
            # 创建一个字典,用来存放处理后的数据
            news_info = {}
            news_info['title'] = news['title']
            news_info['url'] = 'https://www.toutiao.com' + news['source_url']
            news_image_url_ = news['image_url']
            if news_image_url_ != None:
                news_info['image_url'] = news_image_url_
            # 把清洗后的数据放入列表
            news_list.append(news_info)
        except Exception as e:
            print('e:' + news['title'])
            print(e)
            continue
    export_excel(news_list)


# 导出到xls
def export_excel(news_list):
    # writer=csv.writer(file('d:\\export_toutiao_01.csv','w'))
    pf = pd.DataFrame(news_list)
    order = ['title', 'url', 'image_url']
    pf = pf[order]
    col_map = {
        'title': '标题',
        'url': '连接',
        'image_url': '图片'
    }
    pf.rename(columns=col_map, inplace=True)
    pf.fillna('', inplace=True)
    pf.to_excel('D:\\export_toutiao_03.xlsx', encoding='utf-8', index=False)


if __name__ == '__main__':
    spider()
