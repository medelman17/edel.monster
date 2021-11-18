import styles from "../styles";

export default {
  name: "portableTextSimple",
  type: "array",
  title: "Simple Portable Text",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [styles.h1, styles.h2, styles.normal],
    },
  ],
};
