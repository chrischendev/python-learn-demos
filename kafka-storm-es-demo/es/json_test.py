import json

jsonStr = {
    'name': '',
    'age': 0
}


def json_dump():
    user = json.dumps(jsonStr, sort_keys=True, indent=4, ensure_ascii=False)
    print(user)


def test():
    jsonStr['name'], jsonStr['age'] = 'chrischen', 42
    print(jsonStr)


test()
