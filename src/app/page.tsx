import Navbar from "./components/navbar";
import Baner from "./components/baner";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Baner/>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-5xl">Oi mundo</h1>
      <a className="mt-5" href="/login">
        <button className="btn btn-secondary">Login</button>
      </a>
      </main>
      
    </div>
  );
}
