FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/nginx.conf
COPY style.css /usr/share/nginx/html/style.css
RUN chmod 644 /usr/share/nginx/html/* && chmod 755 /usr/share/nginx/html