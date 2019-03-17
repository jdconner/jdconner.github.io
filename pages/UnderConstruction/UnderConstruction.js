import React from "react";
import styled from "styled-components";
import Link from "../../components/link";
import Layout from "../../components/layout";

const UnderConstructionPage = props => {
    return (
        <Layout {...props}>
            <Page>
                <h3>Page Under Construction</h3>
                <Link href={"/"} label="Go back to homepage" />
            </Page>
        </Layout>
    );
};

export default UnderConstructionPage;

const Page = styled.div`
    text-align: center;
    margin-top: 10%;
`;
