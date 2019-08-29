# 调用新闻头条的接口获取数据

import pandas as pd
import requests


# 爬取数据
def spider():
    # 新闻类型列表
    news_type_list = [
        '__all__',
        'news_hot',
        'news_tech',
        'news_entertainment',
        'news_game',
        'news_sports',
        'news_car',
        'news_finance',
        'funny',
        'news_military'
    ]
    news_list = []

    # 遍历类型进行数据请求
    for news_type in news_type_list:
        news_list = news_list + get_for_type(news_type, 0, 0)

    # 整体写入电子表格
    # 课题 有dict构成的list，如何按照某一个key去重
    print(len(news_list))
    print(news_list)
    export_excel(news_list)


# 获取一种类型的数据
def get_for_type(news_type, max_behot_time, repeat):
    repeat = repeat + 1
    # 请求路径
    url = 'https://www.toutiao.com/api/pc/feed/?category=' + news_type + '&max_behot_time=' + str(max_behot_time)

    # 头信息
    header_dict_1 = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36 LBBROWSER'
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
        # print(news['title'], end='\n')
        try:
            # 创建一个字典,用来存放处理后的数据
            news_info = {
                'title': news['title'],
                'news_type': news_type,
                'url': 'https://www.toutiao.com' + news['source_url'],
                'image_url': news['image_url'] if ('image_url' in news) else '',
                'image_list': join_images_urls(news['image_list']) if ('image_list' in news) else ''
            }

            # 把清洗后的数据放入列表
            news_list.append(news_info)
        except Exception as e:
            print('e:' + news['title'])
            print(e)
            continue
    # 请求10次
    time_ = response_json['next']['max_behot_time']
    if repeat < 10:
        news_list = news_list + get_for_type(news_type, time_, repeat)
    return news_list


# 导出到xls
def export_excel(news_list):
    pf = pd.DataFrame(news_list)
    order = ['title', 'news_type', 'url', 'image_url', 'image_list']
    pf = pf[order]
    col_map = {
        'title': '标题',
        'news_type': '类型',
        'url': '链接',
        'image_url': '图片',
        'image_list': '图片列表'
    }
    pf.rename(columns=col_map, inplace=True)
    pf.fillna('', inplace=True)
    pf.to_excel('export_toutiao_01.xlsx', encoding='utf-8', index=False)


# 把图片列表子弹列表中的value取出来拼接成字符串列表
def join_images_urls(image_list):
    image_url_list = []
    for image in image_list:
        image_url_list.append(image['url'])
    return ','.join(image_url_list)


if __name__ == '__main__':
    spider()
