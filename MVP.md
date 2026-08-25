# Project MVP — Minimum Viable Product

## Project purpose

Artists can publish and share digital, AI-generated, and traditional artwork. Visitors can discover published artwork, while registered users can collect artwork they like by saving it to their profiles.

## User roles

### Visitor

- A visitor can view the landing page.
- A visitor can browse published artworks.
- A visitor can view an artwork's details.

### Registered user (collector)

- A registered user can do everything a visitor can do.
- A registered user can view and update their own profile.
- A registered user can like and unlike an artwork.
- A registered user can save and unsave an artwork.

### Artist

- An artist can do everything a registered user can do.
- An artist can publish an artwork.
- An artist can edit their own artwork.
- An artist can delete their own artwork.

## Authentication

- A visitor can register with a username, email address, and password.
- A registered user can log in with an email address and password.
- A registered user can log out.
- Protected actions are unavailable to visitors.

## Artwork

- An artwork contains a title, image, category, artist, and optional description and tags.
- Visitors can browse published artworks and view an individual artwork.
- Only an artist can publish artwork.
- Only the artist who published an artwork can edit or delete it.

## Likes and saves

- A registered user can like or unlike an artwork.
- A registered user can save or unsave an artwork.
- A visitor cannot like or save artwork.

## Not included in the MVP

- OAuth login
- Forgotten-password and password-reset flows
- Following, unfollowing, follower lists, and following lists
- Payments and artwork purchasing
- Administrator management
- Banning and unbanning users
- User verification and ratings
- Comments and posts
- Rankings, streaks, challenges, and tips
