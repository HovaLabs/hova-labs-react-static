import React from "react";
import Layout from "../../../components/layout";
import {
  ContainerWithBorder,
  ContainerFlex,
  ContainerContent,
} from "../../../components/Container";
import * as S from "./FAQStyles";

export const FAQ: React.FC<{}> = () => {
  return (
    <Layout>
      <ContainerWithBorder>
        <ContainerFlex>
          <ContainerContent flexL="100">
            <h1>Hova Instruments FAQ</h1>
            <div>
              <S.Q>
                Q: What are the copyrights to the Hova Instruments? (Hovalin,
                Hovalele)
              </S.Q>
              <div>
                A: The Hova Instruments are licensed as Creative Commons
                Attribution-ShareAlike 4.0 International License. This means
                that you are welcome to modify and distribute the design and
                derivatives thereof. You must, however, share your design under
                this same license and give credit to Hova Labs, LLC with all
                derivatives and copies. You may use the Hovalin for commercial
                purposes under these same constraints.
              </div>
              <div>
                If you wish to use assets from the Hovalin or Hovalin.com for
                any media or promotional purpose, please contact us.
              </div>
            </div>
            <div>
              <S.Q>
                Q: Can you print in any other size other than a full size
                violin?
              </S.Q>
              <div>
                A: It is our goal to release models of the Hovalin for all
                standard violin sizes. We currently have released 4/4. But next
                up is 1/2, followed by 1/4, and 3/4.
              </div>
              <div>
                Warning: If you try to scale the stl model, it will not print
                correctly.
              </div>
            </div>
            <div>
              <S.Q>Q: Is the Hovalin louder than standard violins?</S.Q>
              <div>
                A: No. Well, at least not yet. Following in the footsteps of
                other luthiers, our goal is to iterate on the violin's design to
                constantly increase acoustic output and improve playability.
              </div>
              <div>
                On the other hand, having a quieter instrument, with equal
                playability, has its benefits as an educational tool.
              </div>
            </div>
            <div>
              <S.Q>Q: Who is that cat in your cartoon?</S.Q>
              <div>
                A: That's our QA manager. Half kidding, she is our cat that
                tirelessly naps by our side while we work on this project. Her
                name is Cat Hova
              </div>
            </div>
            <div>
              <S.Q>
                Q: Why don’t I just buy a cheap new violin through Amazon?
              </S.Q>
              <div>
                A: Yes, yes you can. Here is the link to the best deal we’ve
                found. Even comes with a case, a bow, rosin, a tuner, and a
                spare set of strings.
              </div>
            </div>
            <div>
              <S.Q>Q: Why should I buy/build a 3D printed violin instead?</S.Q>
              <div>
                A: It's sturdier than standard violins and individual pieces can
                be easily replaced if broken.
              </div>
              <div>
                <strong>Bonus:</strong>
                You can customize the violin's shape and color.
              </div>
              <div>
                <strong>Extra-Bonus:</strong>
                3D printing is sooo cool.
              </div>
            </div>
            <div>
              <S.Q>
                Q: Do I need to re-orient the model to make it fit? Does the
                Hovalin fit on my printer?
              </S.Q>
              <div>
                Each .stl is oriented to be flush with the print bed. If it
                doesn't fit, it may need to be rotated slightly. Depending on
                the printer, the part may be too big for your printer.
              </div>
            </div>
            <div>
              <S.Q>Q: Do I need to generate support to print the violin?</S.Q>
              <div>No support is necessary to print the violin.</div>
            </div>
            <div>
              <S.Q>
                Q: Have you tried printing the violin with "________ Material"?
              </S.Q>
              <div>
                Thus far, we've only printed the violin in PLA. If you print the
                violin in any other material, share the photos/videos! We'd love
                to hear about your experiences.
              </div>
            </div>
            <div>
              <S.Q>
                Q: Does altering the infill or print settings change the sound
                quality?
              </S.Q>
              <div>
                We're not sure, but that makes sense. Let us know if you
                discover any cool tricks!
              </div>
            </div>
            <div>
              <S.Q>
                Q: Can you give us the CAD files instead of just the STL.
              </S.Q>
              <div>Of course! The CAD files are available here.</div>
            </div>
            <div>
              <S.Q>
                Q: Any plans for going bigger? Viola? Cello? Double Bass?
              </S.Q>
              <div>More info coming soon, but feel free to edit our CAD.</div>
            </div>
            <div>
              <S.Q>Q: What if I have more questions?</S.Q>
              <div>
                More questions? No problem! Let's keep the conversation going
                here.
              </div>
            </div>
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
    </Layout>
  );
};
