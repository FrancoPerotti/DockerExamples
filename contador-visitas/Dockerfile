FROM python:3.9-slim

WORKDIR /app

COPY app.py .

COPY requirements.txt .

COPY start.sh .

RUN apt-get update && apt-get install -y \
    redis-server \
    && rm -rf /var/lib/apt/lists/*apt-get update && apt-get install -y 

RUN pip install --no-cache-dir -r requirements.txt

RUN chmod +x start.sh

EXPOSE 3000

CMD ["./start.sh"]
