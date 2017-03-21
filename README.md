# Dog Training App
## App Title: Pawsitive Reinforcement

## Heroku Link: https://pawsitive-reinforcement.herokuapp.com/#/

## Project Summary
Pawsitive Reinforcement is a Rails/Angular app that helps users train their dogs to promote happiness and well-being. This app has three main components: 1) a behavior search that provides suggestions and resources to common training issues, 2) a user forum for users to ask and share information, and 3) a Meetup search where users can find local dog friendly communities thanks to Meetup.com. These components are built across 5 models: users (w/ authentication), behaviors (internal database), posts (full CRUD), comments (full CRUD), and meetups (API).

## User Stories
As a user, I want to be able to:
- See what the website offers without having to login or signup
- Sign up for an account when the time comes
  - I will need a model that holds my:
    - Name
    - Username
    - Email
    - Password
- Securly login to my account
- Only have access to my account
- Write a post that consists of:
  - A Title
  - A Body of Content
- See my post in the forum once it's been created
- See all of the posts I've created from my user page
- Have the option to edit my post directly from the post page
- Delete my post from the post page
- Add a comment to my post
- Edit my comment
- Delete my comment
- View comments from other users
- Be the only one who can edit my posts and comments
- Search for a common dog behavior and receive:
  - Suggestions on how to handle the behavior
  - Resources for further learning and understanding
- Look for local Meetup groups by providing:
  - My Zipcode
  - A radius of miles I'm willing to travel

## Wireframes
### Homepage:
![Homepage](/public/images/homepage.jpeg)

### Behavior Page:
![Behavior Page](/public/images/behavior.jpeg)

### Forum Page:
![Forum Page](/public/images/forum.jpeg)

### Post View Page:
![Post View Page](/public/images/postview.jpeg)

### Meetup Page:
![Meetups Page](/public/images/meetups.jpeg)

## Models and Active Record Associations
User
has_many :posts
has_many :comments, through: :posts

Post
belongs_to user
has_many comments

Comment
belongs_to :user
belongs_to :post

Behavior

Meetup

## ERDs
User
- Name
- Username
- Email
- Password

Post
- Title
- Body
- User Id
- Comment Id

Comments
- Body

Behavior
- Name
- Suggestion One
- Suggestion Two
- Suggestion Three
- Suggestion Four
- Suggestion Five
- Resource 1
- Resource 2
- Resource 3

Meetup
- zip code
- Radius (Miles)

## SQL Tables
Users:
- t.string "name"
- t.string "username"
- t.string "email"
- t.string "password_digest"

Posts:
- t.string "title"
- t.string "body"
- t.string "user_id"

Comments:
- t.string "body"
- t.integer "user_id"
- t.integer "post_id"

Behavior:
- t.string "name"
- t.string "suggestion_one"
- t.string "suggestion_two"
- t.string "suggestion_three"
- t.string "suggestion_four"
- t.string "suggestion_five"
- t.string "resource_one"
- t.string "resource_two"
- t.string "resource_three"

Meetups:
- t.integer "zip"
- t.integer "radius"

## Technical Specs
### Technologies Used
HTML5
CSS3
Javascript
Angular.js
Express.js
Ruby
Rails
PostgreSQL
Pure.CSS

### Required Gems
HTTParty
bCrypt
JWT
Pry-Rails
Rack-CORS

### API
Meetup.com: https://www.meetup.com/meetup_api/

## MVP Goals
- User Model: Sign Up, Login, Logout w/ Authentication
- Behavior Model: Index w/ seeded database
- Post Model: Full CRUD
- Comment Model: Full CRUD
- CSS framework

## Reach Goals
- Meetup Group API
- Mobile Responsive Site
- Display forum posts in relative time
- Allow users to save behaviors and Meetups to user page

## Project Challenges
The biggest challenge I faced with this project was incorporating both the posts and comments routes on the same view page. Since I was working with two full CRUD models, I needed to be sure that there was enough functionality to support these models' capabalities. What made this setup even more complicated was the necessity for posts to be routed by post_id.

The first step I took to solve this issue was persist the post id through $stateParams. Without this, anytime a user refreshed the page the post_id would be lost resulting in a broken view. Additionally, I needed to move the get, edit and delete routes for posts into the comments controller to fix further scoping issues. As a result, my comments controller holds a bulk of the front-end CRUD routes.

This setup actually proved advantageous as I was then able to refactor many routes to improve efficiency and promote DRY best practices. A key example was the get requests for both the posts and comments. I was able to grab them both simultaneously in the back-end, thanks to the SQL database, and send the response to a single function in the front-end. The biggest lesson from this challenge is always plan out as best you can. Going back, I would have liked to better plan the relationship between posts and comments and save the time that I spent refactoring.

## Conclusion
This project started out as a very small idea to share suggestions and resources for solving dog behavior, and rapidly turned into a much larger application. Before I knew it I had gone from 3 models to 5, two of which were full CRUD which I had not attempted before. I am happy to have undertaken this challenge and I am proud with all of the knowledge I was able to pull together to make this project happen. In the end, this project also contains a custom Angular directive and filter, as well as an API that brought a new level of functionality. Moving forward, I would like to achieve my remaining reach goals which include allowing the user to save behaviors and Meetups directly to their user page.
