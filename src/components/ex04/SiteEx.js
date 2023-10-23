const sites = [
  {
    id: 0,
    name: "네이버",
    url: "https://www.naver.com/",
  },
  {
    id: 1,
    name: "카카오",
    url: "https://www.kakaocorp.com/page/",
  },
  {
    id: 2,
    name: "구글",
    url: "https://www.google.co.kr/",
  },
];

export const SiteEx = () => {
  return (
    <>
      <h3>즐겨찾기</h3>

      <>
        {sites.map((site) => (
          <div key={site.id}>
            <a href={site.url}>
              <h3>{site.name}</h3>
            </a>
          </div>
        ))}
      </>
    </>
  );
};
