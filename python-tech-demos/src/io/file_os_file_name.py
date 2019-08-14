import os

# 获取扩展名
names = os.path.splitext('D:\\python_io_test2.txt')
print(names)
# 修改文件名
os.rename('D:\\python_io_test2.txt', 'D:\\python_io_test.txt')
