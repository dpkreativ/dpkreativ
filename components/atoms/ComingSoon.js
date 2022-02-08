const ComingSoon = () => {
  return (
    <div className="w-full max-w-sm mx-auto py-20 px-5">
      <div
        style={{
          width: "100%",
          height: "0",
          paddingBottom: "75%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-center mt-5">
        We're currently working on this page, please check back later. Thanks!
      </p>
    </div>
  );
};

export default ComingSoon;
