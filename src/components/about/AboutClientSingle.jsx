const AboutClientSingle = ({ title, image }) => {
  return (
    <>
      <div className="skill-item" style={{ height: "170px", width: "180px" }}>
        <img
          src={image}
          style={{
            height: "150px",
            width: "auto",
            display: "block",
            margin: "0 auto",
          }}
          className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
          alt={title}
        />
      </div>
    </>
  );
};

export default AboutClientSingle;
