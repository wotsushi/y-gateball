const Encoding = require("encoding-japanese");

export const linkName = (name: string) => {
  const nameWithBrackets = `《${name}》`;
  const unicodeArray = nameWithBrackets
    .split("")
    .map((_, i) => nameWithBrackets.charCodeAt(i));
  const encodedArray = Encoding.convert(unicodeArray, "EUCJP");
  const page = Encoding.urlEncode(encodedArray);
  return (
    <a
      href={`https://yugioh-wiki.net/index.php?cmd=backup&page=${page}&age=1#content_1_0`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};
