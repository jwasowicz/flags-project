export const customStyles = (endScreen) => {
    return {
        control: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? "white" : "white",
          color: state.isFocused ? "black" : "black",
          border: state.isFocused ? "1px solid gray" : "1px solid gray",
          borderRadius: "5px",
          padding: "0.2rem 0.4rem", 
          display: 'flex',
          gap: '10px',
          boxShadow: 'none',
          width: '18.8rem',
          textAlign: 'center',
          outline: "none",
          marginTop: "15px",
          opacity: endScreen ? "0.5" : "1",
          fontWeight: state.isSelected ? "bold" : "normal",
          pointerEvents: endScreen ? "none" : "auto",
          "&:hover": {
            boxShadow: "none"
          }
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "" : "",
          color: state.isSelected ? "" : "black",
          textAlign: 'center',
          cursor: "pointer",
          boxShadow: "none",
          "&:hover": {
            background: "lightgray",
          },
        }),
    };
}
