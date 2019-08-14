import pickle

# 读取文件
content = open('D:\\python_pickle_test.txt', 'rb')
print(pickle.load(content))

# 读取文件 另一种方式
with open('D:\\python_pickle_test.txt', 'rb') as f:
    print(pickle.load(f))
