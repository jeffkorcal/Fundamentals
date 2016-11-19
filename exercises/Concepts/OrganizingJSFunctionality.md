# Nested Scope
  - Declaring a function within another function creates a nested scope.

# Module Pattern
  - Closure is crucial for creating modules. Modules let you define private implementation details that are invisible to the outside world. At the same time, you can create a public API to allow access to necessary functionality.

# Unit Testing
  - Black box testing: test from the outside
  - White box testing: test from the inside 
  - Recomendation: a unit should be the smallest indevisible code used in a real application, so black box testing makes more sense

# Public vs Private
```
function Hello(firstName) {
  
  //upper is private
  function upper(str) {
    return str.toUpperCase();
  }

  function speak(lastName) {
    console.log(upper(name), lastName);   
  }
  
  // publicAPI that has speak is public
  const publicAPI = {
    say: speak
  }

  return publicAPI;
}

let hi = Hello("George");
hi.say("Washington");
```

# Callback
  - Functions are first class values in JavaScript
  - Callbacks occur when a function is passed as an argument so it can be called after another routine has finished. One of the most common uses for callbacks is with the setTimeout method.