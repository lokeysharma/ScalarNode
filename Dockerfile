# Use an official Node.js runtime as the base image
FROM node:20.4.0

# Set the working directory inside the container
WORKDIR /usr/app

# Copy package.json and package-lock.json separately for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application source code
COPY . .

# Expose the application's port
EXPOSE 3000

# Define the command to start the application
CMD npm run test