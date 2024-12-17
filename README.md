# Intro To Express

## Part 1: Installing Express On Your Node Project

- Use `npm init` to initialize this repo folder as a Node project.
- Go to http://expressjs.com/en/starter/installing.html and follow the instructions to install Express in your Node project.
- Create an `index.js` file and a start script in your `package.json` that uses Node to run `index.js`.

## Part 2: Setting up a 'Hello World' server

Our aim for this project is to follow the 'Hello World' steps on the Express documentation: http://expressjs.com/en/starter/hello-world.html. By following the example we will create a functioning server that returns the text 'Hello World!' when you navigate to the localhost port on the browser. However, for it to work with our preferred ES Modules syntax, we need to change from `require` to `import` -
 give that a go.

## Part 3: Understanding the code

Did you manage to implement the code from the Express documentation? Congratulations, you've succesfully followed the docs and adjusted the code to use `import`! However, it will be useful for you to have some understanding of each of its component parts. Comment each line of code in the server with an explanation of what each part is doing.

## Part 4: Internalising the code

Delete all of your code, but not your comments. Try and write out your 'Hello World' server again from memory.

## Part 5: Customising the server

In the future, you'll probably want your servers to do more than send back some text to display on a webpage. Think about all the APIs we've used so far on the bootcamp, and dream for a moment about what kind of sweet API you could build yourself. They can literally do anything you want them to.

Customise your Express server:

- Instead of sending the string with text "Hello World", maybe we want to send a JSON object with a message property of `'Hello World'`. Have a look [at this article to see how `res.json()` might help](https://www.geeksforgeeks.org/difference-between-res-send-and-res-json-in-express-js/)
- Add multiple request handlers at different paths, sending different JSON responses
