import React from "react";
import { Button, Text } from "../../components";
import { routes } from "../../routes";
import { ContainerWithBorder } from "../../components/Container";
import explosion from "./media/explosion.png";
import ventilator from "./media/ventilator.png";
import dashboard from "./media/dashboard.png";
import Layout from "../../components/layout";

export const RiseVentilator: React.FC<{}> = () => (
  <Layout>
    <ContainerWithBorder>
      <Text typography="headingLarge">Rise Ventilator</Text>
      <Text typography="headingSmall">
        Designed for manufacturing anywhere. Built to help everywhere.
      </Text>
      <br />
      <br />
      <Button
        title="Check it out Live"
        href={routes.PROJECT_RISE_VENTILATOR}
        onPress={() => {}}
      />
    </ContainerWithBorder>

    <ContainerWithBorder>
      <Text typography="bodyText">
        During the beginning of covid-19 in America we started 3D printing face
        shields for local hospitals and wanted to find more ways to get
        involved. Luckily, we were contacted by a company called{" "}
        <a
          href="https://meter.parts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meter
        </a>{" "}
        to build a landing page for their ventilator and to design out a
        dashboard for it.
      </Text>
    </ContainerWithBorder>
    <ContainerWithBorder>
      <Text typography="headingMedium">Landing Page</Text>
      <br />
      <Text typography="bodyText">
        The Landing page was scoped out and built so that Meter could get the
        ventilator in front of hospital staff as fast as possible. This meant
        that the landing page needed to:
      </Text>
      <ol>
        <li>Support all browsers.</li>
        <li>Support all breakpoints.</li>
        <li>Be fully accesible.</li>
        <li>Have Good SEO.</li>
        <li>Be able to support large amounts of traffic.</li>
      </ol>
      <Text typography="bodyText">
        The original desktop web design was done by{" "}
        <a
          href="https://thisisehsan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ehsan Noursalehi
        </a>{" "}
        and in order to save time Kait designed what it would look like on
        mobile and made sure it was implemented properly.
        <br />
        <br />
      </Text>
      <img alt="ventilator parts explosion" src={explosion} width="100%" />
      <img alt="ventilator side profile" src={ventilator} width="100%" />
    </ContainerWithBorder>

    <ContainerWithBorder>
      <Text typography="headingMedium">The Ventilator Dashboard</Text>
      <br />
      <Text typography="bodyText">
        This part of the project was designed by Kait. After gathering intel
        from users and product owners she decided that her design principles
        were:
      </Text>
      <ol>
        <li>
          <strong>Fix latent human error:</strong> Health providers that are
          lacking sleep and need to be able to view alert info as easily as
          possible. Get most important data above the fold and in front of
          health care provider’s eyes asap. Any ventilator experiencing an alert
          should.
          <ol>
            <li>
              Be automatically be kicked to the top of the ventilator list so
              that it is most likely above the fold
            </li>
            <li>Be overly obvious that something is wrong with the patient</li>
          </ol>
        </li>
        <li>
          <strong>Accessibility over fanciness:</strong> Make sure fonts etc
          meet accessibility standards. For example Make fonts 12px+ so that
          health providers that are lacking sleep or older in age can read data
          easily.
        </li>
        <li>
          <strong>Efficiency over bloat:</strong> Save space and view only the
          most important data without nesting. All data can be made available
          but only the most important data is top level.
        </li>
      </ol>
      <Text typography="bodyText">
        There ended up being some really cool features to this dashboard but all
        we can officially share is what is displayed on the landing page:
      </Text>
      <br />
      <br />
      <img alt="ventilator dashboard" src={dashboard} width="100%" />
    </ContainerWithBorder>
  </Layout>
);
