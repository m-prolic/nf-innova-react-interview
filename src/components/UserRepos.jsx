import { useDispatch, useSelector } from "react-redux";
import RepoItem from "./RepoItem";
import { useEffect, useState } from "react";
import { fetchReposForUserThunk } from "../store/thunks/reposThunk";
import { Pagination } from "@mui/material";
import { defaultRepoName, perPage } from "../utils/constants";

const UserRepos = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.reposReducer);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchReposForUserThunk(defaultRepoName, page));
  }, [page, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return data.userRepos ? (
    <div>
      <ul>
        {data.userRepos.map((repo) => {
          return (
            <li key={repo.id}>
              <RepoItem repo={repo}></RepoItem>
            </li>
          );
        })}
      </ul>
      <div style={{ paddingTop: "1rem" }}>
        <Pagination
          count={data.totalPages}
          page={page}
          onChange={handlePageChange}
        >
          {" "}
        </Pagination>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UserRepos;
