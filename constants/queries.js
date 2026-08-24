const FIELDS =
	"{_id, title, slug, description, techStack, url, github, 'image': image.asset->url}";

// Lower sortOrder wins; projects without one fall back to oldest-first.
const ORDER = "order(coalesce(sortOrder, 9999) asc, _createdAt asc)";

export const ALL_PROJECTS_QUERY = `?query=*[_type == 'project'] | ${ORDER}${FIELDS}`;
export const LATEST_PROJECTS_QUERY = `?query=*[_type == 'project'] | ${ORDER}[0...4]${FIELDS}`;
