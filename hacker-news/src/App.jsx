import { useEffect, useState } from "react";
import "./App.css";
import FilterButtons from "./Components/FilterButtons/FilterButtons";
import Card from "./Components/Card/Card";
import Pagination from "./Components/Pagination/Pagination";
import LoginButton from "./Components/LoginButton/LoginButton";
import LogoutButton from "./Components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [itemIds, setItemIds] = useState([]);
  const [type, setType] = useState(null);
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 100;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const { isAuthenticated } = useAuth0();

  const sortedStories = type
    ? stories.filter((story) => story.type == type)
    : stories;
  const currentPosts = sortedStories?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    getItemIds();
  }, []);

  useEffect(() => {
    getStoryItems();
  }, [itemIds]);

  const getItemIds = async () => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => res.json())
      .then((data) => {
        setItemIds(data);
      });
  };

  const getStoryItems = async () => {
    Promise.all(
      itemIds.map((item) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
          .then((res) => res.json())
          .then((data) => {
            setStories((oldStories) => [...oldStories, data]);
          });
      })
    );
  };

  const renderStories = () => {
    return currentPosts?.map((story, index) => (
      <Card key={index} data={story} />
    ));
  };

  return (
    <div className="App">
      <h1 className="title">Hacker News</h1>
      {!isAuthenticated && <LoginButton />}
      {isAuthenticated && (
        <div>
          <LogoutButton />
          <div className="filter-bar-container">
            <FilterButtons setType={setType} currentType={type} />
          </div>
          <Pagination
            totalPosts={sortedStories?.length}
            postsPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <div className="card-container">{renderStories()}</div>
          {type == "poll" && (
            <div className="no-show-message">
              <p>There are no stories of this type at the moment</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
