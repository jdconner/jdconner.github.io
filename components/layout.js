import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';

import Head from './head';
import Nav from './nav';

export default withRouter(
    class Layout extends React.PureComponent {
        render() {
            const { children, router, ...rest } = this.props;

            return (
                <Page>
                    <Head {...rest} />
                    <Nav router={router} />
                    {children}
                </Page>
            );
        }
    }
);

const Page = styled.div`
    padding: 0 20px;
    margin: auto;
`;
