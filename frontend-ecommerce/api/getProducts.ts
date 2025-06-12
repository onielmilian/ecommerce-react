import qs from 'qs';

async function fetchData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}

export async function getProducts(queryString: string, currentPage: number) {
  const PAGE_SIZE = 8;
  const query = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { name: { $containsi: queryString } },
      ],
    },
    pagination: {

      pageSize: PAGE_SIZE,

      page: currentPage,

    },
  });
  const url = new URL("/api/products", process.env.NEXT_PUBLIC_BACKEND_URL);
  url.search = query;
  return fetchData(url.href);
}
