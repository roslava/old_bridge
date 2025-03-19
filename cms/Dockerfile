FROM node:18-slim

WORKDIR /app

# Install dependencies for sharp
RUN apt-get update && apt-get install -y \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

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