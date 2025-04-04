# Build stage
FROM node:16-alpine AS build
ENV NODE_ENV production

# Taking build arguments
ARG REACT_APP_BASE_URL=http://change-me
ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM nginx:alpine
ENV NODE_ENV production

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the build files into the Nginx document root
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
