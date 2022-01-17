import React, { Suspense } from 'react';
import dynamic from "next/dynamic";

import EntryListExperience from 'components/workspace/EntryListExperience';
import ErrorBoundary from 'components/ErrorBoundary';
import BaseLayout from 'components/BaseLayout';

const WorkspacePage = () =>{
    return (
        <BaseLayout>
            <ErrorBoundary>
                <Suspense fallback={<div>SUSPENDING</div>}>
                    <EntryListExperience />
                </Suspense>
            </ErrorBoundary>
        </BaseLayout>
    )
}

// Hack-around to prevent SSR
export default dynamic(() => Promise.resolve(WorkspacePage), {
  ssr: false,
});
// export default WorkspacePage;