import { GetServerSideProps } from 'next';
import cookie from 'cookie';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const parsedCookies = cookie.parse(context.req.headers.cookie || '');
    
//     const res = await fetch('https://di8.blanktech.net/api/v2/entries?page_size=50', {
//         headers: {
//             Authorization: `Bearer ${parsedCookies.idToken}`,
//         }
//     });
//     const entries = await res.json()

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

interface WorkspacePageProps {
    entries: Record<string, any>[]
}

export default function WorkspacePage({ entries }: WorkspacePageProps) {
    return (
        <div className="text-sm">
            WorkspacePage
            <div>
                <textarea readOnly value={JSON.stringify(entries, null, 2)} rows={100} style={{ width: "100%" }} />
            </div>
        </div>
    )
}