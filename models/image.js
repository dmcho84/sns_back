module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      src: {
        // S3 저장
        type: DataTypes.STRING(200), // 매우 긴 글
        allowNull: false
      }
    },
    {
      charset: "utf8", // 한글 + 이모티콘
      collate: "utf8_general_ci" // 한글이 저장된다
    }
  );

  Image.associate = db => {
    db.Image.belongsTo(db.Post);
  };

  return Image;
};
