import "./style/ProfileImage.css";

export function ProfileImage( { svgpath } ) {
  return (
    <div className='ImageContainer'>
      <svg width="100%" height="100%" viewBox="0 0 540 540" preserveAspectRatio="xMidYMid meet">
        <defs>
          <mask id="maskForImage">
            <image href={svgpath} x="0" y="0" width="540" height="540" className="mask-shape" />
          </mask>
          <mask id="maskForBg1">
            <image href={svgpath} x="0" y="0" width="540" height="540" className="background-mask-1" />
          </mask>
          <mask id="maskForBg2">
            <image href={svgpath} x="0" y="0" width="540" height="540" className="background-mask-2" />
          </mask>
        </defs>
        {/* Background shape 2 (largest, purple) */}
        <rect x="0" y="0" width="540" height="540" fill="#4c3666" mask="url(#maskForBg2)" />

        {/* Background shape 1 (medium, green) */}
        <rect x="0" y="0" width="540" height="540" fill="#c3a68d" mask="url(#maskForBg1)" />
        
        {/* The main profile image, masked by the rotating shape. */}
        <image href="/assets/stylizedProfileCropped.png" x="0" y="30" width="540" height="540" mask="url(#maskForImage)" />
      </svg>
    </div>
  );
}