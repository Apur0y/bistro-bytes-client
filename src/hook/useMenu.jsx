import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]); // Default as an empty array
  const [loading, setLoading] = useState(true); // Default to true since data is loading

  useEffect(() => {
    setLoading(true); // Ensure loading state is set on fetch
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setLoading(false); // Stop loading even if there's an error
      });

     
  }, []);

  return [ menu, loading ]; // Return the state
};

export default useMenu;
