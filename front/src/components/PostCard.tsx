import { format } from "date-fns";
import { Link } from "react-router-dom";

interface Author {
  username: string;
  _id: string;
}
interface PostProps {
  id: string;
  title: string;
  summary: string;
  cover: string;
  author: Author;
  createdAt: Date;
}

function PostCard({ id, title, summary, cover, author, createdAt }: PostProps) {
  return (
    <div className="post-card">
      <Link to={`/post/${id}`}>
        <h2>{title}</h2>
        <img src={`${process.env.REACT_APP_API_URL}/${cover}`} alt={title} />
      </Link>
      <Link to={`/user/${author.username}`}>{author.username}</Link>
      <time>{format(new Date(createdAt), "d MMM, yyyy HH:mm")}</time>
      <p>{summary}</p>
    </div>
  );
}

export default PostCard;
