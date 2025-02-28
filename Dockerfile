# Base image
FROM nginx:alpine

# Copy static files vào thư mục gốc của Nginx
COPY out /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
