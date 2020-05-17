import React from "react";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import chickenInMarinade from "./chicken-in-marinade.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const TheBestChickenMarinadeRecipe: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      <h1>We love chicken</h1>
      <div>Here's one of our favorite recipe for grilling chicken</div>
      <div>
        Shout out to
        <a href="https://www.modernhoney.com/the-best-chicken-marinade-recipe/">
          {" Modern Honey "}
        </a>
        for the recipe
      </div>
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li>2 lbs (ish) of Chicken Breast Tenders, or Thighs</li>
          <li>1/3 cup olive oil</li>
          <li>3 tablespoons lemon juice</li>
          <li>3 tablespoons soy sauce</li>
          <li>2 tablespoons balsamic vinegar</li>
          <li>1/4 cup brown sugar</li>
          <li>1 tablespoon Worcestershire sauce</li>
          <li>3 garlic cloves (or 1/2 teaspoon garlic powder)</li>
          <li>1 ½ teaspoon salt</li>
          <li>1 teaspoon pepper</li>
        </ul>
      </div>
      <div>
        <h3>Instructions:</h3>
        <div>
          Mix together everything except the chicken and put into a large
          ziplock bag or tupperware container.
        </div>
        <div style={{ height: 20 }} />
        <div>
          Stab that chicken with a fork. Really go to town on it, on both sides,
          so the tasty marinade can get into every nook and cranny.
        </div>
        <div style={{ height: 20 }} />
        <div>
          Put the chicken into the marinade container and let it marinate for a
          few hours. How long? I don't know, probably at least an hour. Try it
          out and see what works for you 😄
        </div>
        <img src={chickenInMarinade} alt="chicken in marinade" />
        <div>
          <h2>Grilling:</h2>
          <div>
            Set the grill to medium heat. To keep the chicken from sticking,
            consider brushing a bit of oil onto the grilling area. Cook ~6
            minutes per side. Per
            <a href="https://www.thekitchn.com/the-right-internal-temperature-for-cooked-chicken-quick-kitchen-facts-216074">
              {" thekitchn "}
            </a>
            the recommended internal temp for chicken is 165° F
          </div>
        </div>
      </div>
      <div>
        <h2>Enjoy!</h2>
      </div>
    </div>
  </BlogContainer>
);
export default TheBestChickenMarinadeRecipe;
