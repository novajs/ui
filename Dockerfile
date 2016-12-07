FROM sinet/nginx-node:latest

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install yarn
RUN apt-get update
RUN apt-get install -y yarn

# Install Gulp
RUN yarn global add gulp-cli
RUN yarn global add gulp

# clean html dir
RUN rm -rf /usr/share/nginx/html

# Set WORKDIR
WORKDIR /usr/share/nginx

# Copy package.json then cache npm install
COPY package.json /usr/share/nginx
RUN yarn

COPY . /usr/share/nginx

# Run Gulp
RUN gulp

# execute container script.
CMD ["bash", "-c", "chmod +x /usr/share/nginx/container.sh; /usr/share/nginx/container.sh"]
