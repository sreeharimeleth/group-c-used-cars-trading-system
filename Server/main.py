#!.venv/bin/python3

import os
from MilesmartServer import milesmartServer

__port = os.environ['PORT'] if 'PORT' in os.environ else None

if __name__ == '__main__':
    milesmartServer.run(debug=True, host='0.0.0.0', port=__port)
