import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useState, useEffect} from "react";

export const Collection = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "tienda");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) =>
                doc.data()
            );
            setProducts(docs);
        });
        }, []
    );

    return products
}