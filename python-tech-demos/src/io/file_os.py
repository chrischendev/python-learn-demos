import os

# 操作系统
print(os.name)

# linux下才可以
# print(os.uname())

# 环境变量
print(os.environ)
print(os.environ.get('path'))

# 查看当前目录的绝对路径
print(os.path.abspath('.'))
