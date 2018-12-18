const CHARACTERS = [
  {
    name: 'Bird Person', 
    imgSrc: '/BirdPerson.png', 
    bio: 'Half bird half person',
    specialSkill: 'Flight attack'
  },
  {
    name: 'Dr. Xenon Bloom', 
    imgSrc: '/DrXenonBloom.png',
    bio: 'A cell',
    specialSkill: 'Sacrifice'
  },
  {
    name: 'Hemorrhage', 
    imgSrc: '/Hemorrhage.png',
    bio: 'A helmeted outlaw',
    specialSkill: 'Skull crush'
  },
  {
    name: 'Morty', 
    imgSrc: '/Morty.png',
    bio: 'A high school pubescent boy',
    specialSkill: 'Complaining'
  },
  {
    name: 'Michael Krombopulous', 
    imgSrc: '/Michael.png',
    bio: 'A highly specialize assasin',
    specialSkill: 'Killing'
  },
  {
    name: 'Pickle Rick', 
    imgSrc: '/PickleRick.png',
    bio: 'Pickle version of Rick',
    specialSkill: 'Nail gun'
  },
  {
    name: 'Prince Nebulon', 
    imgSrc: '/PrinceNebulon.png',
    bio: 'A failed alien pirate',
    specialSkill: 'Simulations'
  },
  {
    name: 'Rick', 
    imgSrc: '/Rick.png',
    bio: 'A mad scientist',
    specialSkill: 'Portal gun teleportation'
  },
  {
    name: 'Scary Terry', 
    imgSrc: '/ScaryTerry.png',
    bio: 'A dream haunting monster',
    specialSkill: 'Saying b*tch before killing'
  },
  {
    name: 'Snoop Snoop', 
    imgSrc: '/SnoopSnoop.png',
    bio: 'The Vindicators special helper',
    specialSkill: 'Cleaning poop'
  },
  {
    name: 'Squanchy', 
    imgSrc: '/Squanchy.png',
    bio: 'The squanchiest squanch',
    specialSkill: 'Beserk mode'
  },
  {
    name: 'Summer', 
    imgSrc: '/Summer.png',
    bio: 'A high school girl obsessed with popularity',
    specialSkill: 'Complaining'
  },
]

const SELECTED_CHARACTERS = []

const createCharacterService = token => ({
  getCharacters: () => new Promise(resolve => setTimeout(() => resolve(CHARACTERS), 750)),
  getCharacter: name => new Promise(resolve => setTimeout(() => resolve(CHARACTERS.find(c => c.name === name)), 750)),
  getSelectedCharacters: () => new Promise(resolve => setTimeout(() => resolve(SELECTED_CHARACTERS), 750)),
  addSelectedCharacter: c => new Promise(resolve => {
    SELECTED_CHARACTERS.push(c)
    resolve(SELECTED_CHARACTERS)
  })
})

export default createCharacterService