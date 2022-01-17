import { Suspense } from 'react';
import { useRouter } from 'next/router';

import SidebarLayout from 'components/SidebarLayout';
import EntryListExperience from 'components/workspace/EntryListExperience';
import EntryEditExperience from 'components/workspace/EntryEditExperience';

export default function EntryEditPage() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return null;

    return (
        <SidebarLayout>
            <div>
                <Suspense fallback={<div>SUSPENDING</div>}>
                    <EntryListExperience />
                </Suspense>
            </div>
            <div>
                <Suspense fallback={<div>SUSPENDING</div>}>
                    <EntryEditExperience id={id as string} />
                </Suspense>
            </div>
        </SidebarLayout>
    )
}