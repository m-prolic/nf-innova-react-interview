const OwnerCard = ({ owner }) => {
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        src={owner.avatar_url}
        alt="avatar"
      />
      <h2>{owner.login}</h2>
    </div>
  );
};

export default OwnerCard;
