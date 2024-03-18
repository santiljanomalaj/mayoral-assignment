import { useRouter } from 'next/router';

interface UpdateParams {
  query?: string;
  sort?: string;
}

export default function useUpdateParams() {
  const router = useRouter();

  const updateUrlParams = (params: Record<string, string>) => {
    const { pathname, query } = router;
    const updatedParams: UpdateParams = { ...query, ...params };

    const filteredParams = Object.fromEntries( // Filtering out params that are either empty strings or null
      Object.entries(updatedParams).filter(([, value]) => value !== '' && value !== null),
    );

    if (Object.keys(filteredParams).length === 0) { // If no valid params are left after filtering, just navigate to the pathname without params
      router.replace(pathname);
      return;
    }

    router.replace( // Updating the URL with the new, filtered parameters
      `${pathname}?${new URLSearchParams(filteredParams as Record<string, string>).toString()}`,
    );
  };

  return {
    query: router.query?.query,
    sort: router.query?.sort,
    updateUrlParams,
  };
}
