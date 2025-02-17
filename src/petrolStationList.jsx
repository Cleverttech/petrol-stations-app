import  { useEffect } from 'react';
import axios from 'axios';

const API_URL =
  'https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';

 const fetchGasStations = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("response", response)
    
    /* return response.data.result.records.map((station) => ({
      id: station.objectid,
      address: station.adresse,
    }));*/
  } catch (error) {
    console.error('Error fetching gas station data:', error);
    throw error;
  }
};


const PetrolStationList = () => {
 // const [gasStations, setGasStations] = useState([]);

  useEffect(() => {
    fetchGasStations()
      .then((data) => console.log("data",data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Gas Stations</h2>
      <ul>
        {/*
                {gasStations.map((station) => (
          <li key={station.id}>{station.address}</li>
        ))}
        */}
      </ul>
    </div>
  );
};
export default PetrolStationList;
