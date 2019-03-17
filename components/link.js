import React from 'react';
import styled from 'styled-components';
import { Link } from '../routes';

export default function LinkComponent({ href, label, ...rest }) {
    return (
        <LinkWrapper {...rest}>
            <Link prefetch route={href}>
                <a>{label}</a>
            </Link>
        </LinkWrapper>
    );
}

const LinkWrapper = styled.span`
    > * {
        text-decoration: none;
        color: var(--color-link);

        &:hover,
        &:focus,
        &:active {
            filter: brightness(60%);
        }
    }
`;
