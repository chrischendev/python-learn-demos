import xlwt

# 创建工作簿
workbook = xlwt.Workbook(encoding='utf-8', style_compression=0)

# 创建工作表
sheet = workbook.add_sheet('f_sheet', cell_overwrite_ok=True)

# 添加数据
sheet.write(0, 0, 'ID')
sheet.write(0, 1, 'Name')
sheet.write(0, 2, 'Age')
sheet.write(0, 3, 'Address')
sheet.write(0, 4, 'Code')

# 批量写入
infos = [1, 'chenfabao', 40, '陕西汉中', 'CC']
for i in range(0, len(infos)):
    sheet.write(1, i, infos[i])

# 保存文件
workbook.save('D:\\python_test_xls_write.xls')
