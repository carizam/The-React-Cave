import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ClientFactory = () => {
  const [, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const products = doc(db, "items", "3QlqiDcuNJHW9tgo2w8H");
    getDoc(products).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, []);

  return null;
};

export default ClientFactory;
