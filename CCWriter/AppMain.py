import sys

from PyQt5.QtWidgets import QApplication, QWidget

from TestUi import MainWin


class MainUI(QWidget, MainWin):

    def __init__(self):
        super(MainUI, self).__init__()
        self.setupUi(self)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    win = MainUI()
    win.show()
    sys.exit(app.exec_())
