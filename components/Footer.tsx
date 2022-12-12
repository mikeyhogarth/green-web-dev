import React from "react";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center p-10 mt-10 bg-gray-100 text-gray-600 border-t">
      <div className="text-center print:hidden">
        <SocialIcon
          link="https://github.com/mikeyhogarth/green-web-dev"
          linkTitle="Github Link"
          Icon={FaGithub}
        />
        <SocialIcon
          link="https://www.facebook.com/greenwebdev"
          linkTitle="Facebook Link"
          Icon={FaFacebook}
        />
      </div>
      <p className="text-xs">
        Green Web Dev &copy;{new Date().getFullYear()} - Page Weight Budget
        350KB
      </p>
      <p className="text-xs print:hidden">
        Join the conversation and contribute content over on{" "}
        <a
          className="text-black"
          href="https://github.com/mikeyhogarth/green-web-dev"
        >
          github
        </a>
        !
      </p>
      <p className="text-xs print:hidden">
        <Link href="/cookies-and-privacy" className="text-black">
          Cookies and privacy
        </Link>
      </p>
    </footer>
  );
};

interface SocialIcon {
  Icon: any;
  link: string;
  linkTitle: string;
}

function SocialIcon({ Icon, link, linkTitle }: SocialIcon) {
  return (
    <a href={link} title={linkTitle}>
      <Icon className="inline-block m-2 mx-4 mb-6 text-4xl hover:text-black" />
    </a>
  );
}

export default Footer;
