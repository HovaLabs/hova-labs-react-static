import React from "react";
import { Button } from "../../../components";
import { routes } from "../../../routes";

export const Hero = (): React.ReactElement => (
  <div>
    <div>Hovalin</div>
    <div>
      <Button
        href={routes.HOVALIN_4_4_FILES}
        onPress={() => {}}
        title="Download v4.0.0 .stl files"
      />
      <Button
        href={routes.HOVALIN_4_4_CAD}
        onPress={() => {}}
        title="Check out the CAD"
      />
      <Button
        href={routes.HOVALIN_REDDIT}
        onPress={() => {}}
        title="Discuss on Reddit"
      />
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href={routes.HOVALIN_V3}>
        Looking for v3?
      </a>
    </div>
  </div>
);
