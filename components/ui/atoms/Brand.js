import { LogoIcon } from '../../assets/Logos';

export default function Brand() {
  return (
    <div className="flex items-center text-2xl space-x-2">
      <LogoIcon size={`36`} />
      <div className="dance">dpkreativ</div>
    </div>
  );
}
