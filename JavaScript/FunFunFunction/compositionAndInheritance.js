// Inheritance: design your types around what they ARE (is relationship)
// Composition: design your types around what they DO (has relationship)

const barker = (state) => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
})
barker({name: 'karo'}).bark();

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

const barkerDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign( {}, barker(state), driver(state) );
}


barkerDog('sniffles').bark()