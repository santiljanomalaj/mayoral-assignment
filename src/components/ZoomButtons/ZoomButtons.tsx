import { ZoomInIcon, ZoomOutIcon } from '../UI/Icons/Icons';
import Button from '../UI/Button/Button';

interface ZoomButtonsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  isZoomEnabled: boolean;
}

export default function ZoomButtons({ onZoomIn, onZoomOut, isZoomEnabled }: ZoomButtonsProps) {
  return (
    <div>
      <Button onClick={onZoomOut} disabled={!isZoomEnabled} variant="neutral">
        <ZoomOutIcon />
      </Button>
      <Button onClick={onZoomIn} disabled={isZoomEnabled} variant="neutral">
        <ZoomInIcon />
      </Button>
    </div>
  );
}
