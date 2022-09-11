import { META } from "../lib/helper";
import Link from "./Link";
import IconTwitter from "./icons/twitter";
import IconGithub from "./icons/github";

function SocialButton({ href, children }) {
  return (
    <Link
      href={href}
      blank
      className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors
      hover:bg-indigo-100 hover:text-indigo-900
      dark:bg-zinc-700 dark:text-zinc-200
      dark:hover:bg-indigo-800 dark:hover:text-indigo-100"
    >
      {children}
    </Link>
  );
}

function Social() {
  const { twitter, github } = META.social;

  return (
    <div className="flex items-center space-x-3">
      <SocialButton href={`mailto:${META.email}`}>
        <span className="mx-2 font-medium">Email</span>
      </SocialButton>
      <SocialButton href={twitter}>
        <IconTwitter />
      </SocialButton>
      <SocialButton href={github}>
        <IconGithub />
      </SocialButton>
    </div>
  );
}

export default Social;
