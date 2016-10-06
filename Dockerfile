FROM sinet/nginx-node:latest

# Install gulp-cli
RUN npm install -g gulp-cli

# clean html dir
RUN rm -rf /usr/share/nginx/html

# Set WORKDIR
WORKDIR /usr/share/nginx

# Copy package.json then cache npm install
COPY package.json /usr/share/nginx
RUN npm install; npm rebuild node-sass

COPY . /usr/share/nginx

# Run Gulp
RUN gulp

# execute container script.
CMD ["bash", "-c", "chmod +x /usr/share/nginx/container.sh; /usr/share/nginx/container.sh"]
