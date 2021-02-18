import React from "react";
import { v4 as uuid } from "uuid";
import { Formcard } from "./Formcard";

const init = {
  title: "",
  author: "",
  body: "",
  status: false
};
const Form = () => {
  const [detail, setDetail] = React.useState(init);
  const { title, author, body, status } = detail;
  const imageRef = React.useRef();
  const [data, setData] = React.useState([]);
  const [filterdata, setFilterdata] = React.useState([...data]);
  const [flag, setFlag] = React.useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setDetail({ ...detail, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...detail, file: imageRef.current.files[0], id: uuid() };
    setData([...data, payload]);
  };
  //private
  console.log(filterdata);

  const filterPrivate = () => {
    setFlag(false);
    setFilterdata(
      data.filter((item) => {
        return item.status === true;
      })
    );
  };

  // public
  const filterPublic = () => {
    setFlag(false);
    setFilterdata(
      data.filter((item) => {
        return item.status === false;
      })
    );
  };
  //all

  const filterAll = () => {
    setFlag(true);
    // setData(filterdata);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Title :
        <input
          onChange={handleChange}
          name="title"
          value={title}
          placeholder="write title"
        />
        <br />
        <br />
        Author :
        <input
          onChange={handleChange}
          name="author"
          value={author}
          placeholder="write author"
        />
        <br />
        <br />
        Body :
        <input
          onChange={handleChange}
          name="body"
          value={body}
          placeholder="write body"
        />
        <br />
        <br />
        {status ? "Private" : "Public"} :
        <input
          onChange={handleChange}
          name="status"
          type="checkbox"
          checked={status}
        />
        <br />
        <br />
        Category:
        <select>
          <option> Choose </option>
          <option> General </option>
          <option> OBC </option>
          <option> None </option>
        </select>
        <br />
        <br />
        <input ref={imageRef} type="file" />
        <br />
        <br />
        <input type="submit" />
      </form>
      <button onClick={filterPrivate}>Filter Private</button>
      <button onClick={filterPublic}>Filter Public</button>
      <button onClick={filterAll}>Get all</button>
      {flag && (
        <div>
          {data.map((item) => (
            <Formcard key={item.id} {...item} />
          ))}
        </div>
      )}
      {!flag && (
        <div>
          {filterdata.map((item) => (
            <Formcard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
export { Form };

// steps to take image
// const imageref = React.useref()
// in payload : ...detail , file : imageref.current.files[0]
// input with type file and ref = image ref
// in card take file as para and url = URl.createobjeceurl(file)
// and a const image ref with value url and
// in retuen Url.revokeobject
// and return img with src {const image ref }
