# Must See Movies

Must See Movies is a movie database app that gives users the ability to do some
research on the next movie they want to see.

# Installation

Clone this repo and open a new terminal window and cd into the project
directory.

Run `npm i`

# Usage

Type `npm run dev:client` to run the client

Open localhost:1234 to view the client

Open a new terminal tab and type `npm run dev:server` to run the server on
localhost:3000

# Core features

1. Clicking on any movie will route you to its detail page. You can view more
   granular details on this page.

2. Searching will always populate the list with the movies that most match your
   search

3. You can filter by genre. This doesn't send an api to the back-end, but rather
   filters current list of movies

4. Clicking on the header Must See Movies routes you back to route '/'.
