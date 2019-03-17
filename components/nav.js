import React from 'react';
import Link from './link';
import styled from 'styled-components';

const Nav = ({ router }) => {
    const { pathname } = router;
    return (
        <NavStyled>
            <Ul>
                <List>
                    <PaddedLink
                        href="/about"
                        label={`About`}
                        active={pathname === '/about'}
                    />
                    <PaddedLink
                        href="/"
                        label={`<jdconner/>`}
                        className={'fs20'}
                        active={pathname === '/'}
                    />
                    <PaddedLink
                        href="/blog"
                        label={`Blog`}
                        active={pathname === '/blog'}
                    />
                </List>
            </Ul>
        </NavStyled>
    );
};
export default Nav;

const Ul = styled.ul`
    padding: 0;
`;

const NavStyled = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3em;
`;

const List = styled.li`
    list-style-type: none;
    flex-direction: row;
    margin: auto;
`;

const PaddedLink = styled(Link)`
    margin: 0.5em 1em;
    padding: 0 0 0.1em;
    border-bottom: ${({ active }) =>
        active ? '2px solid var(--color-secondary)' : '2px solid transparent'};
`;
