# Assignment_Project_AI_essentia
1. Build a assignment project for internship
2. While Debugging, i made a directory with named views and put the login file inside of it, import is use in react, i used const here because The import statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc. where as The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. And then made a path for it to specify in app.js after that it runs.
3. Added some basic CSS in the assignment so that it looks a little attractive
4. I don’t have yarn installed so I used npm.
5. For verification users once register themselves with email and password. With mongoose I stored their email and password locally with the help of local database Mongodb as any external service is not allowed to use. After than when user login it can verify with that stored data
6. Implemented all the given functionalities.
7. Codes are crips and onto the point with clear understanding.
8. I’m good to go as a frontend developer, i have a lot of experience with react and its hooks. 



#Optional_Task

1. I would use Twilio OTP-based login systems are considered best because they provide enhanced security through one-time passwords that expire quickly, reducing the risk of unauthorized access. Twilio's reliable infrastructure and SMS delivery ensure that OTPs are sent and received promptly. The system is easy to integrate, familiar to users, and can scale to handle high volumes. It offers flexibility in configuration and customization. 
I have used twilio previously in my projects also and i faced one common challenge is sometime OTP messages may be delayed or not delivered at all and may be there are number of cause for that such as network congestion or the user's phone being out of coverage, or api is not connected etc and also Twilio charges for SMS usage.

2. As if this will be extended, I would definitely use firebase verification and hashing & salting the password and then store it in the database, because what I have done in this assignment is very basic level of security, this usually does not work.
And I must use the userID as a key to store the password along with the special key. And a phone number would be required to provide OTP verification.
