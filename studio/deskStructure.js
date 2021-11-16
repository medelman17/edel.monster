import S from "@sanity/desk-tool/structure-builder";
import Iframe from "sanity-plugin-iframe-pane";

import SocialPreview from "part:social-preview/component";

export const getDefaultDocumentNode = ({ schemaType }) => {
  if (["blog.post", "marketing.page"].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view.component(SocialPreview()).title("Social & SEO"),
    ]);
  } else {
    return S.document().views([S.view.form()]);
  }
};

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(S.document().schemaType("siteConfig").documentId("siteConfig")),
      S.listItem()
        .title("Main Navigation")
        .child(S.document().schemaType("navigation").documentId("navigation")),
      ...S.documentTypeListItems().filter(
        (listItem) => !["siteConfig", "navigation"].includes(listItem.getId())
      ),
    ]);
