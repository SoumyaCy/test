import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config/particleconfig";

const ParticleBack =()=>{
    return <Particles params={particleConfig}></Particles>;
}

export default ParticleBack;