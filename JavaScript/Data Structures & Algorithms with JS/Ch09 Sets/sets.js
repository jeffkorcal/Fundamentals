// Sets
// A set is a collection of unique elements. The elements of a set are called members. The two most important properties of sets are that the members of a set are unordered and that no member can occur in a set more than once. Sets play a very important role in computer science but are not considered a data type in many programming languages. Sets can be useful when you want to create a data structure that consists only of unique elements, such as a list of each unique word in a text.

//Set Definitions
// • A set containing no members is called the empty set. The universe is the set of all possible members.
// • Two sets are considered equal if they contain exactly the same members.
// • A set is considered a subset of another set if all the members of the first set are contained in the second set.

// Set Operations
// The fundamental operations performed on sets are:
// Union
// A new set is obtained by combining the members of one set with the members of another set.
// Intersection
// A new set is obtained by adding all the members of one set that also exist in a second set.
// Difference
// A new set is obtained by adding all the members of one set except those that also exist in a second set.


function Set() {
this.dataStore = []; 
this.add = add;
this.remove = remove; 
this.size = size;
this.contains = contains;
this.union = union; 
this.intersect = intersect; 
this.subset = subset; 
this.difference = difference; 
this.show = show;
}

function add(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true; }
    else {
      return false;
    } 
  }

function remove(data) {
  let pos = this.dataStore.indexOf(data); if(pos>-1){
    this.dataStore.splice(pos,1);
    return true; }
    else {
      return false;
    } 
  }

function size() {
  return this.dataStore.length;
}

function contains(data) {
  if (this.dataStore.indexOf(data) > -1) {
    return true; 
  } else {
    return false;
  } 
}

function union(set) {
  let tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; ++i) {
    tempSet.add(this.dataStore[i]); }
    for (let i = 0; i < set.dataStore.length; ++i) { 
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.dataStore.push(set.dataStore[i]);
    } 
  }
  return tempSet; 
}

function intersect(set) {
  let tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (set.contains(this.dataStore[i])) { 
      tempSet.add(this.dataStore[i]);
    } 
  }
  return tempSet; 
}

function subset(set) {
  if (this.size() > set.size()) {
    return false; 
  } else {
    for (let member in this.dataStore) {
      if (!set.contains(this.dataStore[member])) { 
        return false;
      } 
    }
  }
  return true; 
}

function difference(set) {
  let tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (!set.contains(this.dataStore[i])) { 
      tempSet.add(this.dataStore[i]);
    } 
  }
  return tempSet; 
}

function show() {
  return this.dataStore;
}


/*//Test Add and Remove
let names = new Set(); 
names.add("David"); 
names.add("Jennifer"); 
names.add("Cynthia"); 
names.add("Mike"); 
names.add("Raymond"); 
if (names.add("Mike")) {
   console.log("Mike added")
} else {
  console.log("Can't add Mike, must already be in set");
}
console.log(names.show());

let removed = "Mike";
if (names.remove(removed)) {
   console.log(removed + " removed.");
}
else {
  console.log(removed + " not removed.");
}

names.add("Clayton"); 
console.log(names.show()); 
removed = "Alisa";
if (names.remove("Mike")) {
   console.log(removed + " removed.");
}
else {
console.log(removed + " not removed.");
}*/

/*//Test Union
let cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
let dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
let it = new Set();
it = cis.union(dmp);
console.log(it.show());*/

/*//Test Intesection
let cis = new Set(); 
cis.add("Mike"); 
cis.add("Clayton"); 
cis.add("Jennifer"); 
cis.add("Raymond"); 
let dmp = new Set(); 
dmp.add("Raymond"); 
dmp.add("Cynthia"); 
dmp.add("Bryan");
let inter = cis.intersect(dmp); 
console.log(inter.show());*/

/*//Test Subset
let it = new Set(); 
it.add("Cynthia"); 
it.add("Clayton"); 
it.add("Jennifer"); 
it.add("Danny"); 
it.add("Jonathan"); 
it.add("Terrill"); 
it.add("Raymond"); 
it.add("Mike");
let dmp = new Set(); 
dmp.add("Cynthia"); 
dmp.add("Raymond"); 
dmp.add("Jonathan"); 
if (dmp.subset(it)) {
  console.log("DMP is a subset of IT.");
} else {
  console.log("DMP is not a subset of IT.");
}*/

/*//Test Difference
let cis = new Set();
let it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
let diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show()
      + "] -> [" + diff.show() + "]");*/