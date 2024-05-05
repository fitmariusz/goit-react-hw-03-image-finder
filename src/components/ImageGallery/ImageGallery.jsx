import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className="imageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          largeImageUrl={image.largeImageURL}
          onClick={openModal}
        />
      ))}
    </ul>
  );
};