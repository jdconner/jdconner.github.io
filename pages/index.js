import React from "react";
import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("./home"));

const Index = () => <HomeComponent />;

export default Index;
