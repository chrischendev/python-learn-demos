import pickle

# 创建字典
d = dict(id=1, name='chris', age=42)
# 序列化
content = pickle.dumps(d)
print(content)

# 输出到文件
with open('D:\\python_pickle_test.txt', 'wb') as f:
    f.write(content)

# 另外一种方式
with open('D:\\python_pickle_test_2.txt', 'wb') as f:
    pickle.dump(d, f)
