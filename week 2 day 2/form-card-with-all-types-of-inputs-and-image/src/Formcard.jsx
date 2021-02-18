import React from "react";

const Formcard = ({ title, author, body, status, file }) => {
  const [imageUrl, setImageurl] = React.useState("");

  React.useEffect(() => {
    const url = URL.createObjectURL(file);
    setImageurl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h2>{body}</h2>
      <h2>{status ? "Private" : "Not Private"}</h2>
      <img width="140px" src={imageUrl} alt="img" />
    </div>
  );
};
export { Formcard };
