import Particles from "../components/Particals";

const Username = async ({ params }) => {
  const { username } = await params;

  return (
    <>
      <div className="relative">
        {/* Particle Background */}
        <div className="relative w-full h-[400px] bg-black">
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

        {/* Profile Image */}
        <img
          className="absolute left-1/2 -translate-x-1/2 -bottom-[50px] z-10 rounded-full border-4 border-white"
          src="/profile.png"
          width={100}
          height={100}
          alt="Profile image"
        />
      </div>

      {/* User Information */}
      <div className="flex flex-col items-center justify-center pt-16 gap-2">
        <div className="text-white text-xl font-bold">
          @{username}
        </div>

        <div className="text-gray-400">
          Creating Animated art for VTT's
        </div>

        <div className="text-gray-500 text-sm">
          9,719 members · 82 posts · $15,450/release
        </div>
      </div>
    </>
  );
};

export default Username;
