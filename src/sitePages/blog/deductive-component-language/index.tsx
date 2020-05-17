import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import { Button } from "../../../components/Button/Button";
import blogManifest from "./manifest.json";
import hero from "./hero.jpg";
import { Code, Highlight, Quote } from "../Blog/blogStyles";
import { BlogContainer } from "../../../components/Blog/BlogContainer";
import imgMeme from "./Media/meme.png";
import imgFigma from "./Media/figma.png";
import imgStorybook from "./Media/storybook.png";
import imgWhyCare from "./Media/whatDoYouWant.gif";

const DeductiveComponentLanguage: React.FC<{}> = () => {
  return (
    <BlogContainer blogManifest={{ ...blogManifest, hero }}>
      <Text typography="headingSmall">TLDR;</Text>
      <ol>
        <li>
          <strong>
            <a href="#what-is-component-language">
              What is Component Language?
            </a>
          </strong>
        </li>
        <li>
          <strong>
            <a href="#why-care">Why care about Component Naming?</a>
          </strong>
        </li>
        <li>
          <strong>
            <a href="#deductive-component-language">
              Deductive Component Language.
            </a>
          </strong>
        </li>
        <li>
          <strong>
            <a href="#transform-process">
              How Deductive Component Language Can Transform your Design
              Process, Engineering Implementation, and Documentation.
            </a>
          </strong>
        </li>
        <li>
          <strong>
            <a href="#conclusion">Conclusion.</a>
          </strong>
        </li>
      </ol>

      <img alt="what happens when you try to name a button" src={imgMeme} />

      <div id="what-is-component-language" />
      <br />
      <Text typography="headingMedium">What is Component Language?</Text>
      <p>
        Languages are generally made up of a structured set of syntactic rules.
        There are spoken languages (English, etc), programming languages
        (Javascript, etc), domain specific slang (tech slang, etc), etc.
        Choosing a common language when talking about implementing design with
        code can be a hard thing to do. Such an idea crosses all concepts of
        language (spoken/programming/domain specific) and by mindfully unifying
        design & engineering behind a naming/organization system (“language”)
        you can make it easier to convey product ideas and make the process of
        implementing those ideas easier and faster to realize.
{" "}
        <Highlight>
          At it’s best, “Component Language” is the process that organizes &
          definitively names a component in your codebase and design files.
        </Highlight>
{" "}
        This process most likely won’t happen organically, especially on larger
        teams. It requires mindful structure and 100% “buy-in” from product,
        design, and engineering teams.
      </p>
      <div id="why-care" />
      <br />
      <Text typography="headingMedium">Why Care about Component Language?</Text>
      <img alt="why care about component language" src={imgWhyCare} />
      <p>
        A quick google of “how to name components” will give you a few very
        opinionated articles (yes, including this one). Why are so many people
        passionate about this?
        <Highlight>
          It’s because component naming and organization reflect the state of
          product organization of an entire company.
        </Highlight>
        Not having a set system to name & organize your components is an
        indicator that your company may also have:
      </p>
      <ol>
        <li>
          <strong>
            Fragmented communication between product, design, and engineering
            teams.
          </strong>
          <p>
            When product teams talk about a “Announcement” concept, design teams
            call it “Banner”, and engineering teams call it whatever the person
            writing the ticket thinks works in the moment (probably something
            like “Alert”), it’s hard to keep deliverables and expectations
            straight. Much refactoring ensues. Much duplicate code. Much
            sadness.
          </p>
        </li>
        <li>
          <strong>
            Difficulty navigating through the codebase & design files quickly &
            coherently.
          </strong>
          <p>
            This doesn’t just concern “new hires.” If you don’t have a set
            component organization & language, even the most familiar engineers
            & designers on a team will spend some time second guessing where
            something lives instead of being able to locate it quickly. Even
            worse, they might create files in places no one else would think to
            look.
          </p>
        </li>
        <li>
          <strong>
            Lack of clarity about what a component is supposed to do.
          </strong>
          <p>
            Without a set system in place to name components, you’ll run into
            the possibility of creating several components that do similar
            things in design and engineering. In some cases this leads to
            duplicate silos of work that can slow down development of new
            features. (why build a component again?)
          </p>
        </li>
        <li>
          <strong>A rough “Design handoff process” to engineering. </strong>
          <p>
            How does an engineer know what to implement if design calls it
            something different than what’s in the codebase? How do they quickly
            know what reusable components already make up that design so that
            they don’t make duplicate code? How does a designer know what
            components engineering has already made?
          </p>
        </li>
      </ol>
      <p>
        But enough about when things go wrong… how do we prevent these pitfalls?
      </p>
      <div id="deductive-component-language" />
      <br />
      <Text typography="headingMedium">Deductive Component Language</Text>
      <Quote>
        <p>TLDR;</p>
        <p>// File Structure:</p>
        <strong>
          {
            "<genericGroup>/<genericGroup><functionality>/<genericGroup><functionality>.<fileExtension>"
          }
        </strong>
        <p>// For Example:</p>
        <p>
          <Code>Blog/BlogHeroArea/BlogHeroArea.tsx</Code>
        </p>
      </Quote>
      <p>
        The general idea of Deductive Component Language is that you work your
        way down from the most general to the most specific attributes to name
        your component (hence “Deductive”). This (ideally) collaborative process
        of coming up with a component name is important because it should
        encourage design & engineering to have real conversations about what a
        component’s intentions are. Deductive Component Language can be boiled
        down to asking yourself only two questions while making a component:
      </p>
      <ol>
        <li>
          <strong>What does the component generally concern?</strong>
          <p>
            This could be a model (like in an MVC framework) or general
            functionality (like “Container,” “Dialog,” or “Input”). For example,
            if it is a component that is generally used for your “Blog” on your
            website, then the answer to this question is “Blog”. This answer
            becomes the parent folder name where this component lives & the
            first part of the component’s final name. This parent-level term can
            be plural or singular but you should pick one or the other so that
            all folders have the same structure (e.g.: “Blog” or “Blogs” ). So
            far our component has this structure:
          </p>
          <Code>Blog/Blog____/Blog____.tsx</Code>
        </li>
        <li>
          <strong>What does this component do?</strong>
          <p>
            This is the hyper-specific functionality of the component. For
            example, if it is a component that displays all of the logic for
            your blog’s hero areas (on blog display pages) then the answer to
            this question is something like “well, it’s the Hero Area”. This
            answer becomes the second part of the component’s name. In the end,
            this component’s name & structure looks something like:
          </p>
          <Code>Blog/BlogHeroArea/BlogHeroArea.tsx</Code>
        </li>
      </ol>
      <p>
        At the end of this system you now have a component name that tells you:
      </p>
      <ul>
        <li>Where the component lives.</li>
        <li>What the component generally concerns.</li>
        <li>What the component specifically does.</li>
      </ul>

      <Text typography="headingSmall">Advanced usage:</Text>
      <p>
        If you keep the generic pattern of going from the most broad to the most
        specific attributes and adopt specific patterns of naming, you will
        easily start grouping “like” components together alphabetically in your
        code editor. For example:
      </p>

      <Code>
        <p>
          // All your dialogs are grouped in a folder and those with "create"
          (in this case, create="AddNew") functionality are also grouped
          alphabetically in a folder by your code editor:
        </p>
        <p>
          {
            "Dialog/DialogAddNewCat\nDialog/DialogAddNewComment\nDialog/DialogAddNewTitle"
          }
        </p>
        <p>
          // If that is too many high level folders, you can now nest them like:
        </p>
        <p>
          DialogAddNew/DialogAddNewCat DialogAddNew/DialogAddNewComment
          DialogAddNew/DialogAddNewTitle
        </p>
      </Code>
      <div id="transform-process" />
      <br />
      <Text typography="headingMedium">
        How Deductive Component Language Can Transform your Design Process,
        Engineering Implementation, and Documentation.
      </Text>
      <p>
        Cool, so how does this concept transform your entire company? Deductive
        Component Language can completely transform the typically hellish design
        handoff process.
      </p>
      <Text typography="headingSmall">
        <strong>1. Design Process:</strong>
      </Text>
      <img src={imgFigma} />
      <p>In Figma (for example, but this also applies to Sketch ):</p>
      <p>
        Figma File = Most general attribute (Deductive Component Language
        Parent)
      </p>
      <p>
        Figma Frame = Master Component (With Full, precise Deductive Component
        Language name)
      </p>
      <p>
        Depending on how you group everything in the Figma left side bar, the
        Figma file IS the dev delivery file for engineering. If you have a
        designer who is also an experienced engineer, then you can scope out
        engineering implementation git issues based on named groupings and
        instances of a master component.
      </p>

      <Text typography="headingSmall">
        <strong>2. Engineering Implementation</strong>
      </Text>
      <p>
        If the Figma file has everything needed for implementation (styles,
        component groupings) then implementing the component is a no brainer.
      </p>

      <strong>A Figma → App translation is:</strong>
      <p>
        Figma File = Component’s parent folder (Deductive Component Language
        Parent)
      </p>
      <p>
        Figma Frame & Master Component = Specific component folder & component
        names
      </p>
      <p>For Example: Events/EventsListItem/EventsListItem.tsx</p>
      <Text typography="headingSmall">
        <strong>3. Component Documentation</strong>
      </Text>
      <img
        alt="what happens when you try to name a button"
        src={imgStorybook}
      />
      <p>
        Since the names & organization are the same between Figma & the app,
        Figma is great to look towards as a source of documentation. However,
        for developers, we love platforms like Storybook that allow us to poke
        around at components to see how they work. If you’re using Storybook,
        (you guessed it) then you’d organize your components the same way as in
        the app:
      </p>
      <strong>A Basic Figma/App → Storybook translation is:</strong>
      <p>
        Figma File = Storybook Left Sidebar Header (Deductive Component Language
        Parent)
      </p>
      <p>Figma Frame & Master Component = Storybook top level Folder</p>
      <div id="conclusion" />
      <br />
      <Text typography="headingMedium">Conclusion</Text>
      <p>
        Having a unified system for naming and organizing your components in
        your app, design, and documentation is key to keeping design and
        development efficient. Deductive Component Language is a great way to
        encourage open conversations between design & engineering to ensure
        components have specific functionality and everyone is on the same page
        on the direction of the app. However, any system can only be good as
        long as it is a collaborative, well-documented, and easy-to-follow
        process.
      </p>
      <Button
        href="https://medium.com/@HovaLabs/how-to-name-ui-components-unify-your-product-design-and-code-with-deductive-component-language-55fc787b7cd3"
        onPress={() => {}}
        title="Read this article on Medium"
      />
    </BlogContainer>
  );
};

export default DeductiveComponentLanguage;
