import { useEffect, useState } from "react";
import restaurants from "../utils/mockData";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [load, setLoad] = useState(false);
  const [location, setLocation] = useState(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503"
  );
  const isOnline = useOnline();
  useEffect(() => {
    fetchResList();
  }, [location]);
  const fetchResList = async () => {
    setLoad(true);
    const res = await fetch(
      location
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503",
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.43378466891938&lng=78.38146830163323",
    );
    const json = await res.json();
    console.log(json?.data);
    setResList(
      json?.data?.cards[1]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setLoad(false);
  };
  console.log("render");
  console.log(resList);
  if (!isOnline) {
    return <h1>You are Offline</h1>;
  }
  if (resList?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="search p-4 round-md m-2 bg-amber-500">
        <input
        data-testid="input"
          className="p-2 rounded-md"
          type="text"
          placeholder="Search Restaurents"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-green-500 rounded-md text-white"
          onClick={() => {
            setResList(
              resList?.filter((i) =>
                i.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
            setSearchText("");
          }}
        >
          Search
        </button>
        <button
          className="bg-cyan-400 p-2 m-2 rounded-md text-white hover:bg-cyan-800"
          onClick={() => {
            setResList(resList.filter((i) => i.info.avgRating > 4));
          }}
        >
          Top Restaurents
        </button>
        <select
          value={location}
          className="p-2 m-2 bg-rose-600 text-white rounded-md"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.312817&lng=80.418503">
            Guntur
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.43378466891938&lng=78.38146830163323">
            Hyderabad
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5057232&lng=80.049922">
            Ongole
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911">
            Ananthapuram
          </option>
          <option value="https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153">
            Vijayawada
          </option>{" "}
        </select>
      </div>
      {load ? (
        <Shimmer />
      ) : (
        <div  data-testid="res-list" className="flex p-5 m-5 flex-wrap gap-4 rounded-md hover:border-red-700">
          {resList
            ?.filter((i) =>
              i.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((restaurent, index) => (
              <Link
                className="linkitem"
                key={restaurent.info.id}
                to={`/restaurent/${restaurent.info.id}`}
              >
                {" "}
                <ResCard restaurants={restaurent} />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
export default Body;
