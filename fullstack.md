Hacker News top stories with github authentication

## How to start
Fork this repo so we can start counting the time

## Deadline

There's no deadline, do it in your own time.

## User Story
Users should be able to sign up in the application using their Github accounts. From the moment a user is logged in behind a protected route, a list of the top stories of hacker news should be presented.

The user should be able to see the details of those stories (number of comments, score and creation date). When the user clicks on the comments counter, those comments should be presented in the screen without forcing the user to leave the current page.

The stories list should have a mechanism to perform pagination. When the user picks a story, they should be redirected to that respective story URL.

## Stack and technical requisites
For the fontrend we use GraphQL, NextJS, ReactNative, TypeScript and for backend C# around here. But you are free to use whatever you want as long as the client-server communication is built around GraphQL and Relay conventions.

The frontend should be built in the React paradigm and follow Relay conventions.

### Requirements

- Frontend/backend should be secured.

- Consider how your frontend tech applies to a mobile app.

- Up to you to decide whether to use a database.

- User experience is also evaluated.

### How to deliver your test

After fork, commit your changes in a way that we can clearly evaluate the development process, and don't forget to add a README to help us to understand your project and run it =)

### References
- [GitHub Oauth](https://developer.github.com/v3/oauth/)
- [Hacker News API](https://github.com/HackerNews/API)

### Example
![hackernews](/imgs/hackernews.png)
