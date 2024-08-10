import { User } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full border-t border-dark-gray py-11 bg-almost-black">
      <div className="container mx-auto flex justify-between items-cente flex-col py-5">
        <div className="flex justify-between">
          <div className="space-y-4">
            <div className="text-purple flex">
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
            <div className="space-y-4 flex flex-col">
              <p className="text-xl font-title">NAVIGATION</p>
              <a href="#">Home</a>
              <a href="#">How to use?</a>
              <a href="#">Install</a>
            </div>
            <div className="space-y-5 flex flex-col">
              <p className="text-xl font-title">SOCIAL MEDIA</p>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
        </div>
        <hr className="my-8 border-dark-gray"/>
        <div className="flex justify-between">
          <div>
            <p className="font-title text-xl">© 2024 Twitch Profile</p>
          </div>
          <div>
            <p className="font-title text-xl">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
