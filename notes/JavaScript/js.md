### Lexical Scope
- A scope is the part of a program where a binding between a variable and value is valid
- In JavaScript functions create scope

### Hoisting
- Hoisting is where the JavaScript interpreter moves declarations to the top of a scope
- function declaration are hoisted
- function expressions and variables are initizalized but not hoisted

### Closure
- Inner function retains ongoing access to outer functions scope even after the outer function has returned

### Currying & Partial Application
- Currying is the process of taking a function that accepts N arguments and turning it into a chained series of N functions each taking 1 argument.
- Partial application means taking a function and paritally applying it to one or more of its arguments, but not all, creating a new function in the process.

### Event Delegation
- Event delegation is a strategy where you attach your event handlers to a parent element rather than on multiple child elements
- Ex. Attach one event listener to a parent ul and determine which child li was clicked by inspecting the event object itself when it bubbles up.

### Event Bubbling
- Event bubbling has to do with how events are propagated through elements in the DOM from the deepest element to the most parent element
- Ex. When you click on an element (li for example) that element will receive the event and then, unless you explicitly stop propagation, the event will 'bubble up' to its parents element (ul) and so on
- Deepest element that triggered the element is called the event.target or event.srcElement


### Prototype
- Each object has an internal property called prototype, which links to another object
- If you follow an object’s prototype chain, you will eventually reach the core Object prototype whose prototype is null, signalling the end of the chain.
- When you request a property or method which the object does not contain, JavaScript will look up the prototype chain until it either finds the requested property, or until it reaches the end of the chain
- Prototype inherits from an actual parent object - if you change something on the parent object it will affect the child instance
- While classical inheritance creates instances from a blue print JavaScript utilizes protoypes to create a protype chain to delegate properties and methods

### This
- This is determined by how a function is called
- 4 Main this Patterns
  - Global Reference and Free Function Invocation will refer to the window object
  - Call and Apply Invocation will refer to the first argument passed in
  - Method Invocation will refer to the object left of the dot at call time
  - Construtor Mode will refer to the new object being created

### Bind, Call, Apply

### Recursion
Takes memory
Tail Call Optimization

### Throttling vs Debouncing
  - debouncing - time exceed then event fires
  - throttling - within a certain amount of time you can only make certain amount of requests

### Call Stack
- JavaScript function call LIFO Last In First Out
- This allows the inter most function to run first

### Event Loop
- Single Threaded
- Non Blocking I/O
- Incoming callbacks are like events that are propagated to the event loop, which checks for new events in the queue and processes them
- Instead of waiting for the results, you can register callbacks that are executed when the event is triggered - so that you can deal with long-taking actions

### JSONP
- Core?


<!-- 
Single Threaded Non Blocking - quick computation but many requests
Multi Threaded Java - heavy computation

  BEM Notation
  - using `__` represents parent child relationship
  - using `--` represents modifier

  Accessiblity
  - Wai-Aria
  - TabIndex
  
  Mobile Optimizations
    Images
      CDN: host and caches
      Coludinary to serve images for different resolutions & cache images
      picture > source srcset css tags
        - background with media queries it won't load but img source will load all sizes of 
      widthxheight (smaller | quality)
      retina css media query
      Progressive image load
    
    Bundle Size
      Code Spliting
      Server side
    
    Load Above the Fold
      - Networks can only load a certain amount
      - Webpack: server only neccessary html and css
      - CSS Critical Path
 -->