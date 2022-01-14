import { useInfiniteQuery } from 'react-query';
import { v2ListEntriesResponse } from "@jasonblanchard/di-apis"

export default function useGetEntryList({ idToken }: { idToken: string }) {
    return useInfiniteQuery<v2ListEntriesResponse>('entries', async ({ pageParam }) => {
        const route = pageParam ? `/api/v2/entries?page_size=50&page_token=${pageParam}` : `/api/v2/entries?page_size=50`
        const res = await fetch(route, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            }
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        return res.json();
    }, {
        getNextPageParam: (lastPage) => lastPage.next_page_token
    });
}