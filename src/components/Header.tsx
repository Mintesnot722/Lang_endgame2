import type { JSX } from "react";
const Header = (): JSX.Element => {
  return (
    <header className="text-center mb-9">
      <h1 className="text-[1.25rem] font-medium text-[#F9F4DA]">
        Assembly:Endgame
      </h1>

      <p className="text-[0.875rem] max-w-87.5  text-[#8E8E8E]">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
    </header>
  );
};

export default Header;
