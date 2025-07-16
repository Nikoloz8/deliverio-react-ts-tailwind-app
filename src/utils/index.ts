import { useLocation, useNavigate } from "react-router-dom"

export default function index() {

    const navigate = useNavigate()
    const location = useLocation().pathname 

    const HandleSignUpButton = () => {
        localStorage.setItem("SL", "SignUp")
        navigate("/role-choose")
    }

    const HandleLoginButton = () => {
        localStorage.setItem("SL", "SignIn")
        navigate("/role-choose")
    }

    const HandleGetSL = () => {
        const SL = localStorage.getItem("SL")
        return SL
    }

    const getRole = () => {
        return location.split("/")[2]
    }


    return { HandleLoginButton, HandleSignUpButton, HandleGetSL, getRole }
}
