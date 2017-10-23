// Handling Collisions
//A collision occurs when a hash function generates the same key for two or more values. The second part of a hash algorithm involves resolving collisions so that all keys are stored in the hash table.

//Separate Chaining
//When a collision occurs, we still need to be able to store the key at the generated index, but it is physically impossible to store more than one piece of data in an array ele‐ ment. Separate chaining is a technique where each array element of a hash table stores another data structure, such as another array, which is then used to store keys. Using this technique, if two keys generate the same hash value, each key can be stored in a different position of the secondary array. 


//Linear Probing
//A second technique for handling collisions is called linear probing. Linear probing is an example of a more general hashing technique called open-addressing hashing. With linear probing, when there is a collision, the program simply looks to see if the next element of the hash table is empty. If so, the key is placed in that element. If the element is not empty, the program continues to search for an empty hash-table element until one is found. This technique makes use of the fact that any hash table is going to have many empty elements and it makes sense to use the space to store keys.

//Linear probing should be chosen over separate chaining when your array for storing data can be fairly large. Here’s a formula commonly used to determine which collision method to use: if the size of the array can be up to half the number of elements to be stored, you should use separate chaining; but if the size of the array can be twice the size of the number of elements to be stored, you should use linear probing.
