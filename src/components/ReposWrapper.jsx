import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReposCountForUserThunk } from "../store/thunks/reposCountThunk";
import UserRepos from "./UserRepos";
import { defaultRepoName } from "../utils/constants";

const ReposWrapper = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.reposCountReducer
  );

  useEffect(() => {
    dispatch(fetchReposCountForUserThunk(defaultRepoName));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 style={{ paddingBottom: "1rem" }}>{defaultRepoName}</h2>
      <UserRepos></UserRepos>
    </div>
  );
};

export default ReposWrapper;
