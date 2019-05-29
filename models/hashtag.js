module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      name: {
        type: DataTypes.STRING(20), // 매우 긴 글
        allowNull: false
      }
    },
    {
      charset: "utf8mb4", // 한글 + 이모티콘
      collate: "utf8mb4_general_ci" // 한글이 저장된다
    }
  );

  Hashtag.associate = db => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
  };

  return Hashtag;
};
