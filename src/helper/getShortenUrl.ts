interface ShortenResponse {
  ok: boolean;
  result?: {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    short_link3: string;
    full_short_link3: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
  };
  error?: string;
  error_code?: number;
}

const getShortenUrl = async (url: string): Promise<ShortenResponse> => {
  const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  const data = await response.json();
  return data as ShortenResponse;
};
export default getShortenUrl;
