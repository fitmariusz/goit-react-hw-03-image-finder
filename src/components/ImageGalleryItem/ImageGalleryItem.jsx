import { nanoid } from 'nanoid';

export const ImageGalleryItem = ({ imageUrl, largeImageUrl, onClick }) => {
  return (
    <li className="imageGalleryItem" id={nanoid()}>
      <img
        src={imageUrl}
        alt=""
        data-large={largeImageUrl}
        className="imageGalleryItem-image"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
    </li>
  );
};