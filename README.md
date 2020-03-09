# Glitch API Frontend

> A small react frontend to my Faker.js API hosted on Glitch.

[Live Demo](https://fakerdata.tiffstuff.dev/)

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/twhite96/dummy-glitch-api-frontend"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>


How to use:

1. 🌀 Clone the repo at `https://github.com/twhite96/dummy-glitch-api-frontend.git`
2. 🏃 Run: `npm i` to install dependencies.
3. 🔃 Remix the API on Glitch at `https://glitch.com/edit/#!/faker-api`
4. 🎊 Have fun with it.

---

## Motivation for this app
I needed a place to display the data being grabbed from the API. I didn't just want to *build* an API, I wanted people to *see* the results of that API.

## Stack
For this I used my favorite library, and most likely yours too, React. For the UI I used Shards UI but I determined that this was a mistake. Next time I want to build something like this, I am going to roll my own UI with something like Styled Components 💅 or Emotion 👩‍🎤.

## Wins
Creating components wasn't hard. I created the `User.js` component pretty quickly.

## Difficulties
Understanding how to map over data returned from the API and displaying each new data object returned in different individual cards wasn't quite as simple. I looked at other projects that did a similar thing that I've worked on from some tutorial or another and I couldn't fuse those concepts together in my brain. This was because in those tutorials, we weren't doing anything with an API, external or otherwise.

Another thing I struggled with was the spinner. Glitch spins down your database after 10 or 15 minutes to be able to keep the site free. I wanted a way to indicate to the user that the site was still loading so that they wouldn't bounce from the sluggishness of the app.

I tried to use old React syntax but then realized React has APIs that make this simpler than ever.

## Next steps
I am going to be diving into some tutorials on how to use those newer React APIs.

## ⚡ Refactor ⚡

[Joseph Rex](https://twitter.com/josephrexme) refactored the `App.js` component via Hangouts. I grok _some_ of what he did, but I am going to get with him to get a better understanding of the method where have an object like this:

```js
requestRender(status) {
    const renderStatuses = {
      idle: () => null,
      loading: () => <PacmanLoader size={150} color={"#06d7d9"} />,
      loaded: () => this.userList(),
      error: () => <h1>An error occurred!</h1>
    };
    return renderStatuses[status];
  }
  ```

  I am not certain why the properties on the `renderStatuses` object are functions.

### Further reading
[Piping in a Node API from Glitch to a React Frontend | Tiffany R. White Blog](https://tiffanywhite.dev/2020/01/31/piping-in-a-node-api-from-glitch-to-a-react-frontend/)
