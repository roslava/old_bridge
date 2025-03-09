FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./
COPY frontend/package.json ./frontend/

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY frontend/ ./frontend/

# Build the application
WORKDIR /app/frontend
RUN yarn build

# Start the application
CMD ["yarn", "start"]

EXPOSE 3000 