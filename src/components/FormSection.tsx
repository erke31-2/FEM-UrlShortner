import getShortenUrl from "../helper/getShortenUrl";
import isUrl from "is-url";
import { FormEvent, useState } from "react";
import Result from "./Result";

export interface LinkProps {
  originalLink: string;
  shortenLink: string;
}

const FormSection = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const storedLinks = localStorage.getItem("Links");
  const initialLinks = storedLinks
    ? (JSON.parse(storedLinks) as LinkProps[])
    : [];
  const [links, setLinks] = useState<LinkProps[]>(initialLinks);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isUrl(originalUrl)) {
      const response = await getShortenUrl(originalUrl);
      if (response.ok) {
        const updatedLinks = [
          {
            originalLink: originalUrl,
            shortenLink: response.result?.full_short_link ?? "",
          },
          ...links,
        ];
        setLinks(updatedLinks);
        localStorage.setItem("Links", JSON.stringify(updatedLinks));
        setErrorMsg("");
      } else {
        setErrorMsg(response.error ?? "");
      }
    } else {
      setErrorMsg("Please Enter a Valid Url");
    }
    setOriginalUrl("");
  };

  return (
    <section className="px-8 md:px-16 lg:px-32 py-8 relative">
      <div className="absolute bg-slate-200 left-0 right-0 bottom-0 top-[100px] -z-10" />
      <form
        className="flex flex-col gap-6 p-6 rounded-xl relative bg-DarkViolet md:flex-row md:px-12 md:py-8"
        onSubmit={handleSubmit}
      >
        <div className="absolute inset-0 bg-bgShortenMb bg-cover rounded-xl top-0 bottom-[20%] left-[25%] right-0 md:bg-bgShortenDesk md:left-0 md:bottom-0" />

        <input
          type="text"
          placeholder="Shorten a link here..."
          className={`py-3 px-4 rounded-md focus:outline-none z-10 md:w-[75%] h-12 ${
            errorMsg && "border-Red border-2 placeholder:text-Red"
          }`}
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        {errorMsg && <p className="text-Red z-10 text-sm italic absolute top-[75px] md:top-[80px]">{errorMsg}</p>}

        <button
          type="submit"
          className="relative rounded-md font-semibold z-10 md:w-[25%] bg-Cyan py-3 text-white hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/40 hover:before:rounded-md"
        >
          Shorten it!
        </button>
      </form>
      {links.length > 0 &&
        links.map((link) => (
          <Result
            key={link.shortenLink}
            {...link}
            links={links}
            setLinks={setLinks}
          />
        ))}
    </section>
  );
};
export default FormSection;
