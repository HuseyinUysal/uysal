import AuthorSingle from "@layouts/AuthorSingle";
import { getSinglePage } from "@lib/contentParser";

const Article = async ({ params }) => {
  const { single } = params;

  // Eğer getSinglePage async ise "await" kullan
  const getAuthors = getSinglePage("content/authors"); 
  const author = getAuthors.filter((author) => author.slug === single);

  if (!author[0]) {
    return <p>Author bulunamadı!</p>;
  }

  const { frontmatter, content } = author[0];

  return <AuthorSingle frontmatter={frontmatter} content={content} />;
};

export const generateStaticParams = () => {
  const allSlug = getSinglePage("content/authors");
  return allSlug.map((item) => ({ single: item.slug }));
};

export default Article;
