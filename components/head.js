import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultTitle = `Justin Conner - Full-stack Web Developer`;
const defaultDescription = `Devout seeker of efficiency, simplicity, and clarity in
work, code and life itself.`;
const defaultOGURL = "justinconner.dev";
const defaultOGImage = "/static/JCcrop.jpg"; // TODO: Change to CDN image

const Head = props => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ""}</title>
        <meta
            name="description"
            content={`${props.description}${defaultDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/static/favicon180.png" />
        <link rel="apple-touch-icon" href="/static/favicon180.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000120" />
        <link rel="icon" href="/static/favicon.ico" />

        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || defaultTitle} />
        <meta
            property="og:description"
            content={props.description || defaultDescription}
        />

        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta name="twitter:label1" content="Testimonial #1:" />
        <meta
            name="twitter:data1"
            content={`"He's super handsome" - His mom`}
        />

        <meta name="twitter:label2" content="Testimonial #2:" />
        <meta
            name="twitter:data2"
            content={`"(Justin is) definitely the smartest person I know" - CTO of Remine`}
        />

        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="theme-color" content={"#000120"} />
        <meta
            name="apple-mobile-web-app-status-bar-style"
            content={"#000120"}
        />
    </NextHead>
);

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string,
};

export default Head;
