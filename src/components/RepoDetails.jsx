import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepoDetailsThunk } from "../store/thunks/repoDetailsThunk";
import OwnerCard from "./OwnerCard";
import { fetchRepoTagsThunk } from "../store/thunks/repoTagsThunk";
import { defaultRepoName } from "../utils/constants";

const RepoDetails = () => {
  const { repoName } = useParams();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.repoDetailsReducer
  );
  const tags = useSelector((state) => state.repoTagsReducer);

  useEffect(() => {
    dispatch(fetchRepoDetailsThunk(defaultRepoName, repoName));
    dispatch(fetchRepoTagsThunk(defaultRepoName, repoName));
  }, [dispatch, repoName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return data.owner ? (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <OwnerCard owner={data.owner}></OwnerCard>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginLeft: "2rem",
          }}
        >
          <p>
            Repo name:{" "}
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {repoName}
            </span>
          </p>
          <p>Forks: {data.forks_count}</p>
          <p>Watchers: {data.watchers_count}</p>
        </div>
      </div>

      <div
        style={{
          maxHeight: "20vh",
          overflowY: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {tags.data && tags.data.length > 0 ? (
          <ul style={{ maxHeight: "20vh" }}>
            {tags.data.map((tag) => {
              return (
                <li key={tag.name}>
                  {tag.name} - {tag.commit.sha}
                </li>
              );
            })}
          </ul>
        ) : (
          <span>Tags are not available for this repo</span>
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default RepoDetails;
