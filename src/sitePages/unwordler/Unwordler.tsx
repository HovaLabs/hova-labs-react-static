import React from "react";
import * as S from "./UnwordlerStyles";
import { Button, Text } from "../../components";
import { ContainerWithBorder } from "../../components/Container";
import { routes } from "../../routes";
import Layout from "../../components/layout";

// IMAGES
import darkThemeImg from "./darkTheme.png";
import lightThemeImg from "./lightTheme.png";
import unwordlerHero from "./unwordler-hero.jpg";

export const Unwordler: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder
      backgroundImage={unwordlerHero}
      backgroundImageStyles={{ opacity: 0.2 }}
    >
      <div>
        <Text typography="headingLarge">Unwordler</Text>
      </div>
      <div>
        <Text typography="headingSmall">A tool for solving wordle</Text>
      </div>
      <S.ButtonPadding>
        <Button
          href={routes.PROJECT_UNWORDLER}
          onPress={() => {}}
          title="Check it out live"
        />
      </S.ButtonPadding>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <div>
        <div>
          <div>
            Like many people, we're all in on the{" "}
            <a href={routes.PROJECT_UNWORDLER_WORDLE}>Wordle</a> craze. However,
            one of us is much better at it than the other (Matt), which makes
            the other person crabby (Kait). Immediately after almost not solving
            her first Wordle, Kait got to work on a plan to build a quick Wordle
            solver tool in Figma.
          </div>
          <div>
            This tool was a great opportunity to try out simple.css and get to
            use Remix!
          </div>
        </div>
        <h3>Stack:</h3>
        <ul>
          <li>
            {" "}
            <a href={routes.PROJECT_UNWORDLER_SIMPLECSS}>Simple.css</a> - styles
            + theme
          </li>
          <li>
            <a href={routes.PROJECT_UNWORDLER_REMIX}>Remix</a> - javascript
            framework
          </li>
          <li>
            <a href={routes.PROJECT_UNWORDLER_NETLIFY}>Netlify</a> - deployments
          </li>
        </ul>
        <div>Some interesting parts of this project are:</div>
        <ul>
          <li>
            <a href="#smol">Smol project scope</a>
          </li>
          <li>
            <a href="#accessibility">Accessibility</a>
          </li>
          <li>
            <a href="#theme">Light theme/dark theme (always)</a>
          </li>
          <li>
            <a href="#bundle">Small package size</a>
          </li>
          <li>
            <a href="#fun">Keeping Wordle fun</a>
          </li>
          <li>
            <a href="#netlify">Super Easy CI via Netlify</a>
          </li>
        </ul>
        <h3 id="smol">A small project scope</h3>
        <div>
          To be frank, we are usually strapped for time and needed this project
          to be able to fit into a few kiddo nap times over a long weekend. In
          order to do this we opted for a simple interface with text inputs.
          Next time we have more free time we'd love to consider adding the
          following:
          <ul>
            <li>
              Update the UI to post each guessed word, and flag each letter as
              Green/Yellow/Black
            </li>
            <li>
              Use Remix as more than just a SPA renderer and get updates via
              form submissions (maybe the whole UI could be SSR and we could
              deliver a zero-js app).
            </li>
          </ul>
        </div>
        <h3 id="accessibility">Accessibility</h3>
        <div>
          Accessibility was a big issue for this interface because we realized
          that the color interface for Wordle doesn't have accessible web
          contrast for the colored tiles. For V1 we chose to not use white text
          on a yellow background (for Present letters) or white text over light
          gray background (for absent letters). However, for recognizability we
          did use white over green for the correct letters so that it did
          resemble the game. If we have time to go back for a version 2 we would
          solve for these issues.
        </div>
        <h3 id="theme">Light theme/dark theme (always)</h3>
        <div>
          Kait is always on and on about themes, and since the UI for this is
          relatively simple we used{" "}
          <a href={routes.PROJECT_UNWORDLER_SIMPLECSS}>simple.css</a> to set up
          a light theme / dark theme. The theme will match whatever is set for
          your OS.
        </div>
        <br />
        <img alt="unwordler in light theme" src={lightThemeImg} width="100%" />
        <img alt="unwordler in dark theme" src={darkThemeImg} width="100%" />
        <h3 id="bundle">Smol footprint (but could it be smaller?)</h3>
        <div>
          {" "}
          In order to make the package size as small as possible, we realized we
          didn't need a whole npm library for word aggregation. Instead, we:
          <ul>
            <li>
              Imported the{" "}
              <a href={routes.PROJECT_UNWORDLER_WORDLIST_ENGLISH}>
                wordlist-english
              </a>{" "}
              library
            </li>
            <li>Grabbed all of the 5-character-long English words</li>
            <li>Stored them locally </li>
            <li>Removed the library</li>
          </ul>
          It could be argued, ”why use React?”. But we'd like to highlight that
          we were able to move quick with react and actually ship *something*.
          Even if it's a bigger .js bundle than necessary.
        </div>
        <h3 id="fun">Keeping Wordle fun</h3>
        <div>
          Part of the euphoria of wordle is being stumped, thinking that a
          solution is impossible, and then rising from the ashes like the wordle
          phoenix that you are, on guess #6. This solver isn't for everyone, but
          even if you're against solvers (like Matt), replaying and seeing all
          of the guesses you had at every stage can give new life to each game.
        </div>
        <h3 id="netlify">
          Super easy continuous integration via Remix/Github/Netlify
        </h3>
        <div>
          <a href={routes.PROJECT_UNWORDLER_REMIX}>Remix</a> has come a long way
          since its inception. We're blown away with how easy it is to make a
          remix app that deploys any changes to the master branch.
        </div>
        <div>The steps were as follows:</div>
        <ul>
          <li>Run `npm init remix`</li>
          <li>Select netlify in the cli dialog</li>
          <li>Push the repo to github</li>
          <li>Connect netlify to the github repo</li>
          <li>
            You're done!{" "}
            <span role="img" aria-label="tada">
              🎉
            </span>
          </li>
        </ul>
      </div>
    </ContainerWithBorder>
  </Layout>
);
