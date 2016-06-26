FROM node:6.2.2

# Add our files & set working dir
ADD . /ui
WORKDIR /ui

# Don't want to include a file for this.
RUN sh -c 'echo "deb http://httpredir.debian.org/debian jessie main non-free contrib\ndeb http://httpredir.debian.org/debian jessie-updates main non-free contrib\ndeb http://security.debian.org jessie/updates main non-free contrib" >/etc/apt/sources.list'

# Update sources and install python-dev for watchman
RUN apt-get update
RUN apt-get install -y python-dev

# Install deps for ember
RUN npm install

EXPOSE 4200

CMD ["npm", "start"]
