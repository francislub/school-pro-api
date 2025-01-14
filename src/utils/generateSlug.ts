export function generateSlug(title?: string): string {
  if (!title || typeof title !== "string") {
    throw new Error("Invalid input: title must be a non-empty string.");
  }

  // Convert title to lowercase and replace spaces with dashes
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  // Remove special characters except for dashes
  const cleanedSlug = slug.replace(/[^\w\-]/g, "");

  return cleanedSlug;
}
