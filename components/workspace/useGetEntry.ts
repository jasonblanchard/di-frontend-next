import { useQuery } from 'react-query';
import { v2Entry } from "@jasonblanchard/di-apis"

export default function useGetEntryList({ id, idToken }: { id: string, idToken: string }) {
    return useQuery<v2Entry>(['entry', id], async () => {
        const response = await fetch(`/api/v2/entries/${id}`, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            }
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    });
}