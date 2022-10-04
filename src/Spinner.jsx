import "../src/spinner.css"

const Spinner = () => {
    return (
      
      <div className="d-flex justify-content-center mt-5">
      <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
      </div>
    );
};

export default Spinner;