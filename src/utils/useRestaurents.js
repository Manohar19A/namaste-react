import { useEffect, useState } from 'react'

const useRestaurents = (resId) => {
    const [resInfo,serResInfo]=useState([])
    useEffect(() => {
        const fetchData = async () => {
          const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.312817&lng=80.418503&restaurantId="+resId
          );
          const json = await data.json();
        //   console.log(json);
          serResInfo(json.data.cards)
          // return json
        };
        fetchData()
      }, []);

    return resInfo
}

export default useRestaurents