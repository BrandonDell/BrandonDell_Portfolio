import ResumeButton from '../components/ResumeButton';
import SocialLinks from '../components/SocialLinks';

const Navbar = () => {
  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="grey" /><text x="150" y="125" font-size="60" text-anchor="middle" fill= "black">BDC</text></svg>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <ResumeButton />
      <SocialLinks />
      </div>
    </nav>
  );
};

export default Navbar;
