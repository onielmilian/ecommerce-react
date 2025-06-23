import { useEffect, useState } from "react";

export function useGetBrands() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/brands?populate=*`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}
