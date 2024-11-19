FROM ubuntu:22.04

RUN apt-get update && apt-get install -y wget tar curl

RUN wget https://github.com/Lusitaniae/apache_exporter/releases/download/v1.0.9/apache_exporter-1.0.9.linux-amd64.tar.gz && \
        tar xvzf apache_exporter-1.0.9.linux-amd64.tar.gz

EXPOSE 9117

CMD sh -c 'apache_exporter-1.0.9.linux-amd64/apache_exporter --scrape_uri=http://web_server/server-status?auto'




