import React from 'react';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';

import useGetEntryList from 'components/workspace/useGetEntryList';
import entryPreview from 'components/workspace/entryPreview';
import { idTokenState } from 'components/auth/state';

export default function EntryListExperience() {
    const idToken = useRecoilValue(idTokenState);

    const { fetchNextPage, isLoading, isError, data } = useGetEntryList({ idToken });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Oops :(</div>
    }

    return (
        <div className="text-sm">
            {data?.pages.map((group, i) => (
                <React.Fragment key={i}>
                    {group?.entries?.map(entry => {
                        return (
                            <div key={entry.id}>
                                <Link href={`/workspace/${entry.id}`} passHref>
                                    <a className="block py-2 hover:underline">{entryPreview(entry.text || "")}</a>
                                </Link>
                            </div>
                        );
                    })}
                </React.Fragment>
            ))}
            <button onClick={() => fetchNextPage()}>more</button>
        </div>
    )
}