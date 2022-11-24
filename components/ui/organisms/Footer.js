import {
  GithubIcon,
  HashnodeIcon,
  HeartIcon,
  LinkedInIcon,
} from '../../assets/Icons';
import { LogoName } from '../../assets/Logos';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 grid gap-24 max-w-[1440px] mx-auto">
      <div className="flex flex-col space-y-6 items-center">
        <div className="text-2xl">dpkreativ@gmail.com</div>
        <div className="flex items-center space-x-4">
          <div>
            <HashnodeIcon />
          </div>
          <div>
            <GithubIcon />
          </div>
          <div>
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 items-center">
        <div className="text-2xl dance flex space-x-2 items-center">
          <div>made with</div>
          <div>
            <HeartIcon />
          </div>
          <div>by dpkreativ</div>
        </div>
        <div className="flex space-x-2 text-2xl items-center">
          <div>
            <LogoName />
          </div>
          <div>&copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
