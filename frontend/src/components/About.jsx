import blogImg from "../images/blog-about.png";

const About = () => {
  return (
    <>
      <div
        className="hero flex items-center justify-between px-[100px]"
        style={{ height: "calc(100vh - 100px)" }}
      >
        <div className="left w-[50%]">
          <h1 className="text-[80px] font-bold text-pretty">About Section</h1>
          <h3 className="text-[60px]" style={{ lineHeight: 1 }}>
            Unlock the Secrets to <span className="sp-text">Masterful</span>{" "}
            Programming Here.
          </h3>
        </div>
        <div className="right w-[50%]">
          <img className="rounded-[20px] w-full" src={blogImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
