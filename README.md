# Dog Training App

## User Stories
As a user, I want to be able to:
- Sign up for an account
  - I will need a model that holds my:
    - Name
    - Username
    - Email
    - Password
- Login to my account
- Only have access to my account
- See my user page
- write a post that has:
  - a title
  - a body of content
  - comments from other users

## Wireframes


## Models
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

(Meetup)

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

(Meetup)
- zip code

## SQL Tables
Users:
- t.string "name"
- t.string "username"
- t.string "email"
- t.string "password_digest"

Post:
- t.string "title"
- t.string "body"
- t.string "comments"

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

Meetup:
- t.integer "zipcode"

## API
- For users to look for dog training Meetup groups
https://www.meetup.com/meetup_api/
https://www.meetup.com/topics/dogtraining/
