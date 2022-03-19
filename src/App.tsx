import React, { useEffect, useState, ChangeEvent } from 'react';
// import logo from './logo.svg';
import './App.css';
import { UserInterface } from './interfaces/user';
import { PostInterface } from './interfaces/post'
import { PostsList } from './PostsList';
import { PhotoInterface } from './interfaces/photo';
import { PhotosList } from './PhotosList';
import { TodosList } from './TodosList';
import { useDispatch } from 'react-redux';
import { UserActionTypes } from './store/reducers/user';

// type myType = string | number;
// type mytype2 = "first" | "seccond" | "last";


// enum colors {
//   red = "#00ff00",
//   green = "#123f12"
// }


// let posts: Post[] = [];
// let test:myType = "";
// let test1:number = 123;
// let test2:boolean = true;
// let test3:mytype2 = "first";
// let en: colors = colors.green;

// test = "dsfs";
// test = 123;

// function newPost(post: Post) {
//   // 
// }

// function MyFunc (message: string, color:number):number {
//   console.log(message);
//   return 123;
// }
// let aaa:number;

// aaa = MyFunc("123", 123)

// newPost({name: "post 1", text: "erewrr"});

// posts.map((post: Post) => {
  
// })

function test<T, C>(a: T, b: C) {
  console.log(a, b);
}

console.log(test<string, string>("2", "3"));

function App() {

  const [posts, setPosts] = useState<PostInterface[]>([]);
  // const [users, setUsers] = useState<UserInterface[]>([]);
  const [photos, setPhotos] = useState<PhotoInterface[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(async (res) => {
      setPosts(await res.json());
    })
    // fetch("https://jsonplaceholder.typicode.com/users").then(async (res) => {
    //   setUsers(await res.json());
    // })
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=6&_page=2").then(async (res) => {
      setPhotos(await res.json());
    })
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(async res => {
        dispatch({
            type: UserActionTypes.USERS_LOAD,
            payload: await res.json()
        });
    }).catch(err => {
        dispatch({
            type: UserActionTypes.USERS_LOAD_ERROR,
            payload: err.message
        });
    })
  })

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
        <TodosList />
        <PhotosList photos={photos} />

        <input type="text" value={search} onChange={onChangeSearch} />
        <PostsList posts={posts} del={(postId) => console.log(postId)} >
          <div>Test</div>
        </PostsList>
    </div>
  );
}

export default App;
