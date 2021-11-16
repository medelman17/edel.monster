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
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "string",
      codegen: { required: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      of: [{ type: "string" }],
    },
    {
      name: "frontpage",
      type: "reference",
      description: "Choose page to be the frontpage",
      to: { type: "page" },
    },
    {
      title: "Site Language",
      name: "lang",
      type: "string",
    },
    {
      title: "Main navigation",
      name: "mainNav",
      description: "Select menu for main navigation",
      type: "reference",
      to: { type: "navigation" },
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph",
    },
    {
      title: "Social Media Links",
      name: "socialLinks",
      type: "array",
      of: [{ type: "socialLink" }],
    },
    {
      title: "Header Logo",
      type: "mainImage",
      name: "headerLogo",
    },
  ],
};
