import { useNavigate } from "react-router-dom";

export const NoItems = () => {
  const navigate = useNavigate();
  const getBack = () => navigate("/", { replace: true });
  return (
    <div className="flex justify-center flex-col">
      <p className="text-center uppercase font-bold text-3xl mb-6">
        No items added
      </p>
      <button className="text-lg" onClick={getBack}>
        Get Back
      </button>
    </div>
  );
};
