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

# Environment variables
ENV TERM xterm

# Set WORKDIR
WORKDIR /usr/share/nginx

# Add our files & set working dir
ADD . /usr/share/nginx
RUN chmod +x /usr/share/nginx/container.sh

RUN npm install

# Run Gulp
RUN gulp

# Uninstall gulp
RUN npm uninstall -g gulp

# execute container script.
CMD ["bash", "-c", "chmod +x /usr/share/nginx/container.sh; /usr/share/nginx/container.sh"]
