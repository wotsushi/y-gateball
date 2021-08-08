import { HashLink as Link } from "react-router-hash-link";
import { isMobileOnly } from "react-device-detect";

const Encoding = require("encoding-japanese");

// https://github.com/rafgraph/react-router-hash-link/issues/25#issuecomment-536688104
const scrollWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export const linkName = (name: string, card: { shorthand: string }) => {
  const nameWithBrackets = `《${name}》`;
  const unicodeArray = nameWithBrackets
    .split("")
    .map((_, i) => nameWithBrackets.charCodeAt(i));
  const encodedArray = Encoding.convert(unicodeArray, "EUCJP");
  const page = Encoding.urlEncode(encodedArray);
  return (
    <>
      <a
        href={`https://yugioh-wiki.net/index.php?cmd=backup&page=${page}&age=1#content_1_0`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isMobileOnly && card.shorthand ? card.shorthand : name}
      </a>
      <span style={{ float: "right" }}>
        <Link to={`/faq#${name}`} scroll={scrollWithOffset}>
          {" "}
          FAQ
        </Link>
      </span>
    </>
  );
};
