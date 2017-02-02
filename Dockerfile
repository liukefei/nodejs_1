# The CICD node should be connected to public network
FROM index.tenxcloud.com/tenxcloud/nodejs:latest
EXPOSE 8080
COPY server.js ./
CMD node server.js
