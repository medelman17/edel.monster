const alt = {
  name: "alt",
  type: "string",
  title: "Alt text",
  description: "Alternative text for screen readers",
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
};

const href = {
  name: "href",
  type: "string",
  title: "URL",
  description: "a reference to a web resource that specifies its location",
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
};

const keywords = {
  name: "keywords",
  type: "array",
  title: "Keywords",
  of: [{ type: "string" }],
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
};

const title = {
  name: "title",
  type: "string",
  title: "Title",
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
};

const description = {
  name: "description",
  title: "Description",
  type: "string",
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
};

export default { alt, href, keywords, title, description };
