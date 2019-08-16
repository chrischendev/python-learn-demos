import tkinter

# 打包windows桌面程序.exe
# pip install pyinstaller
# 在本类所在位置执行pyinstaller -F -w (-i icofile)  Main.py , -w 用来隐藏控制台窗口 括号内指定图标
# 参考资料http://c.biancheng.net/view/2690.html
def main():
    win = tkinter.Tk()
    win.title = '测试窗口'
    lbl = tkinter.Label(win, width=300, height=300)
    lbl.pack()

    btn = tkinter.Button(lbl, text='退出', command=win.quit, width=10, height=1)

    btn.pack()
    win.mainloop()


def fun1():
    print('haha')


if __name__ == '__main__':
    main()
