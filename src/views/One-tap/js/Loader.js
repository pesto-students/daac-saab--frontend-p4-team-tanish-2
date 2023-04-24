import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <FaSpinner className="text-info" size={30} spin/>
      <div className="ml-3">Generating some health advice for you</div>
    </div>
  );
};

export default Loader;

