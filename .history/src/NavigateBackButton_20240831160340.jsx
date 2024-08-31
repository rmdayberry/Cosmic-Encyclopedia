import { useNavigate } from "react-router-dom";

const NavigateBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="backBtn" onClick={() => navigate(-1)}>
      Go Back
    </button>
  );
};

export default NavigateBackButton;
