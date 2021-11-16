export default {
  name: "siteConfig",
  type: "document",
  title: "Site Settings",
  //   __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "frontpage",
      type: "reference",
      description: "Choose page to be the frontpage",
      to: { type: "page" },
    },
    {
      title: "Main navigation",
      name: "mainNav",
      description: "Select menu for main navigation",
      type: "reference",
      to: { type: "navigation" },
    },
  ],
};
