from PyQt5 import QtCore, QtWidgets


class MainWin(object):

    def setupUI(self, TestUi):
        panle = QtWidgets.QWidget()
        panle.resize(400, 300)

        btn = QtWidgets.QPushButton(panle)
        btn.setGeometry(QtCore.QRect(10, 10, 100, 30))
        btn.setText("按钮")

        btn.clicked.connect(self.clk)

    def clk(self):
        msgbox = QtWidgets.QMessageBox()
        msgbox.warning("点击", "按钮被点击")
