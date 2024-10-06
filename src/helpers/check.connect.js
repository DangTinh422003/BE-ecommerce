import mongoose from "mongoose";

const countConnect = () => {
  const numberConnecttions = mongoose.connections.length;
  console.log("Number of connections: ", numberConnecttions);
};

export default countConnect;
