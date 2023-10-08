import { useParams } from "react-router-dom"

function User() {
    const { userid } = useParams()
    return (
        <div className="bg-gray-600 p-4 text-white text-3xl text-center"> User : {userid}</div>
    )
}

export default User