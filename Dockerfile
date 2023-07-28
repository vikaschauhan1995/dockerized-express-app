# Use Node.js base image
FROM node:18.14.0-alpine

# Set working directory
WORKDIR /app

RUN npm install -g nodemon

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the app files to the container
COPY . .

# Set environment varibles
ENV PORT=5000

# Expose the port on which the app will run
EXPOSE $PORT


# Start the app
# CMD ["npx", "nodemon", "--legacy-watch", "index.js"]
CMD ["npm", "run", "dev"]