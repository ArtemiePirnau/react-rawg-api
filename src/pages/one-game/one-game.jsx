import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export const OneGame = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};
