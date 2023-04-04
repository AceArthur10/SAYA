import Axios from "axios";
import { useEffect, useState } from "react";

function Notifications() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/notfications`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default Notifications;
