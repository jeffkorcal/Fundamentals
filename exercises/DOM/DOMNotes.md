// DOM Document Object Model
// DOM (Document Object Model) - Describe the relationships in HTML (tags, attributes, text). It is an API or a way for you to access your HTML document with CSS or Javascript.

// Selecting Elements in the DOM
document.getElementById('someId');
// Grabs the node with that particular id
document.getElementsByTagName('someTag');
// Grabs all of the nodes with that particular tag name and stores it into an array
document.getElementsByClassName('someClass');
// Grabs all of the nodes with that particular class name and stores it into an array
document.querySelector('selector'); 
// You can use $('selector'); in the console
// Grabs the first node with the particular selector
// selector can be 'tagName' || '#someID' || '.someClass'
document.querySelectorAll('selector');
// You can use $$('selector'); in the console
// Grabs all of the nodes with that particular selector and stores it into an array
// selector can be 'tagName' || '#someID' || '.someClass' || '#nav ol>li'


// Node Properties
node.nodeType
// Numerical value of a node
// Node.ELEMENT_NODE == 1
// Node.ATTRIBUTE_NODE == 2
// Node.TEXT_NODE == 3
node.nodeName
// The name of the node
node.attributes
// Array of node attributes
node.nodeValue
// element inside a node


// Traversing the DOM
node.parentNode
// Goes up a level always going to return an element
node.childNodes
// Array of children
node.firstChild
// First element
node.lastChild
// Last element
node.previousSibling
// Moving to the previous element with same parent
node.nextSibling
// Moving to the next element with same parent


// Traversing the DOM (Avoid #text or comments)
node.children
// Only children that are elements
node.firstElementChild
// First element child
node.lastElementChild
// Last element child
node.previousElementSibling
// Moving to the previous element with same parent
node.nextElementSibling
// Moving to the next element with same parent


// Attributes: Changing HTML attributes with dot notation
  img.src
  // Dot notation provides easy access
  img.src = 'image.png'
  // Read and write proerties
  img.id = 'selected'
  // Add attributes that don't exist
  img.className 
  // Be careful of reservered words like class
  // img.class will not work

// Attributes: Working with restricted attributes
  node.getAttribute(attributeName)
  // gets value
  node.setAttribute(attributeName,value)
  // sets value
  node.hasAttribute(attributeName)
  // return a boolean value of true or false
  node.removeAttribute(attributeName)
  // deletes attribute

// Data Attributes
  data-task = "speaker"
  // Users can type anything as an attribute
  // Create you own attribute by putting data- in front of it
  node.dataset.task
  // node.dataset property lets you access them

// Class Attributes: Controlling classes with classList in HTML 5
  node.classList.add(class)
  // adds a class
  node.classList.remove(class)
  // removes a class
  node.classList.toggle(class)
  // turns class on/off
  node.classList.length
  // how many
  node.classList.contains(class)
  // class name

// Attribute Propeties
  node.attributes
  // returns a node list
  // read only
  node.attributes[0]
  // numeric
  node.attributes['src']
  // named index
  node.attributes.src
  // dot notation


// Modifying Text Content
node.innerHTML
// changes text as HTML
node.outerHTML
// includes element's tags
node.insertAdjacentHTML(insertionPoint,htmlText)
// insertionPoint can be beforebegin, afterbegin, beforeend, afterend


// Creating and appending nodes
document.createElement(element)
// makes a new element
node.appendChild(element)
// adds element inside a node
Example
// var myElement = document.createElement('img')
// myElement.src = "image.png"
// myElement.setAttribute('alt','image')
// var myNode = document.queryselector('ol li')
// myNode.appendChild(myElement)

// Controlling node insertions
node.insertBefore()
// allows for sugicall insertions
Example
// var pNode = document.createElement('p')
// var myText = document.createTextNode("A new paragraph")
// pNode.appendChild(myText)
// var newNode = document.querySelector("#para")
// newNode.insertBefore(pNode, newNode.childNodes[5])

// Cloning and removing nodes
node.cloneNode()
// makes a copy
// you can tehn reposition the node
node.parentNode.removeChild(node)
// removes the node
// has to be called from a parent node
Example
// var myNode = document.querySelector('.list')
// var newNode = myNode.cloneNode(true)
// var insertLocation = document.querySelector('#sidebar')
// insertLocation.insertBefore(newNode, insertLocation.childNodes[4])
// myNode.parentNode.removeChild(myNode)

// Replacing nodes
node.parentNode.replaceChild()
// replaces a node
// you must call it from the parent node
// saves you the step of having to delete the original
Example
// var myNode = document.querySelector('#moving')
// var replaceNode = document.querySelector('#replacing')
// replaceNode.parentNode.replaceChild(myNode, replaceNode)

Creating DOM Content
- Create the element
- add it to the document

WorkFlow
- var myElement = document.getElementById("ulId");
- var myNewElement = document.createElement("li");
    - myElement.appendChild(myNewElement):
- var myText = document.createTextNode("New list item text");
    - myNewElement.appendChild(myText);

