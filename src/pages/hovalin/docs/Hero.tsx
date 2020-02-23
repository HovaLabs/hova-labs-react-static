import React from "react";
import { Button } from "../../../components";

export const Hero = (): React.ReactElement => (
  <div>
    <div>Hovalin</div>
    <div>
      <Button
        href="https://s3-us-west-2.amazonaws.com/hovalin/v4.0.0/4_4/Hovalin+v4.0.0+4_4.zip"
        onPress={() => {}}
        title="Download v4.0.0 .stl files"
      />
      <Button
        href="https://a360.co/2Oj1DKr"
        onPress={() => {}}
        title="Check out the CAD"
      />
      <Button
        href="https://www.reddit.com/r/hovalin_community/"
        onPress={() => {}}
        title="Discuss on Reddit"
      />
    </div>
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.hovalabs.com/hova-instruments/hovalin/docs/v3.1.0"
      >
        Looking for v3?
      </a>
    </div>
  </div>
);
