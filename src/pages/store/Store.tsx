import React from "react";
import hovalin from "./hovalinv4.png";

export const Store = (): React.ReactElement => (
  <div style={{ display: "flex" }}>
    <div>
      <img src={hovalin} alt="hovalin" style={{ height: "70vh" }} />
    </div>
    <div>
      <div>The Hovalin</div>
      <div>$600</div>
      <div>
        <div>Includes</div>
        <ul>
          <li>3D printed parts</li>
          <li>Carbon Fiber Rod</li>
          <li>Tuners</li>
          <li>Strings</li>
        </ul>
      </div>
      <div>
        <div>Select Color</div>
        <select>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
          <option value="grey">Grey</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>
      </div>
      <div>
        <button type="button">Purchase</button>
      </div>
      <div>NOTE:</div>
      <div>
        All violin parts are printed with Hatchbox PLA filament. Gold, Silver,
        Bronze, and Copper are reference colors, and are not inferring that the
        violin will actually be made with any precious metal. Checkout Hatchbox
        PLA color here. Official Hovalins come with a hovalin logo embeded on
        the tailpiece.
      </div>
      <div>All parts are made to order. Shipping estimate is 2 weeks.</div>
      <div>
        Shipping outsite of continental United States will be subject to an
        extra charge.
      </div>
    </div>
  </div>
);
