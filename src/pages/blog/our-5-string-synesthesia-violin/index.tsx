import React from "react";

export default (): React.ReactElement => (
  <div>
    Since the beginning of our pursuit of 3D printing violins, we've had a very
    specific list of checkboxes in mind for our "no holds barred", perfect
    violin. 3D printable on a "Desktop" printer 5 String Barbera pickup
    Translucent with LEDs in it Responsive to sound and pitch Just checking off
    the first box was quite an endeavor. We're nowhere near done tweaking our
    design, but we were so happy to have our first working prototype of what I
    call, the "Synesthesia Projector" Hovalin. Here's a clip of the violin in
    action: Here's a quick walkthrough of the build: We added a slot for a 5
    string Barbera pickup, as well as an on/off switch for the electronics.
    Below that pickup, (You can sort of see it through the F hole) we have a
    cheapo piezo pickup that will be used to drive the pitch and level
    detection. In order to charge the LED system, we added a usb-micro extension
    cable. To mount it in place, we covered a chopstick in hot glue and
    proceeded to apply it liberally to the general area. All signal processing
    is done by the Teensy 3.6 and the Teensy Audio board. The goal of the Teensy
    is to convert the input microphone's pitch into a specific color, and have
    the volume drive the brightness. Some interesting bugs I ran into: If I
    started to drive more than ~40 neopixels, I would start to experience ring
    modulation in my audio processing sketch. The noise generated from driving
    neopixels could be picked up by the audio circuit. If it picked up enough
    noise from driving the LEDs, it would eventually reach a never-ending
    noise/light/feedback loop where the noise generated from the LEDs would
    create audio which would make the LEDs brighter, and so on. The Teensy 3.2
    (or perhaps my poor soldering) was more susceptible to noise. I'd love to
    improve the sketch, but for now, it's working just fine. My guess is that
    having a dedicated brain for the neopixels will make things run a lot
    smoother. The violin has a gamut of connections rolling out of it. I didn't
    get a proper photo, but the Teensy on/off switch works by breaking a USB
    cable's 5V (red wire). Last, but not least, we painted in the H logo on the
    Hovalin. Well, there you have it, our 5 string Synesthesia Projector Hovalin
    is built and working. Can't wait to post more videos of it in action soon.
  </div>
);
