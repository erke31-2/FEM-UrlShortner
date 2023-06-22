import { useState } from "react";
import { LinkProps } from "./FormSection";
import { FaTrash } from "react-icons/fa";

interface ResultProps extends LinkProps {
  links: LinkProps[];
  setLinks: React.Dispatch<React.SetStateAction<LinkProps[]>>;
}

const Result: React.FC<ResultProps> = ({
  originalLink,
  shortenLink,
  links,
  setLinks,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortenLink);
    setCopied(true);
  };

  const handleDeleteLink = () => {
    const updatedLinks = links.filter(link => link.shortenLink !== shortenLink)
    localStorage.setItem("Links", JSON.stringify(updatedLinks))
    setLinks(updatedLinks)
  }


  return (
    <div className="mt-6 bg-white rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
      <a
        className="border-b border-Gray md:border-none p-4 truncate hover:underline"
        href={originalLink}
      >
        {originalLink}
      </a>
      <div className="flex flex-col gap-2 p-4 md:flex-row md:items-center">
        <a href={shortenLink} className="text-Cyan">
          {shortenLink}
        </a>

        <button
          className={`bg-Cyan py-2 rounded-md text-white font-semibold px-8 relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/20 hover:before:rounded-md ${
            copied && "bg-DarkViolet"
          }`}
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <button className="flex gap-2 justify-center items-center bg-Cyan py-2 rounded-md px-4 text-white relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/20 hover:before:rounded-md" onClick={handleDeleteLink}>
          <FaTrash />
          Delete
        </button>
      </div>
    </div>
  );
};
export default Result;
