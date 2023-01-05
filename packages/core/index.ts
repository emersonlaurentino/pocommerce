import { NextConfig } from "next";
import { WebpackConfigContext } from "next/dist/server/config-shared";
import { Configuration } from "webpack";
import { PocommerceConfig } from "./types";

function pocommerce(pocommerceConfig: PocommerceConfig) {
  function withPocommerce(nextConfig: NextConfig) {
    return Object.assign({}, nextConfig, {
      webpack(config: Configuration, options: WebpackConfigContext) {
        config.resolve?.extensions?.push(".ts", ".tsx");

        config.module?.rules?.push({
          test: /\.tsx?$/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: require.resolve("./loader"),
              options: pocommerceConfig,
            },
          ],
        });

        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, options);
        }

        return config;
      },
    });
  }

  return withPocommerce;
}

module.exports = pocommerce;
