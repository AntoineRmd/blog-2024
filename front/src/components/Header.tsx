import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Header() {
  const { userInfo, setUserInfo } = useUser();
  const username = userInfo?.username;

  async function logout() {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
            credentials: "include",
            method: "POST",
          })
          if (!res.ok) {
            res.json().then((data) => {
                alert(data.message);
            });
          }
          setUserInfo(null);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <header>
      <Link to="/">Blog</Link>
      {username ? (
        <div>
          <span>Bonjour, {username}</span>
          <Link to="/post/create">Écrire un article</Link>
          <button onClick={logout}>Déconnexion</button>
        </div>
      ) : (
        <div>
            <button onClick={logout}>Déconnexion</button>

          <Link to="/register">S'inscrire</Link>
          <Link to="/login">Connexion</Link>
        </div>
      )}
    </header>
  );
}

export default Header;