# Textile-Management-System


Features :
	
	- Easy to use.
	
	- The customers can place their orders in an easy and efficient manner.
	
	- Textile can maintain all their details in a single place.

## Requirements 

Hardware Requirements :
	
	- Proccessor 		     : Pentium 4 or Later
	
	- Memory    		     : 2 GB minimum - 4 GB maximum
	
	- Screen Resolution 	     : 1280x1024 or larger
	
	- Application Windows Size   : 1024x680 or larger
	
	- Internet connection 	     : Required

Software Requirements :

	- Operating System	:	Windows 10
	
	- Environment		:	NODE JS
	
	- Scripting language	:	HTML, JavaScript, CSS
	
	- Database		:	MySQL

## How it works

### Customer Dashboard

These are the main goals of this module 

	- Customer can login by using email address or phone number

        - The  customers profile enhancement, checking of their previous orders and communication with admin will be maintained in the dashboard.

These are the scripting languages and environment used in this module 

	- EJS is used to create user interface.
	
	- CSS is used for design the user interface.
	
	- NODE JS act as a intermediate between database and front end.
	
	- MYSQL is the main database.
	
	- EXPRESS is a framework which is used to reduce manual work.

### Bill Generation

These are the main goals of this module 

	- Customers can place their orders in various products like yarn, fabric and garments.

        - In order processing, the acceptance is made by the admin after the order information  are redirected.

        - With the respective information of customer and orders, an invoice will be generated in systematic format.

These are the scripting languages and environment used in this module 

	- EJS is used to create user interface.
	
	- CSS is used for design the user interface.
	
	- NODE JS act as a intermediate between database and front end.
	
	- MYSQL  is the main database.
	
	- EXPRESS is a framework which is used to reduce manual work.

### Inventory Management

These are the main goals of this module

	- Stock management – Details about the raw materials like cotton, polyster and  wastages are managed.

        - Reorder level –  Checking of reorder level will help in the stock updation.

        - Production level – Details about the production level of yarn, fabric and garments are managed

        - Sales management – The daily sales level are updated by the admin

These are the scripting languages and environment used in this module 

	- EJS is used to create user interface.
	
	- CSS is used for design the user interface.
	
	- NODE JS act as a intermediate between database and front end.
	
	- MYSQL  is the main database.
	
	- EXPRESS is a framework which is used to reduce manual work.

### Payroll

These are the main goals of this module

	- Employee Registration – Employee can register by giving their personal details

        - Login – Employee can login by using email address or phone number 

        - Employee details like their salary, provident fund are managed by Admin.

        - Employee can login and view his/her salary details including  working hours etc…

These are the scripting languages and environment used in this module 

	- EJS is used to create user interface.
	
	- CSS is used for design the user interface.
	
	- NODE JS act as a intermediate between database and front end.
	
	- MYSQL  is the main database.
	
	- EXPRESS is a framework which is used to reduce manual work.

#### NODE JS 

This application is written in node js and in the pattern of MVC.

   - [Node.js](https://github.com/nodejs )
   
   - [Express](https://github.com/expressjs/express )
   
   - [MYSQL](https://github.com/mysql )

The application uses single threading in order to process events asynchronously.
	
	- Generate user unique id for all users when they signup.
	
	- Session was created when the user login to the application.
	
	- Session will notify the each process and store it temporarly.
	
	- When the user log out the session, Session details will be vanished. 

## Installation, Configuration and Running 

First ensure your system correctly setting up with required softwares 

These are the some third party packages used in this project

```console 
npm install -dev nodemon
npm install -save express 
npm install -save ejs
npm install -save mysql
```   

This third party package used in routing

```console
npm install -dev bodyparser
```

This command is used to run the project
 
```console
npm start
```
