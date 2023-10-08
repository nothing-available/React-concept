import { useLoaderData } from "react-router-dom"

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/nothing-available')
    //         .then(res => res.json()) //res is conveted to json
    //         .then(data => setData(data)) //data is set to setData
    // })
    return (
        <div className='text-center text-3xl text-white bg-slate-600 p-4'>
            Github Total Repo :{data.public_repos}
            <img src={data.avatar_url} alt="Github Profile Picture" width={300} />

        </div>
    )
}

export default Github

export const githubLoaderInfo = async () => {

    const response = await fetch('https://api.github.com/users/nothing-available')
    return response.json()
}