import { RevealOnScroll } from "../RevealOnScroll";
import TrueFocus from "../TrueFocus";
// import profileImage from "./pfp.png";
import ProfileCard from '../ProfileCard'
import TiltedCard from "../TiltedCard";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 py-16 relative"
    >
      {/* <img
        src={profileImage}
        alt="Mark Petras"
        className="w-52 h-52 object-cover rounded-full border-4 border-pink-500 shadow-lg hover:shadow-[0_0_15px_rgba(245,40,145,0.4)] transition-transform duration-300 transform hover:-translate-y-1"
      /> */}

      

 <RevealOnScroll>
  <div className="text-right z-10 max-w-xl ml-auto">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      <TrueFocus
        sentence="Rishant Parmar"
        manualMode={false}
        blurAmount={5}
        animationDuration={2}
        pauseBetweenAnimations={1}
        className="text-white" // ensures white text
        style={{ color: "white" }} // extra safety for color
      />
    </h1>

    <p className="text-white text-lg mb-8">
      UI/UX Designer & Frontend Developer passionate about crafting user-friendly digital experiences. Skilled in Figma, prototyping, and responsive design, with expertise in translating ideas into clean, functional interfaces that delight users.
    </p>

    <div className="flex justify-end space-x-4">
      <a
        href="#projects"
        className="border border-white text-white py-3 px-6 rounded-full font-medium transition hover:bg-white hover:text-black"
      >
        View Projects
      </a>
      <a
        href="#contact"
        className="border border-white text-white py-3 px-6 rounded-full font-medium transition hover:bg-white hover:text-black"
      >
        Contact Me
      </a>
    </div>
  </div>
</RevealOnScroll>


       {/* <ProfileCard
          name="Rishant Parmar"
          title="UI/UX DESIGNER & FRONTEND DEVELOPER"
          handle="Rishant parmar"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://ibb.co/yBdHjdFs"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
       /> */}
        <TiltedCard
          imageSrc="https://i.ibb.co/tTPXTFB7/Untitled-design.png"
          altText="Rishant Parmar - Ui/Ux designer & Frontend Developer"
          captionText="Rishant Parmar"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
     <p className="tilted-card-demo-text">
      Rishant Parmar
    </p>
  }
/>

    </section>
  );
};
