import Image from 'next/image';
import transitionImg from '@/assets/images/transition-pd.svg';
import './PdTransition.css';

export default function PdTransition() {
  return (
    <div className="pd-transition-container" aria-hidden="true">
      <Image 
        src={transitionImg} 
        alt="" 
        fill
        className="pd-transition-image"
        priority
      />
    </div>
  );
}
