import React, { FunctionComponent } from 'react';
import BaseLayout from 'components/BaseLayout';

const SidebarLayout: FunctionComponent = ({ children }) => {
    const nodes = React.Children.toArray(children)
    return (
        <BaseLayout>
            <div className="flex">
                <div>
                    {nodes[0]}
                </div>
                <div>
                    {nodes[1]}
                </div>
            </div>
        </BaseLayout>
    )
}

export default SidebarLayout;