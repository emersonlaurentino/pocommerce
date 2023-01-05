import { LoaderContext } from "webpack";
import { PocommerceConfig } from "./types";

async function load(this: LoaderContext<PocommerceConfig>, source: string) {
  const { edition, editionConfig, ...options } = this.getOptions() || {};

  console.log("options", options);

  this.cacheable(true);

  if (!edition) {
    throw new Error("No PoCommerce edition found!");
  }

  const result = `import Layout from '${edition}';
  export default function Page(props) {
    return (
      <Layout>
        <div>PoCommerce</div>
      </Layout>
    )
  }`;

  // console.log("orignal", source);
  // console.log("custom", result);

  return result;
}

module.exports = async function loader(
  this: LoaderContext<PocommerceConfig>,
  source: string
) {
  const callback = this.async();
  try {
    const result = await load.call(this, source);
    callback(null, result);
  } catch (error: any) {
    console.error(error);
    callback(error);
  }
};
