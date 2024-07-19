# Use the official Node image as a build environment
FROM node:22.4.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install react-scripts@5.0.1

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

CMD [ "npm", "start"]