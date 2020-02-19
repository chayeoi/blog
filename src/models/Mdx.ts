export interface Mdx {
  node: {
    id: string;
    frontmatter: {
      title: string;
      description: string;
      tags?: string[];
      createdAt: string;
      updatedAt?: string;
      cover?: {
        publicURL: string;
        internal: {
          mediaType: string;
        };
      };
    };
    fields: {
      slug: string;
    };
  };
}
