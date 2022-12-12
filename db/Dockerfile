FROM --platform=linux/amd64 postgres:alpine

COPY *.sql /docker-entrypoint-initdb.d/

ADD products.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*

EXPOSE 5432