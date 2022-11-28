import "./Card.css";
import Moment from "react-moment";
import AuthorModal from "./AuthorModal";
import { useEffect, useState } from "react";
import CommentModal from "./CommentModal";

export default function Card({ data }) {
  const [modal, setModal] = useState(false);
  const [comments, SetComments] = useState(false);
  const [authorInfo, setAuthorInfo] = useState(null);
  const [authorComments, setAuthorComments] = useState(null);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/user/${data.by}.json`)
      .then((res) => res.json())
      .then((data) => setAuthorInfo(data));
  }, []);

  // useEffect(() => {
  //   getComments();
  // }, []);

  // const getComments = async () => {
  //   Promise.all(
  //     authorInfo.submitted.map((item) => {
  //       fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.type == "comment") {
  //             setAuthorComments((oldComments) => [...oldComments, data]);
  //           }
  //         });
  //     })
  //   );
  // };

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleComments = () => {
    SetComments(!comments);
  };

  return (
    <div className="card">
      <h2 className="title">{data.title}</h2>
      <button onClick={() => toggleModal()} className="card-details author">
        Author: {data.by}
      </button>
      <p className="card-details">
        <Moment unix>{data.time}</Moment>
      </p>
      <button className="card-details">Comments: {data.score}</button>
      {data?.url && (
        <p data-cy="link" className="card-details link">
          Link:{" "}
          <a target={"_blank"} href={data.url}>
            {data.url}
          </a>
        </p>
      )}
      {modal && (
        <AuthorModal data={authorInfo} toggleModal={() => toggleModal()} />
      )}
      {comments && (
        <CommentModal
          data={authorComments}
          toggleComments={() => toggleComments()}
        />
      )}
    </div>
  );
}
