# -*- coding:utf-8 -*-
# 导入要使用完整的包名加模块名
from src.myclass.MyModels import Stu

# 实例化
stu = Stu()
stu.show()

# 实例化
stu1 = Stu.get('chenfabao', 40, '陕西汉中')
stu1.show()

# 实例化
stu2 = Stu.get4Args('chenfabao', 40, '陕西汉中', 'haha')
stu2.show()

# 别名实例化 右括号和没括号的区别
student = Stu
stu3 = student()
stu3.show()
