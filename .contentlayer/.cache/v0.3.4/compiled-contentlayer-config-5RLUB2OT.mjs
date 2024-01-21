// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    description: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    images: { type: "string", required: true },
    imageAttribution: { type: "markdown", required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/post/${post._raw.flattenedPath}`
    },
    order: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath.split("/").pop()
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: []
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5RLUB2OT.mjs.map
