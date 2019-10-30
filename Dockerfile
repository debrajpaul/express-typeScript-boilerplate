FROM node:10.9.0

# Define working directory and copy source
WORKDIR /src
COPY . /src

# Install dependencies and build whatever you have to build 
RUN npm install

# npm build 
RUN npm run build

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE 5021
CMD ["npm","start"]
