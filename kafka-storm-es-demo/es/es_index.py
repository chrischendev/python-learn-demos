from datetime import datetime

from utils import esmanager


# 创建和插入
def es_index():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()
    doc = {
        'author': '可燃冰1',
        'text': '门对千竿竹',
        'timestamp': datetime.now(),
    }

    res = es.index(index="test_python_es_index", doc_type='user', body=doc)
    id = res['_id']
    print(id)


# 更新 带id
def es_update():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()
    doc = {
        'author': '蓝焰可燃冰',
        'text': '门对千竿竹短无',
        'timestamp': datetime.now(),
    }

    res = es.index(index="test_python_es_index", doc_type='user', id='1zdSsWgBaxA2jUbRPSlM', body=doc)
    id = res['_id']
    print(id)


# 删除文档
def es_delete_doc():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()

    res = es.delete(index="test_python_es_index", doc_type='user', id='1')
    id = res['_id']
    print(id)


# 删除index
def es_delete_index():
    esutils = esmanager.EsUtils()
    es = esutils.createEs()

    es.indices.delete(index="test_python_es_index", ignore=[400, 404])


es_index()
