import react from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
  const { id, name, email } = props.location.state.contact;
  return (
    <>
      <div className="main" style={{ marginTop: "20px" }}>
        <div className="ui card centered">
          <div className="image">
            <img src={user} alt="" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
          <Link to={`/`} className="ui button red">
            Kembali
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
