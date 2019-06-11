from utils import esmanager


# 按照id获取数据
def es_get():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()

    res = es.get(index="test_python_es_index", doc_type='user', id='3DcismgBaxA2jUbRfylk')
    author = res['_source']['author']
    print(author)


def es_search_all():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()

    query_body = {
        "query": {
            "match_all": {}
        }
    }

    res = es.search(index="test_python_es_index", doc_type='user', body=query_body)
    print(res)
    author = res['hits']['hits'][0]['_source']['author']
    print(author)


def es_search_con_1():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()

    query_body = {
        'query': {
            'term': {
                'author.keyword': '可燃冰'
            }
        }
    }

    result = es.search(index='test_python_es_index', doc_type='user', body=query_body)
    print(result['hits']['hits'])
    print(result)


es_search_con_1()
