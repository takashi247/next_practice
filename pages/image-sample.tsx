import { NextPage } from 'next';
import Image from 'next/image';

import Picture from '../public/images/sample_pic.jpeg';

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>Comparison of image display with img tag and Image component</h1>
      <p>with img tag</p>
      <img src="/images/sample_pic.jpeg" />
      <p>with Image component</p>
      <Image src={Picture} />
      <p>With Image component, display areas are secured beforehand.</p>
    </div>
  );
};

export default ImageSample;