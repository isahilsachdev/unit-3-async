import "./styles.css";

const Drawer = () => {
  return (
    <div>
      <DrawerItem
        label="Starred"
        icon="https://tse3.mm.bing.net/th?id=OIP.Drm6nD4sJjhOW2k2MUU6AwHaHa&pid=Api&P=0&w=300&h=300"
      />
      <DrawerItem
        label="Inbox"
        icon="https://image.shutterstock.com/image-vector/inbox-iconvector-illustration-flat-design-260nw-1130581295.jpg"
      />
      <DrawerItem
        label="Send email"
        icon="https://img.icons8.com/ios/72/secured-letter--v2.gif"
      />
      <DrawerItem
        label="Drafts"
        icon="https://img.icons8.com/ios/72/filled-message.png"
      />
    </div>
  );
};
const DrawerItem = ({ label, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        width: "120px",
        padding: "5px",
        backgroundColor: "lightgrey",
        margin: "0px auto"
      }}
    >
      <div style={{ margin: "10px" }}>{label}</div>
      <div>
        <img width="40px" src={icon} />
      </div>
    </div>
  );
};

export default function App() {
  return <Drawer></Drawer>;
}
