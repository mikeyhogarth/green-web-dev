const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA(
  withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
      runtimeCaching,
    },
  })
);
