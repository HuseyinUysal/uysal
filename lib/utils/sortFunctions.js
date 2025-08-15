// sort by date (simple, works with ISO strings)
export const sortByDate = (array) => {
  return array.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
};
