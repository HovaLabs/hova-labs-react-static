/* eslint-disable */
const rimraf = require("rimraf");
const fs = require("fs");
const path = require("path");
const camelCase = require("camel-case").camelCase;

const outputFilePath = path.join(__dirname, "..", "src", "routes.ts");
const pagesFolder = path.join(__dirname, "..", "src", "sitePages");
const pagesOutputFolder = path.join(__dirname, "..", "src", "pages");

const routesArray = ["/404"];

function findAllRoutes(route) {
  fs.readdirSync(route).forEach((file) => {
    const routePath = path.join(route, file);
    // looking recrsively for directories that start with lower-case characters
    // "foo-bar/" => legit route, "Foo-bar/" => nope
    if (
      file[0].toLowerCase() === file[0] &&
      fs.statSync(routePath).isDirectory()
    ) {
      routeUrl = routePath.replace(pagesFolder, "");
      routesArray.push(routeUrl);
      findAllRoutes(routePath);
    }
  });
}

findAllRoutes(pagesFolder);

// delete the "pages" directory
// reconstruct it based on non-capitalized routes from sitePages directory
rimraf.sync(pagesOutputFolder);
fs.mkdirSync(pagesOutputFolder);
fs.writeFileSync(
  path.join(pagesOutputFolder, "index.ts"),
  `import page from "../sitePages";\n\nexport default page;\n`,
);
routesArray.forEach((r) => {
  r = r.split("\\").join("/");
  fs.mkdirSync(path.join(pagesOutputFolder, r));
  fs.writeFileSync(
    path.join(pagesOutputFolder, r, "index.ts"),
    `import page from "${r
      .split("/")
      .map((a) => "../")
      .join("")}sitePages${r}";\n\nexport default page;\n`,
  );
});

const routeObject = {
  HOMEPAGE: "/",
  HOVALIN_REDDIT: "https://reddit.com/r/hovalin_community",
  HOVALIN_4_4_FILES:
    "https://s3-us-west-2.amazonaws.com/hovalin/v4.0.0/4_4/Hovalin+v4.0.0+4_4.zip",
  HOVALIN_4_4_CAD: "https://a360.co/2R5CSBk",
  HOVALIN_V3: "https://www.hovalabs.com/hova-instruments/hovalin/docs/v3.1.0",
  LIST_CR10S: "https://amzn.to/31Gsaa1",
  LIST_ENDER3: "https://amzn.to/3mzCfxF",
  LIST_HATCHBOX_PLA:
    "https://www.amazon.com/gp/product/B00J0ECR5I/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00J0ECR5I&linkCode=as2&tag=hovalin-20&linkId=d68dfe6b34366d8ac8358034ed944540",
  LIST_TUNERS_BLACK: "https://amzn.to/34vsNFk",
  LIST_TUNERS_CHROME: "https://amzn.to/3oqv3oZ",
  LIST_TUNERS_GOLD: "https://amzn.to/2J5wFVc",
  LIST_BELLAFINA_ROSIN:
    "http://www.amazon.com/gp/product/B0064RM2IG/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0064RM2IG&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=6IC23B5RPEXCYDLX",
  LIST_LETO_ROSIN:
    "http://www.amazon.com/gp/product/B0087V0L9O/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0087V0L9O&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=NK3T7EMZGCHCCHAK",
  LIST_BERNARDEL_ROSIN:
    "http://www.amazon.com/gp/product/B000F3HK78/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000F3HK78&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=JVF4UE6OTTAHZDPY",
  LIST_DADDARIO_PRELUDE:
    "http://www.amazon.com/gp/product/B0002Y6BJI/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0002Y6BJI&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=RMBKSKN5ZX76LXDL",
  LIST_DADDARIO_HELICORE:
    "http://www.amazon.com/gp/product/B0002D08OI/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0002D08OI&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=WBFF4EM3CVW3HIDM",
  LIST_THOMASTIK_REDS:
    "http://www.amazon.com/gp/product/B001LRJ6KG/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B001LRJ6KG&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=TBPRSCOJDC5WYJXK",
  LIST_CF_ROD:
    "https://www.amazon.com/gp/product/B00TF8UY9A/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00TF8UY9A&linkCode=as2&tag=hovalin-20&linkId=f9f34fbc52611a560fe12e569165050d",
  LIST_VIOLINSMART_BOW:
    "http://www.amazon.com/gp/product/B000VO1EA0/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B000VO1EA0&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=FWQTVZNADTN27EOH",
  LIST_BALANCED_BOW:
    "http://www.amazon.com/gp/product/B00DW12HR8/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00DW12HR8&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=MT5E5EDF44KDROUF",
  LIST_CF_BOW:
    "http://www.amazon.com/gp/product/B00FTSOPEK/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00FTSOPEK&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=SLYIPI5DS74SAZXG",
  LIST_FISHMAN_PICKUP:
    "http://www.amazon.com/gp/product/B0002IHFGW/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B0002IHFGW&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=TBDJ2G5KRNCKK5ZB",
  LIST_SOCKET_WRENCH_SET:
    "http://www.amazon.com/gp/product/B00004TBL1/ref=as_li_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00004TBL1&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=I5FGWGZEFN5MSXEJ",
  LIST_BLUE_TAPE:
    "http://www.amazon.com/gp/product/B00LAJNM7S/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B00LAJNM7S&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=KASDE2Q4HYHUFPTG",
  LIST_PRINT_SCRAPER:
    "http://www.amazon.com/gp/product/B01DVYLJ3S/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&amp;camp=1789&amp;creative=9325&amp;creativeASIN=B01DVYLJ3S&amp;linkCode=as2&amp;tag=hovalin-20&amp;linkId=4BOVD54GNA7UMJKK",
  PROJECT_WALDO: "https://waldo-rails.herokuapp.com/",
  PROJECT_TSN: "http://www.thesynesthesianetwork.com/",
  PROJECT_HYDRAPRINT:
    "https://www.github.com/autodesk/machine-collaboration-utility",
};

routesArray.forEach((r) => {
  r = r.split("\\").join("/");

  const routeString = r
    .slice(1)
    .toUpperCase()
    .replace(/(\/|-)/g, "_");
  if (routeObject[routeString]) {
    throw new Error(`duplicate route "${routeString}", oh noes!`);
  }
  routeObject[routeString] = r;
});

const fileString = "export const routes = ";

fs.writeFileSync(outputFilePath, `${fileString}${JSON.stringify(routeObject)}`);
