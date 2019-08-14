import xlrd

# 打开文件，获取excel文件的workbook（工作簿）对象
workbook = xlrd.open_workbook('D:\\python_test_xls.xls')

# 获取所有sheet的名字
sheet_names = workbook.sheet_names()
print(sheet_names)
print(sheet_names[0])

# 通过sheet索引获得sheet对象
sheet = workbook.sheet_by_index(0)
print(sheet.name)

# 通过sheet名获得sheet对象
sheet1 = workbook.sheet_by_name('Sheet1')
print(sheet1.name)

# 获取表总行数
print(sheet.nrows)

# 获取表总列数
print(sheet.ncols)

# 循环打印每一行
for i in range(sheet.nrows):
    print(sheet.row_values(i))

# 通过坐标读取表格中的数据
print(sheet.cell_value(1, 1))
