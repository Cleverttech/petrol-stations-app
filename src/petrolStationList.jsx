import  { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL =
  'https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';

 const fetchPetrolStations = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("response", response)
    const petrolStationsData = response.data.features

     return petrolStationsData.map((station) => ({
      id: station.attributes.objectid,
      address: station.attributes.adresse,
    }))
  } catch (error) {
    console.error('Could not fetch petrol stations', error);
    throw error;
  }
};


const PetrolStationList = () => {
 const [petrolStations, setPetrolStations] = useState([]);

  useEffect(() => {
    fetchPetrolStations()
      .then((data) => setPetrolStations(data))
      .catch((error) => console.error(error));
  }, []);

  console.log("petrolStations", petrolStations)

  return (
    <div>
      <h2>Petrol Stations</h2>
      <ul>
        {petrolStations.map((station) => (
          <li key={station.id}>{station.address}</li>
        ))}
  
      </ul>
    </div>
  );
};
export default PetrolStationList;
