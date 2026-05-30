import Image from 'next/image';
import transitionImg from '@/assets/images/transition-cdmo.svg';
import './CdmoTransition.css';

export default function CdmoTransition() {
  return (
    <div className="cdmo-transition-container" aria-hidden="true">
      <Image 
        src={transitionImg} 
        alt="" 
        fill
        className="cdmo-transition-image"
        priority
      />
    </div>
  );
}
