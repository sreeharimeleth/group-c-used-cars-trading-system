#!.venv/bin/python3

from MilesmartServer import milesmartServer

if __name__ == '__main__':
    milesmartServer.run(debug=True, host='0.0.0.0')
