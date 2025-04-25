import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const { sigInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()

    const handelGoogleSignIn = () => {
        sigInWithGoogle()
            .then((result) => {
                console.log('Google sign In Done', result.user)
                navigate('/')
            })
            .catch(error => {
            console.log(error.message)
        })
    }
    

    return (
      <div className="form-control mt-2">
        <button
          onClick={handelGoogleSignIn}
          className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300"
        >
          <span className="text-red-500">
            <i className="fab fa-google"></i>
          </span>
          CONTINUE WITH GOOGLE
        </button>
      </div>
    );
};

export default SocialLogin;