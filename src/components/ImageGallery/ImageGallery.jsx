import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

export const ImageGallery = ({images}) => {
  // const {images} = prop
  // console.log(images);
  return (
    <ul className="imageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={nanoid()}
          imageUrl={image.webformatURL}
          largeImageUrl={image.largeImageURL}
          // onClick={openModal}
        />
      ))}
    </ul>
  );
};