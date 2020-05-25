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

const RecipeOatMealPancakes: React.FC<{}> = () => {
  const ingredients = {
    butter: { unit: "1 Tablespoon", name: "Unsalted Butter" },
    milk: { unit: "1 Cup", name: "Milk (regular or non-dairy)" },
    oats: { unit: "1 Cup", name: "Rolled Oats" },
    eggs: { unit: "2", name: "Eggs" },
    sugar: { unit: "1 Tablespoon", name: "Granulated Sugar" },
    flour: { unit: "2/3 Cup", name: "All-purpose Flour" },
    bakingPowder: { unit: "2 Teaspoons", name: "Baking Powder" },
    salt: { unit: "1/4 Teaspoons", name: "Kosher Salt" },
    cinnamon: { unit: "1/4 Teaspoons", name: "Ground Cinnamon" },
  };
  const ingredientsMap = Object.keys(ingredients).map((ingredient: string) => (
    <li>
      <strong>{ingredients[ingredient].unit}</strong>
      {` ${ingredients[ingredient].name}`}
    </li>
  ));

  function displayIngredientInfoInline(ingredients: any, key: string) {
    return (
      <strong>
        {` ${ingredients[key].unit} ${ingredients[key].name}
`}
      </strong>
    );
  }

  return (
    <>
      <BlogContainer blogManifest={{ ...blogManifest, hero }} variant="recipe">
        <ContainerFlexOnly>
          <ContainerContent disablePadding flexL="50" variant="left">
            <ContainerWithBorderSplit>
              <Text typography="headingMedium">Ingredients:</Text>
              <br />
              <ul>{ingredientsMap}</ul>
            </ContainerWithBorderSplit>
          </ContainerContent>
          <ContainerContent disablePadding flexL="50" variant="right">
            <ContainerWithBorderSplit>
              <Text typography="headingMedium">Instructions:</Text>
              <br />
              <ol>
                <li>
                  In a bowl, Microwave the butter for 30-60 seconds (until it
                  has completely melted).
{" "}
                </li>
{" "}
                <li>
                  Mix in the
                  {displayIngredientInfoInline(ingredients, "milk")}
+
{displayIngredientInfoInline(ingredients, "oats")} into the
                  bowl and let it sit for at least 5 minutes.
                </li>
                <li>Heat a pan at medium heat.</li>
                <li>Mix in everything else into the bowl. </li>
{" "}
                <li>
                  Scoop a pancake-amount of batter onto your
                  skillet/frying-pan/whatever-have-you.
                </li>
                <li>You can take it from here</li>
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
export default RecipeOatMealPancakes;
