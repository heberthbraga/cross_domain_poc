# cross_domain_poc

This is a POC developed to demonstrate how to send a message through an iframe between two different domains. 

The "aramark" project is built upon a **Rails** framework. The ruby version used is 3.0.0 and the rails version is 6.1.3.
Steps to run the rails project:

1. Install *ngrok*.
2. Install mysql and create a user using the *.env file* configuration.
3. Clone the project.
4. Run *bundle install*.
5. Run *rails db:create*.
6. Run *rails db:migrate*.
7. Run *rails s*. After you run this command, the console will output the ngrok link that you can use to acces the local website.
It is important to note that ngrok generates a new url after every app restart.

---------------------------------------------------------------------------------------------------------------------------------------

The "personal" project is built upon the **ExpressJs** framework. 
Steps to run the project.

1. Install *node js*.
2. Add an alias to the 127.0.0.1 host like this: local.personal.com. 
3. Clone the project.
4. Run *npm install*.
5. Run *npm start*. After run this command you can use the alias defined in the second step like this: http://local.personal.com:3002.

To see the communication working, you can run http://local.personal.com:3002 and enable the developer tools and check the console output.
