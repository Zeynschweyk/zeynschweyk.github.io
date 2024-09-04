import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: 'images/profile.jpg',
    },
    {
        original: 'images/profile2.png',
    },
    {
        original: 'images/profile3.jpg',
    },
];

const MyGallery = () =>  (
    <>
        <ImageGallery 
            items={images} 
            showPlayButton={false}
            showBullets={false}
            autoPlay={true}
            slideInterval={6000}
            showFullscreenButton={false}
            showNav={false}
            showThumbnails={false}
            disableKeyDown={true}
        />
        <br />
        <br />
    </>
);

export default MyGallery;
