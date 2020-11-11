import React from 'react';
import Movie from './Movie';

function Food({name, picture}){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
  )
}

const foodLike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1200px-Samgyeopsal-gui.jpg',
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg',
  },
  {
    id:4,
    name: 'Doncasu',
    image: 'http://seonkyounglongest.com/wp-content/uploads/2017/07/donkasu-02-1000x667.jpg?x61413',
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image}/>;
// }

function App() {
  return (
    <div>
     {foodLike.map(dish => (
       <Food key={dish.id} name={dish.name} picture={dish.image}/>
     ))}
    </div>   
  );
}

export default App;
