export const Heading = (props) => {
  return (
    <div
      style={{
        backgroundImage: " linear-gradient(to bottom right, #443355,#999)",
      }}
      className="h-[70vh] mb-6 rounded-lg"
    >
      <header
        style={{
          transform: "skew(-20deg)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "currentColor",
        }}
        className="text-5xl text-[#AEA6DB] font-bold leading-[60px] my-10 text-center"
      >
        {props.title}
      </header>
    </div>
  );
};
