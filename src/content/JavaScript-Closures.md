---
title: Understanding JavaScript Closures
description: A deep dive into closures and how they work in JavaScript.
slug: Javascript-Closures
date: 2024-10-25
author: Alyan Sheikh
image: /P23.png
---

Closures are one of the most powerful and commonly used features in JavaScript, enabling data privacy, callback patterns, and functional programming paradigms. Understanding closures allows developers to write cleaner, more modular code and effectively utilize JavaScript’s lexical scoping.

## What is a Closure?



A **closure** is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables—even after the outer function has completed execution. Closures are created whenever a function is defined inside another function, giving it access to the outer function’s scope.

### Example of a Closure

```javascript
function outerFunction() {
    const outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // "I'm outside!"
    }

    return innerFunction;
}

###
2.** Maintaining State with Closures**

Closures are also useful for functions that need to "remember" information
 across multiple calls, such as configuration settings:

 
const myClosure = outerFunction();
myClosure(); // Logs: "I'm outside!"



function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Alyan")); // Output: "Hello, Alyan!"
console.log(sayHello("Sheikh")); // Output: "Hello, Sheikh!"
