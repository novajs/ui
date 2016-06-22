FROM node:6.2.2

# Add our files & set working dir
ADD . /ui
WORKDIR /ui

# Don't want to include a file for this.
RUN sh -c 'echo "deb http://httpredir.debian.org/debian jessie main non-free contrib\ndeb http://httpredir.debian.org/debian jessie-updates main non-free contrib\ndeb http://security.debian.org jessie/updates main non-free contrib" >/etc/apt/sources.list'

# Update sources and install python-dev for watchman
RUN apt-get update
RUN apt-get install -y python-dev

# Install watchman
RUN mkdir /deps
RUN git clone https://github.com/facebook/watchman /deps/watchman
RUN sh -c 'cd /deps/watchman; git checkout v4.5.0; ./autogen.sh; ./configure; make; make install'

# Install deps for ember
RUN npm install
RUN npm install -g ember-cli bower
RUN bower install --allow-root

EXPOSE 4200

CMD ["npm", "start"]
