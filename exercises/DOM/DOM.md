DOM Functions

Selection
document.getElementById('someId');
document.getElementsByTagName('someTag');
document.getElementsByClassName('someClass');
document.querySelector('selector');
document.querySelectorAll('selector');

Node Properties
node.nodeType
node.nodeName
node.attributes
node.nodeValue

Traversing the Dom
node.parentNode
node.childNodes
node.firstChild
node.lastChild
node.previousSibling
node.nextSibling

Traversing the DOM (Avoid #text or comments)
node.children
node.firstElementChild
node.lastElementChild
node.previousElementSibling
node.nextElementSibling

Attributes: Working with restricted attributes (can not use dot notation)
node.getAttribute(attributeName)
node.setAttribute(attributeName,value)
node.hasAttribute(attributeName)
node.removeAttribute(attributeName)

Class Attributes: Controlling classes with classList in HTML 5
node.classList.add(class)
node.classList.remove(class)
node.classList.toggle(class)
node.classList.length
node.classList.contains(class)

Attribute Propeties
node.attributes
node.attributes[0]
node.attributes['src']
node.attributes.src

Modifying Text Content
node.innerHTML
node.outerHTML
node.insertAdjacentHTML(insertionPoint,htmlText)

Creating and appending nodes
document.createElement(element)
node.appendChild(element)

Controlling node insertion
node.insertBefore()

Cloning and removing nodes
node.cloneNode()
node.parentNode.removeChild(node)

Replacing nodes
node.parentNode.replaceChild()