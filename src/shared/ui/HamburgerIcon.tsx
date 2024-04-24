"use client";
import {SVGProps, useContext} from "react";

import { ThemeContext } from "@/src/app/providers/ThemeProvider";
const HamburgerIconWhite = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z"
        fill="#FFF"/>
      <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z"
        fill="#FFF"/>
      <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z"
        fill="#FFF"/>
    </svg>
  );
};
const HamburgerIconBlack = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="24"
      version="1.1"
      viewBox="0,0,255.98959,255.98959"
      width="24"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    ><g fill="#000000"
        fillRule="nonzero"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        stroke="none"
        strokeDasharray=""
        strokeDashoffset="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="1"
        textAnchor="none"><g transform="translate(-0.0052,-0.0052) scale(10.66667,10.66667)"><path d="M20.05,11h-16.1c-0.52467,0 -0.95,0.4253 -0.95,0.95v0.1c0,0.5247 0.42533,0.95 0.95,0.95h16.1c0.5247,0 0.95,-0.4253 0.95,-0.95v-0.1c0,-0.5247 -0.4253,-0.95 -0.95,-0.95z"></path><path d="M20.05,16h-16.1c-0.52467,0 -0.95,0.4253 -0.95,0.95v0.1c0,0.5247 0.42533,0.95 0.95,0.95h16.1c0.5247,0 0.95,-0.4253 0.95,-0.95v-0.1c0,-0.5247 -0.4253,-0.95 -0.95,-0.95z"></path><path d="M20.05,6h-16.1c-0.52467,0 -0.95,0.42533 -0.95,0.95v0.1c0,0.52467 0.42533,0.95 0.95,0.95h16.1c0.5247,0 0.95,-0.42533 0.95,-0.95v-0.1c0,-0.52467 -0.4253,-0.95 -0.95,-0.95z"></path></g></g></svg>
  );
};
const Hamburger = (props: SVGProps<SVGSVGElement>)=>{
  const {theme} = useContext(ThemeContext);

  return theme ==="dark" ? <HamburgerIconWhite {...props}/> : <HamburgerIconBlack {...props}/>;
};

export default Hamburger;
