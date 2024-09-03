export function createSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function slugify(arr) {
  const data = arr.map((item) => {
    item.slug = createSlug(item.name);
    return item;
  });
  return data
}