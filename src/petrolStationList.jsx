import  { useEffect, useState } from 'react';
import axios from 'axios';
import {List, ListItem, ListSubheader, TextField, Button, Box }from '@mui/material';


const API_URL =
  'https://geoportal.stadt-koeln.de/arcgis/rest/services/verkehr/gefahrgutstrecken/MapServer/0/query?where=objectid+is+not+null&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=4326&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson';

 const fetchPetrolStations = async () => {
  try {
    const response = await axios.get(API_URL);
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
  const [searchStation, setSearchStation] = useState('');
  const [sortStationOrder, setStationSortOrder] = useState('asc');

   const handleOnChangeSearchStation =(e)=>{
       setSearchStation(e.target.value)
   }

   const filteredPetrolStations = petrolStations
   .filter((station)=> station.address.toLowerCase().includes(searchStation.toLocaleLowerCase()))
   .sort((a, b) => (sortStationOrder === 'asc' ? a.address.localeCompare(b.address) : b.address.localeCompare(a.address)))
   
  useEffect(() => {
    fetchPetrolStations()
      .then((data) => setPetrolStations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Find your nearest petrol station</h2>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
        <TextField
          label="Search by street name"
          variant="outlined"
          sx={{ width: '50%' }}
          margin="normal"
          onChange={handleOnChangeSearchStation}
        />
        <Button
          sx={{ margin: 2, width: "13%"}}  
          variant="contained"
          onClick={() => setStationSortOrder(sortStationOrder === 'asc' ? 'desc' : 'asc')}
        >
          sort({sortStationOrder})
        </Button>
      </Box>
      <List
        sx={ListStyle}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          All petrol stations in Cologne
        </ListSubheader>
      }>
        {filteredPetrolStations.map((station) => (
          <ListItem key={station.id}>{station.address}</ListItem>
        ))}
      </List>
    </div>
  );
};
export default PetrolStationList;

const ListStyle = {
   width: '100%', maxWidth: 360, bgcolor: 'background.paper' 
}
