
import Baner from "../components/baner"
export default function Login() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-5xl">Login session</h1>
            <a className="my-5" href="/">
                <button className="btn btn-secondary">
                    home
                </button>
            </a>
            <Baner/>
        </div>
    )
}