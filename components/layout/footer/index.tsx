import { socialMedias } from "../../../lib/social-media";

const Footer = () => {
  return (
    <footer className="bg-black w-full mt-16 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl py-6 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialMedias.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} David Larsson, kodcase för Crowd
            Collective.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
