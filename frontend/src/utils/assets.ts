/**
 * Universal Asset URL resolver
 * Handles local paths with basePath / subfolder deployments (e.g. /new/ or /jordanstory/)
 * while preserving absolute external URLs.
 */
export function getAssetUrl(url?: string): string {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `${basePath}${cleanPath}`;
}
