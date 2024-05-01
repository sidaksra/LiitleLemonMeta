import React from 'react';
import { Link } from 'react-router-dom';

import AppetizerImg from '../images/appetizer.jpg';
import mainDishImg from '../images/main_dishes.jpg';
import pastaImg from '../images/pasta.jpg';
import saladImg from '../images/salad.jpg';
import dessertImg from '../images/dessert.jpg';
import drinksImg from '../images/drinks.jpg';

const Menu = () => {
  const pdfPath = '/MenuLL.pdf';
  return (
      <section className="facility">
        <h1>Little Lemon's Culinary Adventure</h1>
        <Link to={pdfPath} class="button-15" target="_blank">View Detailed Menu</Link>
        <div className="row">
          <div className="facility-col">
            <img src={AppetizerImg} alt="Appetizer" />
            <h3>Appetizers</h3>
            <p>Start your meal with our delicious appetizers that will tantalize your taste buds. Perfect for sharing or enjoying on your own.</p>
          </div>
          <div className="facility-col">
            <img src={mainDishImg}  alt="Main Dishes" />
            <h3>Main Dishes</h3>
            <p>Explore our selection of mouthwatering main dishes. From savory entrees to delectable seafood, we have something for everyone.</p>
          </div>
          <div className="facility-col">
            <img src={pastaImg}  alt="Pasta" />
            <h3>Pasta</h3>
            <p>Indulge in our flavorful pasta dishes, prepared with the finest ingredients and a variety of delicious sauces.</p>
          </div>
          <div className="facility-col">
            <img src={saladImg}  alt="Salad" />
            <h3>Salads</h3>
            <p>Enjoy our fresh and healthy salad options made with locally sourced ingredients and homemade dressings.</p>
          </div>
          <div className="facility-col">
            <img src={dessertImg}  alt="Desserts" />
            <h3>Desserts</h3>
            <p>Indulge in our sweet and tempting desserts that will satisfy your sweet tooth. A perfect ending to your meal.</p>
          </div>
          <div className="facility-col">
            <img src={drinksImg} alt="Drinks" />
            <h3>Drinks</h3>
            <p>Quench your thirst with our wide range of beverages. From refreshing cocktails to non-alcoholic options, we have it all.</p>
          </div>
        </div>
      </section>
  );
};

export default Menu;
