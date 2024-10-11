import bullEye from '@/assets/emojis/bulls-eye.webp';
import thumbsUp from '@/assets/emojis/thumbs-up.webp';
import meh from '@/assets/emojis/meh.webp';

interface Props {
  rating: number;
}

const RatingEmoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: {
    [key: number]: { src: string; alt: string; sizeStyle: string };
  } = {
    3: { src: meh, alt: 'meh', sizeStyle: 'w-6 h-6' },
    4: { src: thumbsUp, alt: 'recommended', sizeStyle: 'w-6 h-6' },
    5: { src: bullEye, alt: 'exceptional', sizeStyle: 'w-8 h-8' },
  };

  const style = 'object-cover ' + emojiMap[rating].sizeStyle;

  return (
    <img
      className={style}
      src={emojiMap[rating].src}
      alt={emojiMap[rating].alt}
    />
  );
};

export default RatingEmoji;
