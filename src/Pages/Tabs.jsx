import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {AllProduct} from '../components/home/Product'
import {Bulbs} from '../components/home/Product'
import {Chandelier} from '../components/home/Product'
import {Lamps} from '../components/home/Product'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Select() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //styles
  const myStyle = {
    color: "rgb(157 23 77)",
    fontSize:'22px',
    fontWeight:'600',
    textTransform:'none'
  }

  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="All" {...a11yProps(0)} style={myStyle} />
          <Tab label="Lamps" {...a11yProps(1)} style={myStyle} />
          <Tab label="Chandeliers" {...a11yProps(2)} style={myStyle} />
          <Tab label="Bulbs" {...a11yProps(3)} style={myStyle} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <h2>Our Products</h2>
            <AllProduct />
      </TabPanel>
      <TabPanel value={value} index={1}>
            <Lamps />
      </TabPanel>
      <TabPanel value={value} index={2}>
            <Chandelier />
      </TabPanel>
      <TabPanel value={value} index={3}>
            <Bulbs />
      </TabPanel>
    </Box>
  );
}


