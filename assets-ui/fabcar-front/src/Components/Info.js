import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Laptop from '@material-ui/icons/Laptop';
import Logo from '../Components/Logo';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'auto',
    maxHeight: '85%',
    backgroundColor: theme.palette.background.paper,
  },
});

function FolderList(props) {
  const { classes } = props;
  const dataSize = props.data.length;
  console.log(dataSize)
  
    if(dataSize > 100) {
      return(
        <div className={classes.root}>
              
          <List>
            {
              JSON.parse(props.data).map((asset) => {
                return(
                <ListItem key={asset.Key}>
                    <Avatar>
                      <Laptop />
                    </Avatar>
                    {asset.Record ? <ListItemText primary={asset.Key} secondary={`${asset.Record.owner}'s ${asset.Record.make} ${asset.Record.model} (${asset.Record.color})`} />
                    : <ListItemText primary={asset.Key} secondary={asset.Msg}/>
                    }
                </ListItem>
                );
              })
            }
          </List>
          
        </div>
      );
    
    } else if (dataSize !== 0) {
      
        var asset = JSON.parse(props.data);

      return(
        <div className={classes.root}>
          <List>
                <ListItem>
                    <Avatar>
                      <Laptop />
                    </Avatar>
                    <ListItemText primary={asset.owner} secondary={`${asset.owner}'s ${asset.make} ${asset.model} (${asset.color})`} />
                </ListItem>
          </List>
        </div>
      );
    }

    return(
    <Logo />
    );

}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);