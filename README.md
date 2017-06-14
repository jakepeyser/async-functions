# async-functions

This repo contains code examples of JavaScript [async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) and their predecessors in the JS language. It is meant as a reference point for understanding the importance and context of this new pattern.

These code snippets were originally created as collateral for the blog post I wrote titled [Where Did Async/Await Come from and Why Use It?](https://appendto.com/2017/06/asyncawait-come-use).

### [Part 1 - Historical Context of Async Functions](./evolution)

These snippets represent the different stages of the evolution of asynchronous operation invocation in the JavaScript language: Callbacks, Promises, and Async Functions. Each file retrieves a joke using the [Chuck Norris API](https://api.chucknorris.io/) and its respective async pattern.

```bash
# Callbacks -> Promises -> Async Functions
npm run callbacks
npm run promises
npm run async
```

### [Part 2 - Async Benefits](./benefits)

The `sync-style` and `error-handling` files demonstrate improvements that async functions bring to JavaScript. Each file contains how the pattern was formerly implemented using promises alone (commented out), along with how async functions can be utilized to implement the same functionality while improving readability, code flow, and error handling.

```bash
# Demonstrate the synchronous-looking style that async functions provide
npm run sync

# Demonstrate the improvements in asynchronous error handling
npm run errors
```
