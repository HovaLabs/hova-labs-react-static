import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";
import {
  ContainerWithBorderSplit,
  ContainerWithBorder,
  ContainerContent,
} from "../../../components/Container";
import { ContainerFlexOnly } from "../Blog/blogStyles";

const TheBestChickenMarinadeRecipe: React.FC<{}> = () => {
  const ingredientsDry = [
    { unit: "1 Tablespoon", name: "Granulated Sugar" },
    { unit: "2/3 Cup", name: "All-purpose Flour" },
    { unit: "2 Teaspoons", name: "Baking Powder" },
    { unit: "1/4 Teaspoons", name: "Kosher Salt" },
    { unit: "1/4 Teaspoons", name: "Ground Cinnamon" },
  ];
  const ingredientsOatmeal = {
    oats: { unit: "1 Cup", name: "Rolled Oats" },
    milk: { unit: "1 Cup", name: "Milk (regular or non-dairy)" },
    butter: { unit: "1 Tablespoon", name: "Unsalted Butter" },
  };
  const ingredientsDryMap = ingredientsDry.map((ingredient) => (
    <li>
      <strong>{ingredient.unit}</strong>
      {` ${ingredient.name}`}
    </li>
  ));
  const ingredientsOatmealMap = Object.keys(ingredientsOatmeal).map(
    (ingredient) => (
      <li>
        <strong>{ingredientsOatmeal[ingredient].unit}</strong>
        {` ${ingredientsOatmeal[ingredient].name}`}
      </li>
    ),
  );

  function displayIngredientInfoInline(ingredients: any, key: string) {
    return ` ${ingredients[key].unit} ${ingredients[key].name} `;
  }

  return (
    <>
      <BlogContainer blogManifest={{ ...blogManifest, hero }} variant="recipe">
        <ContainerFlexOnly>
          <ContainerContent disablePadding flexL="50" variant="left">
            <ContainerWithBorderSplit>
              <Text typography="headingMedium">Ingredients:</Text>
              <br />
              <Text typography="headingSmall">Dry</Text>
              <ul>{ingredientsDryMap}</ul>
              <Text typography="headingSmall">Oatmeal</Text>
              <ul>{ingredientsOatmealMap}</ul>
            </ContainerWithBorderSplit>
          </ContainerContent>
          <ContainerContent disablePadding flexL="50" variant="right">
            <ContainerWithBorderSplit>
              <Text typography="headingMedium">Instructions:</Text>
              <br />
              <Text typography="headingSmall">Blending</Text>
              <ol>
                <li>Mix together all of the Dry ingredients in a bowl.</li>
                <li>
                  In another bowl, prepare the Oatmeal by microwaving the
                  {displayIngredientInfoInline(ingredientsOatmeal, "butter")}
                  for 30-60 seconds (until it has completely melted). Then mix
                  in the
                  {displayIngredientInfoInline(ingredientsOatmeal, "milk")}
                  and
                  {displayIngredientInfoInline(ingredientsOatmeal, "oats")}
                  and let it sit for at least 5 minutes.
                </li>
                <li>Mix your oatmeal into your dry ingredients</li>
              </ol>
              <br />
              <Text typography="headingSmall">Frying</Text>
              <ol>
                <li>
                  Start heating a pan at medium heat. Give it like, 5 minutes to
                  heat up.
                </li>
                <li>
                  Scoop a pancake-amount of batter onto your
                  skillet/frying-pan/whatever-have-you.
                </li>
                <li>You can take it from here.</li>
              </ol>
              <br />
            </ContainerWithBorderSplit>
          </ContainerContent>
        </ContainerFlexOnly>
        <ContainerWithBorder hasTopMargin={false}>
          <img src={hero} width="100%" />
        </ContainerWithBorder>
      </BlogContainer>
    </>
  );
};
export default TheBestChickenMarinadeRecipe;
