# YelpApplication
Yelp Application

# Requirements: 
* nvm

# Getting Started
Install nvm, node and dependencies. Geckodriver and ionic are not required to be global.

    nvm use
    npm install
    npm install -g geckodriver
    npm install -g ionic/cli
    
After everything is installed just run:

    ionic serve -l
    
# Tests
To run tests we need selenium-standalone.

    npm install selenium-standalone@latest -g
    selenium-standalone install && selenium-standalone start

Now we can run steps.
    
    npx codeceptjs run --steps

# Description

Simple “YELP” application 

Your task is to create a simple Angular application which should use YELP Business Rest API (https://www.yelp.com/developers/documentation/v3/business).

The application that You’re building should be able to search for businesses and show them as cards with rating and photo. After picking card application should show Reviews for the selected business. 

In Your solution, You should focus on using the proper types of forms, validating data, correct routing, using modules, handling errors and HTTP requests correctly. Ensure that all external and internal resources are loaded just when they’re needed - no sooner, no later.
In the end, it would be also nice to have tests for Your Angular project, right? So don’t forget about that.

It’s needed to use only three endpoints to accomplish this task:
GET https://api.yelp.com/v3/businesses/search
GET https://api.yelp.com/v3/businesses/{id}
GET https://api.yelp.com/v3/businesses/{id}/reviews

and You could use our API Key that was created specifically for this assessment:

(You can read here how to use it: https://www.yelp.com/developers/documentation/v3/authentication).

You shouldn’t spend more than a couple of evenings to implement it. 
Just so You know, We’re giving EXTRA POINTS for using Angular with Ionic.

Your solution could earn a maximum of 45 points (50 if You use Ionic):
Search & Cards - 15 points
Reviews - 10 points
Http Interaction, Error Handling - 10 points
Tests - 10 points
Angular + Ionic - 5 points

The passing score is 36 points.

Submitting your solution
Please create a private GitHub repository with your solution and share it with the user itc-developer. Please confirm the submission by e-mail so we can connect the GitHub username with your application.

Good luck!



