
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZ8drG-vHcgOA08PD4HDE-Frr9tclZJOWwsjOQPLHHipXtjBUA7XLK2ZOZJJ_IFaEfW8&usqp=CAU'
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            Music
          </span>
          <span className="postCat">
            Life
          </span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

