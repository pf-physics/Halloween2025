import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";

const testKey = "eek123";

const Test = () => {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const db = getDatabase();
    const a = ref(db, "test");
    onValue(a, (snapshot) => {
      setLoading(false);
      const data = snapshot.val();
      setNum(data);
    });
  };

  const writeData = () => {
    const db = getDatabase();
    set(ref(db, "test"), num + 1);
  };

  return (
    <div>
      {loading && "Loading... "}
      {num}
      <button>Update</button>
      <button onClick={writeData}>Delete</button>
    </div>
  );
};

export default Test;
