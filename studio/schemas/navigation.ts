export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      name: "navId",
      type: "slug",
      title: "Navigation Id",
    },

    {
      type: "array",
      name: "items",
      title: "Navigation Items",
      of: [{ type: "navigationItem" }],
    },
  ],
};
