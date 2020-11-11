import { ADDRESS, PORT, PATH, REGION as region } from "./constant";
import getURL from "./utils";

const url = getURL(ADDRESS, PORT, PATH);
export { url, region };
