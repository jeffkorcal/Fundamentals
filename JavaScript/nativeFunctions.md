# Native Functions

## String

### Properties
String.length
String.prototype

### Methods
String.prototype.charAt()
String.prototype.charCodeAt()
String.prototype.concat()
String.prototype.indexOf()
String.prototype.lastIndexOf()
String.prototype.match()
String.prototype.replace()
String.prototype.slice()
String.prototype.substr()
String.prototype.substring()
String.prototype.toLowerCase()
String.prototype.toUpperCase()
String.prototype.trim()
String.prototype.valueOf()
String.prototype.split()

## Regular Expression

### Methods
RegExp.prototype.exec()
RegExp.prototype.test()
RegExp.prototype[@@match]()
RegExp.prototype[@@replace]()
RegExp.prototype[@@search]()

## Array

### Properties
Array.prototype
Array.prototype.length

### Methods
Array.isArray()
Array.prototype.every()
Array.prototype.filter()
Array.prototype.forEach()
Array.prototype.indexOf()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.unshift()
Array.prototype.slice() - does not mutate array and takes a copy of where you specify. Parameters (begin: 0 based start, end: includes up the index of the number provided)
Array.prototype.splice() - delete and/or insert items in an array
Array.prototype.sort()
Array.prototype.join()
Array.prototype.toString()

## Object

### Properties
Object.prototype
Object.prototype.constructor

### Methods
Object.prototype.assign()
Object.prototype.create()
Object.prototype.keys()
Object.prototype.values()
Object.prototype.hasOwnProperty()
Object.prototype.isPrototypeOf()

## Function

### Properties
Function.arguments
Function.length
Function.prototype

### Methods
Function.prototype.apply()
Function.prototype.call()
Function.prototype.bind()

## DOM Functions

### Selection
document.getElementById('someId');
document.getElementsByTagName('someTag');
document.getElementsByClassName('someClass');
document.querySelector('selector'); 
document.querySelectorAll('selector');

### Node Properties
node.nodeType
node.nodeName
node.attributes
node.nodeValue

### Traversing the DOM
node.parentNode
node.childNodes
node.firstChild
node.lastChild
node.previousSibling
node.nextSibling

### Traversing the DOM (Avoid #text or comments)
node.children
node.firstElementChild
node.lastElementChild
node.previousElementSibling
node.nextElementSibling

### Attributes: Working with restricted attributes (can not use dot notation)
node.getAttribute(attributeName)
node.setAttribute(attributeName,value)
node.hasAttribute(attributeName)
node.removeAttribute(attributeName)

### Class Attributes: Controlling classes with classList in HTML 5
node.classList.add(class)
node.classList.remove(class)
node.classList.toggle(class)
node.classList.length
node.classList.contains(class)

### Attribute Propeties
node.attributes
node.attributes[0]
node.attributes['src']
node.attributes.src

### Modifying Text Content
node.innerHTML
node.outerHTML
node.insertAdjacentHTML(insertionPoint,htmlText)

### Creating and appending nodes
document.createElement(element)
node.appendChild(element)

### Controlling node insertion
node.insertBefore()

### Cloning and removing nodes
node.cloneNode()
node.parentNode.removeChild(node)

### Replacing nodes
node.parentNode.replaceChild()