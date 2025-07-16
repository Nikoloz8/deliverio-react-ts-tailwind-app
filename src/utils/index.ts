import { useNavigate } from "react-router-dom"

export default function index() {

    const navigate = useNavigate()

    const HandleSignUpButton = () => {
        localStorage.setItem("SL", "SignUp")
        navigate("/role-choose")
    }

    const HandleLoginButton = () => {
        localStorage.setItem("SL", "Login")
        navigate("/role-choose")
    }

    const HandleGetSL = () => {
        const SL = localStorage.getItem("SL")
        return SL
    }


    return { HandleLoginButton, HandleSignUpButton, HandleGetSL}
}
