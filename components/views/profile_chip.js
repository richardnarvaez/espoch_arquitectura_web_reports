const ProfileChip = ({ name, code }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            background: "#ccc",
            borderRadius: 999,
          }}
        >
          {name.substring(0, 1)}
        </div>
        <div style={{ marginLeft: 16, fontSize: "0.8rem" }}>
          <p style={{ fontWeight: "bold" }}> {name}</p>
          <p>{code}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileChip;
