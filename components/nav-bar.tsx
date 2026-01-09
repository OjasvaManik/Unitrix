import React from "react";
import TextType from "./TextType";
import { cn } from "@/lib/utils";
import { bebasNeue } from "@/types/fonts";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="relative flex w-full items-center justify-between">
      <Link href={ '/' }>
        <TextType
          text={ [ "Unitrix", "Day to Day App" ] }
          typingSpeed={ 75 }
          pauseDuration={ 1500 }
          showCursor={ true }
          cursorCharacter="_"
          className={ cn( bebasNeue.className, 'text-4xl lg:text-5xl uppercase' ) }
        />
      </Link>
      <ThemeToggle/>
    </div>
  );
};

export default NavBar;