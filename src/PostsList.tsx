import {FC, ReactElement, MouseEvent} from 'react';
import { PostInterface } from './interfaces/post'
import { UserInterface } from './interfaces/user';
import { User } from './User';


interface PostsListProps {
    posts: PostInterface[];
    del?: (postId: number) => void;
}

export const PostsList: FC<PostsListProps> = ({posts, del}): ReactElement => {

    function onDelete(event: MouseEvent, postId: number) {
        event.preventDefault();
        if(typeof del === 'function') {
            del(postId);
        }

    }

    

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    {/* {post.body} <br /> */}
                    {/* {post.title} */}
                    <User userId={post.userId} />
                    <button onClick={(e: MouseEvent) => onDelete(e, post.id)}>Удалить</button>
                </div>
            ))}
        </>
    );
}