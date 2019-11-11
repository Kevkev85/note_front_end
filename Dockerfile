FROM nginx:1.17.5-alpine
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/noteIt /usr/share/nginx/html
EXPOSE 80