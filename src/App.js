import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "knotted",
    image:
    "https://dive.hyundaicard.com/resources/images/upload/content/b4a5d7f86591419a98de3666f017f29e.jpg"
  },
  {
    id:2,
    name: "strawberry",
    image:
    "http://www.fsnews.co.kr/news/photo/201802/26787_22850_4650.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "downtowner",
    image:
    "https://i.pinimg.com/originals/9b/7e/e0/9b7ee02a1b9ee443f740cf46df4dcb1c.jpg",
    rating: 3
  },
  {
    id:4,
    name: "DDukboki",
    image:
    "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/17/6fb9bfa566c0c3fec18080b5e927c2661.jpg",
    rating: 2
  },
  {
    id:5,
    name: "pizza",
    image:
    "https://media.istockphoto.com/photos/napolitian-italian-pizza-at-restaurant-picture-id1148696744",
    rating: 3.5
  }
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
