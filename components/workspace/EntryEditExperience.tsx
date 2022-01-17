import { useRecoilValue } from 'recoil';

import useGetEntry from 'components/workspace/useGetEntry';
import { idTokenState } from 'components/auth/state';

interface EntryEditExperienceProps {
    id: string
}

export default function EntryEditExperience({ id }: EntryEditExperienceProps) {
    const idToken = useRecoilValue(idTokenState);
    const { data } = useGetEntry({ id, idToken })

    return (
        <div>
            {data?.text}
        </div>
    )
}