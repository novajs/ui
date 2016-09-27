FROM sinet/nginx-node:latest

# Install gulp-cli
RUN npm install -g gulp-cli

# clean html dir
RUN rm -rf /usr/share/nginx/html

# Set WORKDIR
WORKDIR /usr/share/nginx

# Add our files & set working dir
ADD . /usr/share/nginx

RUN npm install; npm rebuild node-sass

# Run Gulp
RUN gulp

# Uninstall gulp
RUN npm uninstall -g gulp

# execute container script.
CMD ["bash", "-c", "chmod +x /usr/share/nginx/container.sh; /usr/share/nginx/container.sh"]
