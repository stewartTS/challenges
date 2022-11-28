import Moment from "react-moment";
import "./AuthorModal.css";

export default function AuthorModal({ data, toggleModal }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={() => toggleModal()}></div>
      <div className="modal-content">
        <h2>{data?.id}</h2>
        <p dangerouslySetInnerHTML={{ __html: data?.about }}></p>
        <p>
          <Moment>{data?.time}</Moment>
        </p>
        <p>Karma: {data?.karma}</p>
        <button className="close-modal" onClick={() => toggleModal()}></button>
      </div>
    </div>
  );
}
