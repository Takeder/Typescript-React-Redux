import {FC, ReactElement} from 'react';
import { PhotoInterface } from './interfaces/photo';


interface PhotosListProps {
    photos: PhotoInterface[];
}

export const PhotosList: FC<PhotosListProps> = ({photos}): ReactElement => {
    return (
        <>
            {photos.map(photo => (
                <div key={photo.id}>
                    {photo.title} <br />
                    <img src={photo.thumbnailUrl} />
                </div>
            ))}
        </>
    );
}