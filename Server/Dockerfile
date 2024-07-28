FROM python:3.12-slim

WORKDIR /Server

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY MilesmartServer MilesmartServer
COPY ui ui
COPY client_secret.json client_secret.json
COPY main.py .


EXPOSE 5000

CMD [ "gunicorn", "-w", "4", "main:milesmartServer", "-b", "0.0.0.0:5000", "-t", "0"]