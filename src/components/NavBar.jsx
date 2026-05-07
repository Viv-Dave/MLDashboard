import Button from "./reusable/button";
import { useState } from "react";
import ApiStats from "./SubPages/apiData";
import Charts from "./SubPages/chartsData";
import DefaultPage from "./SubPages/defaultPage";
import MachineLearningData from "./SubPages/MachineData";
export default function NavBar() {
  const [page, setPage] = useState(1);

  const list = [
    {
      id: 1,
      button_name: "Home",
    },
    {
      id: 2,
      button_name: "Machine Learning",
    },
    {
      id: 3,
      button_name: "API Data",
    },
    {
      id: 4,
      button_name: "Charts",
    },
  ];

  function handleClick(id) {
    setPage(id);
  }

  let button_list = list.map((button) => {
    return (
      <li key={button.id}>
        <Button
          onClick={() => handleClick(button.id)}
          buttonName={button.button_name}
        />
      </li>
    );
  });

  return (
    <>
      <div>Nav Bar</div>

      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0px",
          listStyleType: "none",
          padding: 0,
        }}
      >
        {button_list}
      </ul>

      <DisplayPage page={page} />
    </>
  );
}

function DisplayPage({ page }) {
  let content = "";

  if (page === 1) {
    return <DefaultPage />;
  } else if (page === 2) {
    return <MachineLearningData />;
  } else if (page === 3) {
    return <ApiStats />;
  } else if (page === 4) {
    return <Charts />;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      {content}
    </div>
  );
}
