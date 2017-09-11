## Emaily

DEPLOYED PROJECT: https://shrouded-plateau-79998.herokuapp.com/

GITHUB REPO: https://github.com/alexkarasik/server

HEROKU: https://dashboard.heroku.com/apps/shrouded-plateau-79998

## ABOUT
Emaily is the biggest and most complex project I have attempted yet. I recognized a few of my weaknesses so far in my development journey and took this project as an opportunity to improve on them.

Emaily is a full stack project that is built with React on the front end and Node in the back-end. It allows users to create and distribute surveys to designated email addresses while logging the responses in MongoDB.

A user signs up with authoization from their Google account, then they can opt to pay into a credit system built with Stripe. Then, users can create a form which will provide the content of the survey. They are then prompted to verify the survey and can then send it. Once a user has the email sent to their designated addresses, the recievers are prompted by a question with a "yes" or "no" response that they click, which is logged in the database and displayed in the original users' account.

The credit system is distributed in units of 5 at a time and a credit is deducated for each sent survey, but each survey can have as many recipents as the user wants.

## Technologies
I touched on this a bit above, but this was my first time getting this in depth in a solo project with Node and Express in the backend and my first time building something this big and deployed with React. I used Mongo and Mongoose for the backend again, which is a first since my group project as well.

This was my first time using a few other technology integrations, like Google Oauth for authorization, Stripe for credits and Sendgrid for email distribution support. These three were new to me.

## Approach
The only way to do this was to go back and forth from the client to the server side frequently. The following is a brief summary of my workflow and my branches on github and commits should reflect this structure.

I started by setting things up for the server with Heroku and getting a deployment system in place. I set up a production and a development environment. Then I created authorization with Google's OAuth, which proved to be the most complex and time consuming feature to set up.

Next came adding in MongoDB, which I wanted to use since I've only encountered it once before in a full stack project. I used something called passport.js for the first time, which is an authnetication middleware for Node to help connect the Google OAuth to the database. I created some user and survey models next to finish out getting my authentication together.

I then did a bit more to set up my production and development environments. I created different keys for the two environments and while it was a bit tedious to do a lot of things twice, I think its a good move to set things up like this from here on out to have room and freedom to experiment and manipulate in a development enviornment and push to deployment in a much more easy going fashion when appropriate, knowing what I have now works and why it does.

I then went about creating a front end server, which interact with the back end server. This was complicated, but necessary to be able to insure my data was working as intended in the front end with React, which is still relatively new to me and that the back end would be able to handle it much smoother once I knew thinkgs were being communicated and transferred properly on the client side.

I tried using some ES6 syntax to refractor, mainly Async and Await. I used a CSS library called Materialize for the first time as well, which worked pretty smoothly. I also used two packages for the first time, called "axios" and "redux thunk". Axios is a library that makes Ajax requests to the backend. The root component makes an API request to the backend and when the request is back, we use redux-thunk . Reduz thunk gives us access to a dispatch function, which belongs to the redux store and sends an action to different reducers, which causes reducers to recalculate the state of the app.

Basically, we make an API request to see if a user is signed in or not. An action creator makes an API request that retuns an action that is sent to the different reducers, which return different values, which updates the store in the different components.I had known and seen this redux process before, but this was the first time it clicked.

The next big thing was integrating Stripe. I had seen people using this in a group project and was excited to use it myself. I created a button that allows Stripe to pop up a form for a user to enter their credit card information to buy credits (just use 4242 4242 4242 4242 to test).

Next came some routing configuration for deployment and then I utilized Mongoose a bit to help in creating models for the survey and setting up Mailer middleware to integrate a service called SendGrid. Some of this middleware code I did not completely understand and rivaled the Google OAuth in terms of complexity, but worked very smoothly after it was integareted. I tested it to make sure I was recieiving emails containing surveys.

Next came some validation. I wanted users to be able to see the survey they were about to send out one more time before submitting it to recipients. Validations like this are particularly important when doing something that you may actually be charging customers for.

At this point, I needed to make sure the surveys were being displayed and redirecting users along the correct path. Once all this was verified, I did my last production deployment and called it a day.

## USER STORIES

* As a user, I want to be able to sign up with a service I already trust and have an account for, for both speed and security's sake.
* As a user, I want to be able to use my credit care through a secure service to buy credits that allow me to send out surveys. The service allows users to send out surveys based on the number of credits users submit in increments of 5 for $5 at a time.
* As a user, I want to be able to create surveys and give them their content for the title, body and recipents.
* As a user, I want to be able to check and verify my surveys before submitting and sending them out to insure they contain the content I really want.
* As a user, I want those who recieve my survey to be able to answer a clear "yes" or "no" question and log the results.
* As a user, I want to see the results of my individual surveys and all of my surveys together in a clear way.

## WIREFRAME
*Root Page
  *[Imgur](https://i.imgur.com/CbMhz1u.jpg)
*Form Page
  *[Imgur](https://i.imgur.com/cnqwoYz.jpg)
*Survey Page
  *[Imgur](https://i.imgur.com/cnqwoYz.jpg)
*Validation Page
  *[Imgur](https://i.imgur.com/C2NEJ0q.jpg)

## In the Future
I think I'd like to add some fancier styling in the future, allow users to delete surveys that have been created, allow users to specify the 'from' field on survey emails and allow client side sorting of the surveys, whci currently just go in the order of latest sent to earliest.

I'm pretty happy with it at the moment and will step away from it for a little and maybe come back to deal with some of these things in the future one day.

Thank you for reading it and please feel free to send me a survey one day in the future! My email is alexkarasik89@gail.com and I would love to hear from you!
