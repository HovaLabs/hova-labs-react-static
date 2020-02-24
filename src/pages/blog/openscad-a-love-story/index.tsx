import React from "react";
import { Text } from "@hova-labs/bento-box-web";

import hovalinStick from "./Media/hovalin-stick.png";

import blogManifest from "./manifest.json";
import { BlogContainer } from "../../../components/BlogContainer";

export default (): React.ReactElement => (
  <BlogContainer blogManifest={blogManifest}>
    <div>
      <Text>
        There is one line of code to create a cube that is 10mm by 20mm by 30mm.
        The Open Source scripting CAD program OpenSCAD allowed me to make 3d
        objects using only code, and I fell in love with it.
      </Text>
    </div>
    <code>
      <Text>cube([10, 20, 30]);</Text>
    </code>
    <div>
      <Text>
        OpenSCAD is great for parametric modeling. If you want to make ten
        objects, each with a hole that is 0.2mm larger than the last, OpenSCAD
        is the way to go. Unfortunately, I discovered throughout my design
        process that it can easily turn into spaghetti code when creating
        complex 3d models.
      </Text>
    </div>
    <div>
      <Text>
        The hovalin design began as 100 lines of OpenSCAD code. Despite all of
        its shortcomings, hovalin v0.1 created the basic concepts for a 3d
        printable violin that can extend to any CAD program. As a salute to
        humble beginnings, check out my "hello world" violin neck.
      </Text>
    </div>
    <img src={hovalinStick} alt="hovalin stick rendering" />
    <code>
      <Text>
        {`
    /// Constants ///

    slice = .1; // 3d printer layer height  
    
    nudge = 0.0001; // used to push the objects just barely to resolve any manifold issues  
    
    precision = 50; // increase to smooth cylinders or crash computer  
    
    pi = 3.14159; // tasty pi  
    
    /// End Constants ///
    
    
    
    neck_length = 280; // Neck Length
    
    
    neck_width = 28.6; // width of fretboard at section nearest to the nut  
    
    neck_top_arch_rad = 3; // distance from top of fretboard to point between the edges  
    
    neck_top_rad = (pow(neck_width,2) + 4*pow(neck_top_arch_rad,2))/(8*neck_top_arch_rad); //radius of circle formed by nut-side rounded fretboard  
    
    neck_bot_arch_rad = 12; // height of center of nut-side fretboard bottom compared to edges  
    
    neck_bot_rad = (pow(neck_width,2) + 4*pow(neck_bot_arch_rad,2))/(8*neck_bot_arch_rad); //radius of circle formed by nut-side rounded fretboard bottom
    
    
    bridge_width = 45; // width of fretboard at section nearest to the bridge  
    
    bridge_top_arch_rad = 10; // distance from top of fretboard to point between the edges  
    
    bridge_top_rad = (pow(bridge_width,2) + 4*pow(bridge_top_arch_rad,2))/(8*bridge_top_arch_rad); //radius of circle formed by bridge-side rounded fretboard  
    
    bridge_bot_arch_rad = 25; // distance from bottom of bridge side violin neck to base compared to edges  
    
    bridge_bot_rad = (pow(bridge_width,2) + 4*pow(bridge_bot_arch_rad,2))/(8*bridge_bot_arch_rad); // radius of circle formed by bridge-side rounded fretboard bottom  
    
    bot_angle = atan2((bridge_bot_arch_rad - neck_bot_arch_rad), neck_length); // acute angle formed by base of violin as it moves towards the bridge
    
    
    fretboard_thick = 4; // filler between to arch and bottom arch of the violin neck  
    
    violin_neck();
    
    
    module violin_neck(){  
    
      hull(){
    
        linear_extrude(height = slice){
    
          neck_slice_top();
    
          neck_slice_middle();
    
          neck_slice_bot();
    
        }
    
    
        translate([0,0,neck_length - slice])
    
        linear_extrude(height = slice){
    
          bridge_slice_top();
    
          bridge_slice_middle();
    
          bridge_slice_bot();
    
        }
    
      }
    
    }
    
    
    module neck_slice(){  
    
      neck_slice_top();
    
      neck_slice_middle();
    
      neck_slice_bot();
    
    }
    
    
    module neck_slice_top(){  
    
      intersection(){
    
        translate([-neck_width/2,fretboard_thick])
    
        square([neck_width,neck_top_arch_rad]);
    
        translate([0,-neck_top_rad + neck_top_arch_rad + fretboard_thick])
    
        circle(r = neck_top_rad, $fn = precision*5);
    
      }
    
    }
    
    
    module neck_slice_middle(){  
    
      translate([-neck_width/2,0])
    
      square([neck_width, fretboard_thick]);
    
    }
    
    
    module neck_slice_bot(){  
    
      intersection(){
    
        translate([-neck_width/2,-neck_bot_arch_rad])
    
        square([neck_width,neck_bot_arch_rad]);
    
        translate([0,neck_bot_rad-neck_bot_arch_rad])
    
        circle(r = neck_bot_rad, h = slice, $fn = precision);
    
      }
    
    }
    
    
    module bridge_slice_top(){  
    
      intersection(){
    
        translate([-bridge_width/2,fretboard_thick])
    
        square([bridge_width,bridge_top_arch_rad*2]);
    
        translate([0,fretboard_thick-bridge_top_rad+bridge_top_arch_rad])
    
        circle(r = bridge_top_rad, $fn = precision*5);
    
      }
    
    }
    
    
    module bridge_slice_middle(){  
    
      translate([-bridge_width/2,0])
    
      square([bridge_width, fretboard_thick]);
    
    }
    
    
    module bridge_slice_bot(){  
    
      intersection(){
    
        translate([-bridge_width/2,-bridge_bot_arch_rad])
    
        square([bridge_width,bridge_bot_arch_rad]);
    
        translate([0,bridge_bot_rad-bridge_bot_arch_rad])
    
        circle(r = bridge_bot_rad, $fn = precision);
    
      }
    
    }
    
    `}
      </Text>
    </code>
    <div>
      <Text>More code from the OpenScad attempt at Hovalin can be found</Text>
      <a href="https://github.com/matthova/hovalin.git">
        <Text> here</Text>
      </a>
      <Text>.</Text>
    </div>
  </BlogContainer>
);
