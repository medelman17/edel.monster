export default {
  title: "Article",
  name: "article",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Publication date",
      name: "publishDate",
      type: "date",
    },
    {
      title: "Categories",
      name: "category",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "category" },
            // etc
          ],
        },
      ],
    },
    {
      title: "Summary",
      name: "summary",
      type: "text",
      // handy for content previews
    },
    {
      title: "Authors",
      name: "authors",
      type: "array",
      // an array of refs leaves room for multiple authors
      of: [
        {
          type: "reference",
          to: [{ type: "person" }],
        },
      ],
    },
    {
      title: "Content",
      name: "content",
      type: "portableText",
      // rich text on steroids
    },
  ],
};
