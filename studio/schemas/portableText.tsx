import React from 'react'
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineLink } from 'react-icons/ai'

export default {
  name: "portableText",
  type: "array",
  title: "Portable Text",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],

      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          {
            title: "Align Center",
            value: "center",
            blockEditor: {
              icon: () => <AiOutlineAlignCenter />,
              render: (props) => (
                <span style={{ textAlign: `center`, display: "block" }}>
                  {props.children}
                </span>
              ),
            },
          },
          {
            title: "Align Left",
            value: "left",
            blockEditor: {
              icon: () => <AiOutlineAlignLeft />,
              render: (props) => (
                <span style={{ textAlign: `left`, display: "block" }}>
                  {props.children}
                </span>
              ),
            },
          },
          {
            title: "Align Right",
            value: "right",
            blockEditor: {
              icon: () => <AiOutlineAlignRight />,
              render: (props) => (
                <span style={{ textAlign: `right`, display: "block" }}>
                  {props.children}
                </span>
              ),
            },
          },
          // add your own decorator
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string",
              },
            ],
            // everybody needs a URL link
          },
          {
            title: "Internal link",
            name: "internalLink",
            type: "reference",
            to: [{ type: "article" }],
            // links, but to internal docs
          },
        ],
      },
    },
    {
      title: "Article",
      name: "article",
      type: "reference",
      to: [{ type: "article" }],
      // article embed
    },
    {
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Alternative text for screen readers.",
        },
      ],
      // image + alt text!
    },
    {
      type: "quote",
    },
    {
      type: "break",
    },
  ],
};
