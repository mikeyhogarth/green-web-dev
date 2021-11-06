import { getStaticPropsForContent } from "../utils/next.utils";
import StaticMDXPage from "../components/StaticMDXPage";

export default StaticMDXPage;

export async function getStaticProps({ params }: any) {
  return getStaticPropsForContent("about", params);
}
