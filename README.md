# Brisbane 2032 Gold Pass
<p align="center">
  <img src="https://github.com/Wo-m/tickexperience-frontend/blob/main/src/assets/images/logo.png?raw=true)" alt="logo" width="250"/>
</p>

The Brisbane 2032 Gold Pass is a new web application looking to revolutionise the ticketing experience in the leadup to the 2032 Brisbane Olympic Games. The application sets itself apart from other ticketing services by creating an emotional buildup to an event, generating excitement and anticipation with a range of new features. Some examples include a countdown to event commencement when viewing your ticket.

<p align="center">
  <img src="https://github.com/Wo-m/tickexperience-frontend/blob/main/src/assets/images/countdown.png?raw=true)" alt="logo" width="800"/>
</p>

And a 3D VR view of the stadium from your allocated seat, as well as a supporters map that highlights which sections of the stadium different countries supporters will be seated in

<p align="center">
  <img src="https://github.com/Wo-m/tickexperience-frontend/blob/main/src/assets/images/seatview.png?raw=true)" alt="logo" width="800"/>
</p>

The site currently includes an animated landing / welcome page, functional account login and management, an event page with listed olympic events that link to pages for ticket purchase and stadium seating viewing, and pages for each olympic venue with images of the venue and directions. 

## Live Implemention
To access a live prototype of the Gold Pass application please click [here](http://170.64.185.134:5000/welcome)

## Getting started
The following is a brief overview of how to navigate this code-base/how it works
- The three main entities are:
    - Components
    - Models
    - Services 

Components:
- [Angular Components](https://angular.io/guide/component-overview) are a convenient and modular building block for angular applications
- As per Angular best practices components are located in /src/app/feature
- each component contains the template (HTML, CSS) and functional code (TS) for its own purpose
- Components represent either whole pages, or smaller injectable components that exist inside other pages

Models:
- Models represent the various entities used in our web app and loosely map to tables in our backend DB
    - NOTE: on the frontend, these map even MORE loosely to DB tables than our backend
    - This is because, instead of pulling in an entire table's worth of data, we define only the minimal amount of data we need to perform a certain task

Services:
- Much like the backend, services represent the main code logic of our frontend code base
- Every API request to our backend is sent via a service
- Each services modularly handles a type of request/computation that needs to be done (ie: ticket.service.ts handles all API requests and responses for tickets)

## Usage

1. Install [Node.js](https://nodejs.org/en/download) 20.0.0 or greater.
2. Install npm.
3. Navigate to the root folder and run `npm install` to install the project dependencies
4. Run `ng serve` to start up the application.
5. Application will start on localhost:4200

**NOTE:** Ensure that the [backend project](https://github.com/Wo-m/tickexperience-backend) is also running

## Software Used
- [Node.js](https://nodejs.org/en/download)
- [Angular](https://angular.io/guide/setup-local)
- [A-Frame](https://aframe.io/)
- [Angular Material](https://material.angular.io/)

