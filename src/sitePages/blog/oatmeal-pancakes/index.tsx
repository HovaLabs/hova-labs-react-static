import React from "react";

import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { BlogContainer } from "../../../components/Blog/BlogContainer";

const BoilerplateBlogPost: React.FC<{}> = () => (
  <BlogContainer blogManifest={{ ...blogManifest, hero }}>
    <div>
      <h1>We love pancakes</h1>
      <div>Here's our favorite recipe for oatmeal pancakes</div>
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li>1 cup of rolled oats</li>
          <li>1 milk (regular or non-dairy)</li>
          <li>1 tablespoon unsalted butter</li>
          <li>1 tablespoon granulated sugar</li>
          <li>2/3 cup all-purpose flour</li>
          <li>2 teaspoons baking powder</li>
          <li>1/4 teaspoon kosher salt</li>
          <li>1/4 teaspoon ground cinnamon</li>
        </ul>
      </div>
      <div>
        <h3>Instructions:</h3>
        <div>
          Microwave the butter for 30-60 seconds (until it has completely
          melted). Then mix in the milk and oats and let it sit for at least 5
          minutes. Meanwhile, start heating a pan at medium heat.
        </div>
        <div>....5 minutes later</div>
        <div>
          Mix in everything else, scoop a pancake-amount of batter onto your
          skillet/frying-pan/whatever-have-you.
        </div>
      </div>
      <div>
        <h2>Enjoy!</h2>
      </div>
    </div>
  </BlogContainer>
);
export default BoilerplateBlogPost;
