import sys

from PyQt5.QtWidgets import QApplication, QWidget

from MainWindow import Ui_MainWindow


class MainWin(QWidget, Ui_MainWindow):

    def __init__(self):
        super(MainWin, self).__init__()
        self.setupUi(self)


if __name__ == "__main__":
    app = QApplication(sys.argv)
    win = MainWin()
    win.show()
    sys.exit(app.exec_())
