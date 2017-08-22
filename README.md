# My project's README
This application is the core of a messenger chatbot "Mybrandbot" wich is a bot that will help users manage their favorite brands, keep
them notified about the latest promotions and discount sales in real time.

It's developped using Nodejs, Express and Mongodb and it's hosted on heroku.
The database is hosted on mlab.com wich is a mongodb type (you can get free 500 MB storage).
The bot engine used is api.ai (google).
The facebook page linked to this bot is Mybrandbot.
The application contain : 
    app.js file wich is the main server file where Nodejs and Express are used
    config.js file cich contain the facebook secrest, facebook page token, server url ,api.ai client token...
    The models DIR wich contains mongoose schema (data models) :
                                            - User model
                                            - Brand model
    The public DIR wich contains some static html interfaces for the heroku app domain.

The Heroku app domain is : "https://thebrandbot07.herokuapp.com"


You can find here a virgin code template: "https://github.com/djoker0702/chatbot-facebook-nodejs"
        - You need to change the config.js file with what you get from facebook developer and api.ai to link the project with your chatbot
        - You can find in the app.js some predifined functions to use as you like (you just need to understand some api.ai and javascipt programming language).  
