# Login System Documentation

This documentation provides instructions on setting up and using the Login System implemented using Angular, Spring Boot, JWT security, and MySQL database. Please follow the steps below to get started.

## Prerequisites
- MySQL Database Server
- Java Development Kit (JDK)
- Node.js and npm (Node Package Manager)

## Database Configuration
1. Start your MySQL database server.
2. Create a new database named `logindb` using the following command:
   ```sql
   CREATE DATABASE logindb;
   ```
3. Configure the database connection settings in `log-jwt-auth/src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/logindb
   spring.datasource.username=root
   spring.datasource.password=1234
   ```

## Database Schema and Admin Account
1. Create the `user_table` table in the `logindb` database using the following SQL query:
   ```sql
   CREATE TABLE `user_table` (
     `user_name` VARCHAR(255) PRIMARY KEY,
     `admin_acc` BOOLEAN,
     `age` INT,
     `dob` DATE,
     `email` VARCHAR(255),
     `name` VARCHAR(255)
   );
   ```
2. Add an admin account to the `user_table`:
   ```sql
   INSERT INTO `logindb`.`user_table` 
   (`user_name`, `admin_acc`, `age`, `dob`, `email`, `name`) 
   VALUES ('admin', true, 20, '2003-01-01', 'samplemail@email.com', 'John Doe');
   ```

## Running the Application
1. Navigate to the `log-jwt-auth` directory and run the Spring Boot application using your favorite Java IDE or the following command:
   ```
   ./mvnw spring-boot:run
   ```
2. Navigate to the `loginClient` directory and install the Angular application dependencies using the following command:
   ```
   npm install
   ```
3. Start the Angular application using the following command:
   ```
   ng serve
   ```

## Accessing the Application
- Access the Angular application at `http://localhost:4200`.
- Admin Login:
  - Username: `admin`
  - Password: (as set during admin account creation)
- Normal User Login:
  - Use the credentials you created for normal users.

## Functionality
### Admin:
- Can create, edit and delete users.
- Can view a list of all users.
- Can log in to the system.

### Normal User:
- Can log in to the system.
- Can view their own details.
- Can edit their own user details.

## Note:
- The application uses JWT for authentication, and the tokens are sent in the Authorization header of the requests after a successful login.
- Ensure that the MySQL database is running and the connection details in `application.properties` are correct for the application to work properly.
- Make sure to secure your admin credentials and database connection details.
- For security reasons, it's recommended to change the default passwords and usernames provided in this documentation.
- For a production environment, consider using environment-specific configuration and security best practices.
