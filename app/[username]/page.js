import Particles from "../components/Particals";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <>
    <div className="relative">
      <div style={{ width: "100%", height: "400px", position: "relative", background: "black"}}>
        <Particles
          particleColors={["#ffffff", "#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          glow={0.5}
          twinkle={0.3}
          moveParticlesOnHover
          hoverEffect="parallax"
          sizeRandomness={1}
          shape="circle"
          depthOfField={0}
          connections={false}
          connectionDistance={110}
          particleHoverFactor={1}
          hoverRadius={140}
          drift="none"
          driftSpeed={1}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={20}
          variation={0}
          opacity={1}
          clickBurst
          intro
          lightMode={false}
        />
      </div>
        <img className="rounded-full absolute right-1/2 -bottom-[50px]" src="profile.png"  width={100} height={100} alt="profile image"/>
    </div>
      <div className="text-white">{username}</div>
    </>
  );
};

export default Username;
