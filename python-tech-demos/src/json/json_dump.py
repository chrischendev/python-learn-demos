import json

# 创建字典
d = dict(id=1, name='chris', age=42)
print(d)

# 转换为json
content = json.dumps(d)
print(content)

# 解析json字符串
json_str = '{"id": 1, "name": "chris", "age": 42}'
d2 = json.loads(json_str)
print(d2)
