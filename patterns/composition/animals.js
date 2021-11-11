// Composable behaviors

const barker = (state) => ({
  bark: () => console.log(`woof! I'm barking my name: ${state.name}`),
});

const meower = (state) => ({
  meow: () => console.log(`meow! I'm meowing my name: ${state.name}`),
});

const eater = (state) => ({
  eat: () => console.log(`Yummy! I'm eating ${state.food}`),
});

const player = () => ({
  play: () => console.log('Woof! I\'m playing!'),
});

const getCat = (name, food) => {
  const state = {
    name,
    food,
  };

  return {
    ...meower(state),
    ...eater(state),
    ...player(),
  };
};

const getDog = (name, food) => {
  const state = {
    name,
    food,
  };

  return {
    ...barker(state),
    ...eater(state),
    ...player(),
  };
};

const myDog = getDog('Agatha', 'chicken');
const myCat = getCat('Lola', 'fish');

myDog.bark();
myDog.eat();
myDog.play();
console.log('\n');
myCat.meow();
myCat.eat();
myCat.play();
