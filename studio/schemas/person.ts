export default {
  title: "Person",
  name: "person",
  type: "document",
  fields: [
    {
      title: "First Name",
      name: "firstName",
      type: "string",
    },
    {
      title: "Last Name",
      name: "lastName",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Bio",
      name: "bio",
      type: "portableText",
    },
    {
      title: "Author?",
      name: "author",
      type: "boolean",
      // makes it easy to reference only people who are authors in article documents
    },
    { title: "Github URL", name: "githubUrl", type: "url" },
    { title: "Twitter URL", name: "twitterUrl", type: "url" },
  ],
};
