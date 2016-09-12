FROM nginx

# install node js
RUN apt-get update
RUN apt-get install -y curl sudo
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs

# Install gulp-cli
RUN npm install -g gulp-cli

# clean html dir
RUN rm -rf /usr/share/nginx/html

# Add our files & set working dir
ADD . /usr/share/nginx
WORKDIR /usr/share/nginx
RUN chmod +x /usr/share/nginx/container.sh

RUN bash -c 'if [ ! -e "node_modules" ]; then npm install; fi'

# run gulp first time.
RUN gulp

# Environment variables
ENV DEBUG *,-nodemon:*,-express:*,-ioredis:*
ENV DEBUG_COLORS 1
ENV TERM xterm

# execute container script.
CMD ["bash", "-c", "chmod +x /usr/share/nginx/container.sh; /usr/share/nginx/container.sh"]
