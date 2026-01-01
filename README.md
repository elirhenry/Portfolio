GENERAL INFORMATION
  DESCRIPTION
    -A full-stack portfolio application designed to showcase my software projects, skills, and experience. This application runs in a containerized environment (Frontend + Backend + PostgreSQL) using Docker Desktop.

  TECH STACK
    -Frontend:	React, JavaScript
    -Backend:	Node.js, Express.js, Nodemon
    -Database:	PostgreSQL (v16)
    -Containerization:	Docker, Docker Compose
    -Version Control:	Git & GitHub


SETUP DETAILS
  TOOLS & INSTRUCTIONS
    Tools needed: Docker Desktop & Git
    -In the terminal paste `git clone https://github.com/elirhenry/Portfolio.git` to clone the repository into your local enviornment.
    -Past `cd portfolio-app` to go into the directory then paste `docker compose up --build` to launch the application. This will run all of the Docker containers including: portfolio-frontend on http://localhost:3000/, portfolio-backend on http://localhost:8080/ and portfolio-postgres will run internally on port 5432.
    -After this initial setup you should be able to run the application from the terminal using `docker compose start` and then stop the containers by running `docker compose stop`. If any files are updated, you'll need to run `docker compose up --build ` and `docker compose down ` to rebuild and tear down the containers with the updated files.

  TROUBLESHOOTING
    -If Postgres doesn't start when you build and run the container, try upgrading the database version:
      Stop the containers on Docker Desktop and delete them. From the terminal, go to the portfolio-app or main directory and run `rm -rf $HOME/docker/volumes/portfolio-postgres` and then run `mkdir -p $HOME/docker/volumes/portfolio-postgres`. This will update the database versions and reset volumes. From the terminal run `docker compose up --build` again and verify on Docker Database that the portfolio-postgres container is now running.



PROJECT STRUCTURE



NPM COMMANDS
  npm init -y
  npm install express
  npm install--save-dev nodemon
  npm install
  npm run dev
  npm install react-router-dom

