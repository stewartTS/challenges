import Moment from "react-moment";
import "./AuthorModal.css";

export default function CommentModal({ data, toggleComments }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={() => toggleComments()}></div>
      <div className="modal-content">
        {data.map((comment, index) => {
          return <p key={index}>{comment}</p>;
        })}
      </div>
    </div>
  );
}
