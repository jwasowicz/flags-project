

const FlagResetButton = ({handleResetButtonClick, flagCodes}) => {


  return (
    <button onClick={handleResetButtonClick} className="reload-btn">
      Next Flag
      <svg
        className="refresh"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path d="M24.57,0A24,24,0,1,0,48,24.59,24,24,0,0,0,24.57,0ZM24,43.92A19.91,19.91,0,1,1,43.9,24,19.92,19.92,0,0,1,24,43.92Z"></path>
        <rect x="9.33" y="21.96" width="26.56" height="4.09"></rect>
        <polygon points="39.47 24.01 27.03 16.82 27.03 31.19 39.47 24.01"></polygon>
      </svg>
    </button>
  );
};

export default FlagResetButton;
