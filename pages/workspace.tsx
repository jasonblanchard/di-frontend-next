import React from 'react';
import EntryListExperience from 'components/workspace/EntryListExperience';

import BaseLayout from 'components/BaseLayout';

// import { GetServerSideProps } from 'next';
// import cookie from 'cookie';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const parsedCookies = cookie.parse(context.req.headers.cookie || '');
    
    // const res = await fetch('https://di8.blanktech.net/api/v2/entries?page_size=50', {
    //     headers: {
    //         Authorization: `Bearer ${parsedCookies.idToken}`,
    //     }
    // });
    // const entries = await res.json()

//     if (!entries) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             entries,
//         },
//     }
// }

type props = React.ComponentPropsWithoutRef<'a'>;

const MyButton = React.forwardRef<any, JSX.IntrinsicElements['a']>(({ onClick, href }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>
            Click Me
        </a>
    )
})

interface WorkspacePageProps {
    entries: Record<string, any>[]
}

export default function WorkspacePage({ entries }: WorkspacePageProps) {
    return (
        <BaseLayout>
            <EntryListExperience />
        </BaseLayout>
    )
}