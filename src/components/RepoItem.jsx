import { Link } from "react-router-dom";

const RepoItem = ({ repo }) => {
  return (
    <div>
      <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
      <p>Open Releases: {repo.releasesCount}</p>
    </div>
  );
};

export default RepoItem;
