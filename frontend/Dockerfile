# use Node image
FROM node:18

# set working directory inside the container
WORKDIR /app

# copy package files first and install deps
COPY package*.json ./
RUN npm install

# copy the rest of the app
COPY . .

# React dev server runs on 3000
EXPOSE 3000

# start the app (same as npm start from your notes)
CMD ["npm", "start"]
