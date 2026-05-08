export default function MenuBar({ setPage }) {
  const pageId = [
    {
      id: 1,
      pageName: "Home Page",
    },
    {
      id: 2,
      pageName: "Dataset Page",
    },
    {
      id: 3,
      pageName: "Blogs Page",
    },
  ];

  return (
    <>
      {pageId.map((page) => {
        return (
          <div key={page.id} onClick={() => setPage(page.id)}>
            {page.pageName}
          </div>
        );
      })}
    </>
  );
}
