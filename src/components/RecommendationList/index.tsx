import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

interface RecommendationListProps {
  recommendations: string[];
}

const RecommendationList: React.FC<RecommendationListProps> = ({ recommendations }) => (
  <List>
    {recommendations.map((item, index) => (
      <ListItem key={index} sx={{ padding: '0px' }}>
        <ListItemIcon sx={{ minWidth: '30px' }}>
          <FiberManualRecordIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
);

export default RecommendationList;
