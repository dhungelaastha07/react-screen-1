# React Take Home Project #1

### Background
      
This project was built by Sawyer Cutler, the CTO of Lilius, Inc. as a take home interview project. This specific repo has been designed to test a software developers proficiency with HTML, CSS, and JavaScript; as well as a variety of libraries that may be used when working at Lilius, Inc. This project is designed to be built in two (2) to four (4) sprints of between four (4) and six (6) hours each. 

### Installation

1. Fork this repository
2. Clone this repository
3. Run ```cd react-screen-1/server``` in your terminal or CMD prompt
4. Run ```npm install``` in your terminal or CMD prompt to install npm packages
5. Run ```npm run dev``` in your terminal or CMD prompt to run the development server
6. Run ```cd ../ && cd client && yarn``` in your terminal or CMD prompt to install client dependencies
7. Run ```yarn start``` in your terminal or CMD prompt to run this client on http://localhost:3001

### Goals

There are three goals of this project:
1. Show off your ability to craft custom User Interfaces using HTML, CSS, and JavaScript within the React framework
2. Show off your ability to handle data and work with an external API
3. Show off your creativity and your ability to take general guidelines and turn them into something yours

### Project Guidelines

The guidelines for this project will revolve around managing a multi-platform business profile. 

1. Create a landing page for a basic business directory
2. Create a login/register form with the following fields (at a minimum)
   1. Full Name
   2. Email
   3. Password
   4. Business Name
   5. Business Industry
3. Create a page where when logged in you can see all the businesses and display them. (Authenticated Route)
4. Create a page to see your own business that leads to the edit page
5. Create a page where you can edit the 5 fields used on sign-up
   1. This route will throw an error no matter what. Handle the error properly.

Total Page List
- Basic API Route ```http://localhost:3000```
- Landing Page
  - Login ```POST /api/login```
  - Register ```POST /api/register```
- See Businesses
  - ```GET /api/businesses```
- Edit Business
  - ```PATCH /api/edit```
- See My Business
  - ```PATCH /api/businesses/:businessId```

### Libraries

1. Allowed
   1. React
   2. Styled-Components
2. Not Allowed
   1. ALL Component Libraries
      1. Material UI
      2. Bootstrap/Reactstrap
      3. ANT Design

#### Bonus

1. If you complete this quickly and are interested in expanding the functionality, please add the functionality as list here and include it in the following format:

- [X] BONUS Component Completed
  - Location - /server/services/bonus.js, /client/services/bonus.js
  - What is Does - Loads Data from X 3rd Party API, and Shows on the Frontend
