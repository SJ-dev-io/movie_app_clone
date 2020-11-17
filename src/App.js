import React from 'react';


const foodLike = [
  {
    id:1,
    name: 'Kimchi',
    image: 'https://www.maangchi.com/wp-content/uploads/2019/11/vegetarian-kimchi.jpg',
    rating: 5,
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Samgyeopsal-gui.jpg/1200px-Samgyeopsal-gui.jpg',
    rating: 4,
  },
  {
    id:3,
    name: 'Bibimbap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1200px-Dolsot-bibimbap.jpg',
    rating: 3.5,
  },
  {
    id:4,
    name: 'Doncasu',
    image: 'http://seonkyounglongest.com/wp-content/uploads/2017/07/donkasu-02-1000x667.jpg?x61413',
    rating: 2,
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image}/>;
// }

function App() {
  return (
    <div>
     {foodLike.map(dish => (
       <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
     ))}
    </div>   
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;
