import { useRecoilValue } from 'recoil';

import useGetEntry from 'components/workspace/useGetEntry';
import { idTokenState } from 'components/auth/state';

interface EntryEditExperienceProps {
    id: string
}

export default function EntryEditExperience({ id }: EntryEditExperienceProps) {
    const idToken = useRecoilValue(idTokenState);

    const { data, isLoading, isError } = useGetEntry({ id, idToken })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Oops :(</div>
    }

    return (
        <div>
            {data?.text}
        </div>
    )
}