# Instagram Clone
Creating a mock up of Instagram's Home, Login, and Signup pages. The project utilizes React, Express, Node.js, and MySQL.

## Installation - MySQL Setup

As noted, we are using MySQL as the database in this project.

I am using MacOS for my working environment, but here are the links I used to download and install MySQL and MySQL Workbench.

Click here to install: [MySQL Community Server](https://dev.mysql.com/downloads/mysql/), [MySQL Workbench](https://www.mysql.com/products/workbench/)

## Connection - MySQL Setup

To ensure that the connection between MySQL and Express works, we need to have the same configuration.

You need to make sure that your host, user, password, and database configurations are updated to your system's MySQL configuration OR you can create the exact same MySQL environment as mine. 

```
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // In a real codebase, this would be in .ENV file
    database: "instagram_clone"
});
```

Additionally, you will also need to have the same database table that I used (column names, datatypes, etc.) you can copy and paste this into your MySQL Workbench and execute the query. 

```
CREATE TABLE `User` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(40) NOT NULL,
  `Username` varchar(30) NOT NULL UNIQUE,
  `Password` varchar(40) NOT NULL,
  `Email` varchar(40) NOT NULL UNIQUE,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## Installation - Node.js Server and React Development Environment

Clone the Github repo in your terminal, using:

```
git clone https://github.com/alexlarcheveque/instagram-clone.git
```

This will copy all my project files into your computer. 

Make sure you have Node.js installed, we need to import our packages and to open our react application and server.

Click here to download Node.js: [Node.js](https://nodejs.org/en/download/)

Once we have our Github repo cloned and Node.js installed, we can get the project up and running. Go to both the `server` and `client` directories, and in your terminal use the command, `npm install` to get all the dependencies that I've used in my project on your local machine. 

You should have two terminal tabs/instances running, as `server` and `client` should be running simultaneously. Follow the respective directions down below for each folder.

### Client Start

In your terminal, open the directory `client`. Make sure the dependecies are installed using `npm install`.

After these packages are installed, we can start the client using `npm start`.

Your client should be running on port 3000. 

### Server Start

In your other terminal instance, open the dire `server`. Again, make sure the dependencies are installed using `npm install`.

After these packages are installed, start the node server using `npm start`.

Your Node server should be up and running! You can make your REST API calls can be made on http://localhost:8000.

## Project Demo - Video

You can checkout a video walkthrough/tutorial of my application: https://youtu.be/GjoCh1tQBNM


## Project Screenshots

This is the home page of our Instagram clone! As you can see, it looks nearly identical as Instagram's home page. The home page is also reactive, and collapses the Instagram feed screenshots when the screensize gets too small.

![Screen Shot 2021-04-29 at 12 05 06 AM](https://user-images.githubusercontent.com/52688349/116513851-0bf74700-a87f-11eb-93ac-9ef1a6165e09.png)

![Screen Shot 2021-04-29 at 12 05 56 AM](https://user-images.githubusercontent.com/52688349/116513862-0f8ace00-a87f-11eb-97cc-74fe3fc1abd9.png)

Here is our signup page. Again, it looks near identical to Instagram's signup page. Our form includes validation. It will check for the following cases: 

1. Your email is a legitimate email.
2. Passwords are greater than 6 characters long.
3. No fields can be empty.

![Screen Shot 2021-04-29 at 12 05 45 AM](https://user-images.githubusercontent.com/52688349/116514283-ad7e9880-a87f-11eb-94f0-023b2b78ccad.png)

![Screen Shot 2021-04-29 at 12 12 59 AM](https://user-images.githubusercontent.com/52688349/116514289-aeafc580-a87f-11eb-968b-7db6e3f24199.png)

Additionally, we have the Login page. This is different than the home page, as there are no screenshots of Instagram's feed. I tried to reuse components here, because the Login page and the Home page were nearly identical. 

![Screen Shot 2021-04-29 at 12 16 38 AM](https://user-images.githubusercontent.com/52688349/116514666-2f6ec180-a880-11eb-86de-49e89a7b6278.png)

Lastly, here is a picture of the Instagram feed page. It's a simple page with a Sign Out / Log In button depending on whether or not you are currently signed in. 

![Screen Shot 2021-04-29 at 12 18 14 AM](https://user-images.githubusercontent.com/52688349/116514832-68a73180-a880-11eb-910f-9a6ff08d672b.png)

<img width="1034" alt="Screen Shot 2021-05-02 at 3 03 43 AM" src="https://user-images.githubusercontent.com/52688349/116809498-2d606900-aaf3-11eb-9303-7c816eb355a4.png">


## Challenges/Improvements

1. I would like to seperate my components in more extendable components. For example, I can probably combine `signup-prompt` and `login-prompt` using one component, and passing in `promptText`, `proptLinkText`, and `promptURL` as parameters. 

2. Change hard coded secret keys (database password,  SECRET_TOKEN, etc.) into an `.ENV` file.
