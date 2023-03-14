FROM nginx:alpine
COPY . /usr/share/nginx/html

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm", "start"] 
