import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import ingredients from "./ingredients.jpg";
import chickenInMarinade from "./chicken-in-marinade.jpg";
import chickenCooked from "./chicken-cooked.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";
import {
  ContainerWithBorderSplit,
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../../components/Container";
import { ContainerFlexOnly } from "../Blog/blogStyles";

const TheBestChickenMarinadeRecipe: React.FC<{}> = () => {
  const ingredientsMarinade = [
    { unit: "1/3 Cup", name: "Olive Oil" },
    { unit: "3 Tablespoons", name: "Lemon Juice" },
    { unit: "3 Tablespoons", name: "Soy Sauce" },
    { unit: "2 Tablespoons", name: "Balsamic Vinegar" },
    { unit: "1 Tablespoon", name: "Worcestershire Sauce" },
    { unit: "1/4 Cup", name: "Brown Sugar" },
    { unit: "3", name: "Garlic Cloves" },
    { unit: "1 ½ Teaspoon", name: "Salt" },
    { unit: "1 Teaspoon", name: "Peper" },
  ];
  const ingredientsMeat = [{ unit: "2 lbs (ish)", name: "Chicken" }];
  const ingredientsMarinadeMap = ingredientsMarinade.map((ingredient) => (
    <li>
      <strong>{ingredient.unit}</strong>
      {` ${ingredient.name}`}
    </li>
  ));
  const ingredientsMeatMap = ingredientsMeat.map((ingredient) => (
    <li>
      <strong>{ingredient.unit}</strong>
      {` ${ingredient.name}`}
    </li>
  ));

  return (
    <>
      <BlogContainer blogManifest={{ ...blogManifest, hero }} variant="recipe">
        <ContainerFlexOnly>
          <ContainerContent disablePadding flexL="50" variant="left">
            <ContainerWithBorderSplit>
              <Text typography="headingMedium">Ingredients:</Text>
              <br />
              <Text typography="headingSmall">Marinade</Text>
              <ul>{ingredientsMarinadeMap}</ul>
              <Text typography="headingSmall">Meat</Text>
              <ul>{ingredientsMeatMap}</ul>
            </ContainerWithBorderSplit>
          </ContainerContent>
          <ContainerContent disablePadding flexL="50" variant="right">
            <ContainerWithBorderSplit>
              <Text typography="headingMedium">Instructions:</Text>
              <br />
              <Text typography="headingSmall">Prep Work</Text>
              <ol>
                <li>
                  Mix together all of the marinade ingredients and put into a
                  large ziplock bag or tupperware container.
                </li>
                <li>
                  Stab that chicken with a fork. (Really go to town on it, on
                  both sides, so the tasty marinade can get into every nook and
                  cranny.)
                </li>
                <li>
                  Put the chicken into the marinade container and let it
                  marinate for a few hours. How long? I don't know, probably at
                  least an hour. Try it out and see what works for you.
                </li>
              </ol>
              <br />
              <Text typography="headingSmall">Grilling</Text>
              <ol>
                <li>Set the grill to medium heat.</li>
                <li>
                  Brush a bit of oil onto the grilling area to keep the Chicken
                  from sticking.
                </li>
                <li>
                  Cook ~6 minutes per side. (Per
                  <a href="https://www.thekitchn.com/the-right-internal-temperature-for-cooked-chicken-quick-kitchen-facts-216074">
                    {" thekitchn "}
                  </a>
                  the recommended internal temp for chicken is 165° F)
                </li>
              </ol>
              <div>
                Shout out to
                <a href="https://www.modernhoney.com/the-best-chicken-marinade-recipe/">
                  {" Modern Honey "}
                </a>
                for the recipe
              </div>
            </ContainerWithBorderSplit>
          </ContainerContent>
        </ContainerFlexOnly>
        <ContainerWithBorder hasTopMargin={false}>
          <img src={ingredients} alt="ingredients" width="100%" />
          <img src={chickenInMarinade} alt="chicken in marinade" width="100%" />
          <img src={chickenCooked} alt="chicken cooked" width="100%" />
        </ContainerWithBorder>
      </BlogContainer>
    </>
  );
};
export default TheBestChickenMarinadeRecipe;
