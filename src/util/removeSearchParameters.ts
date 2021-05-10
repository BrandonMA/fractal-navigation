export function removeSearchParameters(path: string): string {
    const fullURLPath = `${location.origin}${path}`;
    const url = new URL(fullURLPath);
    return url.pathname;
}
