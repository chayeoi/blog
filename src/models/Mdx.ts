export interface Mdx {
  node: {
    id: string;
    frontmatter: {
      title: string;
      description: string;
      tags?: string[];
      createdAt: string;
      updatedAt?: string;
    };
    fields: {
      slug: string;
    };
  };
}
