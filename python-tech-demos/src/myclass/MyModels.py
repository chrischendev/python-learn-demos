# python方法没法重载，因为没有类型检查
class Stu(object):
    info = ''

    def __init__(self):
        self.name = 'chris'
        self.age = 42
        self.address = 'Shanghai Yangpu'
        # self.info=''

    @staticmethod
    def get(name, age, address):
        stu = Stu()
        stu.name = name
        stu.age = age
        stu.address = address
        return stu

    @staticmethod
    def get4Args(name, age, address, info):
        stu = Stu()
        stu.name = name
        stu.age = age
        stu.address = address
        stu.info = info
        return stu

    def show(self):
        print("Name:%s,Age:%s,Address:%s,Info:%s" % (self.name, self.age, self.address, self.info))
