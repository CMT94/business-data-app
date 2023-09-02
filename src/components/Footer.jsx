import React from "react";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const socials = [
  {
    name: "facebook",
    url: "https://facebook.com/",
    icon: <FaFacebookSquare size={30} />,
  },
  {
    name: "instagram",
    url: "https://instagram.com/",
    icon: <FaInstagram size={30} />,
  },
  {
    name: "twitter",
    url: "https://twitter.com/",
    icon: <FaTwitterSquare size={30} />,
  },
  {
    name: "github",
    url: "https://github.com/",
    icon: <FaGithubSquare size={30} />,
  },
  {
    name: "dribble",
    url: "https://dribble.com/",
    icon: <FaDribbbleSquare size={30} />,
  },
];

const solutions = ["Analytics", "Marketing", "Commerce", "Insights"];
const supports = ["Pricing", "Documentation", "Guides", "API Status"];
const companyDetails = ["About", "Blog", "Press", "Careers"];
const legalDetails = ["Claim", "Policy", "Terms"];

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">DATABIZ.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam est
          fugiat consequatur corporis repudiandae adipisci aut quasi a, deleniti
          sit.
        </p>

        <div className="flex justify-between md:width-[75%] my-6">
          {socials.map((social, socialIndex) => (
            <div key={socialIndex}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.icon}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6 px-8">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            {solutions.map((solution, solutionIndex) => (
              <li key={solutionIndex} className="py-2 text-sm">
                {solution}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            {supports.map((support, supportIndex) => (
              <li key={supportIndex} className="py-2 text-sm">
                {support}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            {companyDetails.map((cDetail, cDetailIndex) => (
              <li key={cDetailIndex} className="py-2 text-sm">
                {cDetail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            {legalDetails.map((lDetail, lDetailIndex) => (
              <li key={lDetailIndex} className="py-2 text-sm">
                {lDetail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
