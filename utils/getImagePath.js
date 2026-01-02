/**
 * Get image path with basePath for GitHub Pages
 */
export function getImagePath(path) {
  if (!path) return path;
  
  // If path already starts with http/https, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // For GitHub Pages, add basePath
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}

