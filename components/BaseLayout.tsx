import { FunctionComponent } from 'react';
import Link from 'next/link';

const BaseLayout: FunctionComponent = ({ children }) => {
    return (
        <>
            <div>
                <h1><Link href="/workspace">Di</Link></h1>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default BaseLayout;