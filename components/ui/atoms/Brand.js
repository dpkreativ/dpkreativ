import { LineDivider } from '../../assets/Icons';
import { LogoIcon } from '../../assets/Logos';

export default function Brand() {
  return (
    <div className="flex items-center space-x-5">
      <LogoIcon />
      <LineDivider />
      <div className="dance text-4xl">Divine Orji</div>
    </div>
  );
}
