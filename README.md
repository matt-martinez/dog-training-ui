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
### Technologies used

### Required Gems

### API
Meetup.com: https://www.meetup.com/meetup_api/

## MVP Goals

## Reach Goals

## Project Challenges and Unresolved Issues

## Conclusion
