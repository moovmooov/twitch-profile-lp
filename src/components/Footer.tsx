import { User } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border-t border-dark-gray py-11 bg-almost-black px-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:space-x-16 py-5">
          <div className="space-y-4 mb-8 lg:mb-0">
            <div className="text-purple flex items-center gap-x-3">
              <User />
              <p className="text-xl font-title">Twitch Profile</p>
            </div>
            <div className="max-w-lg">
              <p className="font-medium text-medium-gray">
                Meet Twitch Profile! Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed sollicitudin tellus quam, sed bibendum dui
                gravida ut. Integer vestibulum enim a ipsum egestas dapibus.
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-8 lg:mb-0">
            <p className="text-xl font-title">NAVIGATION</p>
            <a href="#" className="block hover:underline">
              Home
            </a>
            <a href="#" className="block hover:underline">
              How to use?
            </a>
            <a href="#" className="block hover:underline">
              Install
            </a>
          </div>
          <div className="space-y-5">
            <p className="text-xl font-title">SOCIAL MEDIA</p>
            <a href="#" className="block hover:underline">
              Twitter
            </a>
            <a href="#" className="block hover:underline">
              Instagram
            </a>
          </div>
        </div>
        <hr className="my-8 border-dark-gray" />
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
          <p className="font-title text-xl">© 2024 Twitch Profile</p>
          <p className="font-title text-xl">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
