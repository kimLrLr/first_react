const sites = [
  {
    id: 0,
    siteName: "네이버",
    url: "https://www.naver.com/",
  },
  {
    id: 1,
    siteName: "카카오",
    url: "https://www.kakaocorp.com/page/",
  },
  {
    id: 2,
    siteName: "구글",
    url: "https://www.google.co.kr/",
  },
];

export const ViewSiteEx = () => {
  return (
    <>
      <h2>즐겨찾기</h2>

      {sites.map((site) => (
        <h3 key={site.id}>
          <a href={site.url} target="_blank">
            {site.siteName}
          </a>
        </h3>
      ))}
    </>
  );
};
