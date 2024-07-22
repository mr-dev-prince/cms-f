import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(
          "http://phcms-env.eba-wekxmzzv.ap-south-1.elasticbeanstalk.com/get"
        );
        setData(res.data);
      };
      console.log(data);
      getData();
    } catch (error) {
      console.log("something went wrong", error?.message);
    }
  }, []);
  return (
    <div>
      <h1 className="text-xl text-black ">Prince Kumar</h1>
      <h1 className="text-xl font-bold text-black">{data?.par}</h1>
    </div>
  );
}

export default App;
