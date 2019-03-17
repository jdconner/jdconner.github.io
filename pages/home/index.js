import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import Layout from "../../components/layout";

// TODO: Routing transitions if possible
// TODO: Find color scheme with #399/#0275d8
// TODO: Image compression + fuzzy loading state
// TODO: Amazon Web services (AWS Cloud): Kinesis, S3, ES, EC2, Lambda functions, API Gateway

const Home = () => (
    <Layout title="">
        <ProfileContainer>
            <ImageContainer>
                <ProfileImage
                    src="static/JCcrop.jpg"
                    alt="Justin Conner Portait"
                />
            </ImageContainer>
            <Description>
                <Title>Full-stack Web Developer</Title>
                <p>
                    Devout seeker of efficiency, simplicity, and clarity in
                    work, code and life itself.
                </p>
            </Description>
            <Section>
                <div>
                    {titles.map(position => (
                        <Badge key={position} color={"#399"}>
                            {position}
                        </Badge>
                    ))}
                </div>
                {skillz.map(skill => (
                    <Badge key={skill}>{skill}</Badge>
                ))}
            </Section>
            <Section>
                <Social url="https://github.com/jdconner" />
                <Social url="http://linkedin.com/in/justindconner" />
                <Social
                    network="email"
                    color="#156dbb"
                    url="mailto:justindconner2@gmail.com"
                />
            </Section>
        </ProfileContainer>
    </Layout>
);

export default Home;

const titles = [
    "Front-end Web Architect",
    "Sr. Full-stack Web Developer",
    "Sr. JavaScript Developer",
    "Feature Team Lead",
    "Dev Manager",
];

const skillz = [
    "ReactJS",
    "Webpack",
    "ES6",
    "HMTL5",
    "CSS3",
    "SASS",
    "Styled Components",
    "Axios",
    "NodeJS",
    "ExpressJS",
    "Koa",
    "PostgreSQL",
    "MySQL",
    "Mocha",
    "Karma",
    "Protractor",
    "Git",
    "TypeScript",
    "AngularJS",
];

const Title = styled.h1`
    margin: 0;
`;

const Description = styled.div`
    padding-bottom: 1em;
`;

const ImageContainer = styled.section`
    margin: 0 auto 1em;
`;

const ProfileImage = styled.img`
    display: inline-block;
    padding: 0;
    max-width: 200px;
    border-style: ridge;
    border-width: 5px;
    border-radius: 50%;
    margin: auto;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    max-width: 570px;
    width: 80%;
    margin: auto;
`;

const Section = styled.section`
    margin: 0.5em 0 0.8em;
`;

const Badge = styled.span`
    background-color: ${({ color }) =>
        color ? color : "var(--color-secondary)"};
    padding: 3px 5px;
    color: white;
    margin: 3px;
    border-radius: 0.25rem;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    white-space: nowrap;
    vertical-align: baseline;
    display: inline-block;
`;

const Social = styled(SocialIcon)`
    margin: 0 5px;
`;
