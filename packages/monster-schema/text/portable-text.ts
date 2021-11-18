import styles from "../styles";
import lists from "../lists";
import decorators from "../decorators";
import annotations from "../annotations";

export default {
  name: "portableText",
  type: "array",
  title: "Portable Text",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        styles.normal,
        styles.h1,
        styles.h2,
        styles.h3,
        styles.h4,
        styles.h5,
        styles.h6,
      ],
      lists: [lists.bullet, lists.number],
      marks: {
        decorators: [decorators.strong, decorators.emphasis, decorators.code],
        annotations: [annotations.link],
      },
    },
  ],
};
