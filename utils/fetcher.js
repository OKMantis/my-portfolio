// The `production` dataset is public, so reads need no credentials.
export const fetcher = (url) => fetch(url).then((response) => response.json());
