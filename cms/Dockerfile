FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./
COPY cms/package.json ./cms/

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY cms/ ./cms/

# Build the application
WORKDIR /app/cms
RUN yarn build

# Start the application
CMD ["yarn", "start"]

EXPOSE 1337 