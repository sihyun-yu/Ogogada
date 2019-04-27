import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton';
import AddCircleIcon from 'material-ui-icons/AddCircle';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    background: 'none',
  },
  gridList: {
    width: 800,
    height: 500,
  },
  titleBar: {
    fontSize: '8px',
    color: 'red',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
} );

function Menu( props ) {
  const {
    classes, menu, addCheckItem, checkOpen,
  } = props;

  const addMenuItem = ( e, item ) => {
    addCheckItem( item.id );
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>

      <GridList cellHeight={120} className={classes.gridList}>
        {menu.map( item => (
          <GridListTile className={classes.gridListTile} key={item.id}>
            <img src="/img/food-placeholder.png" alt={item.name} />
            <GridListTileBar
              className={classes.titleBar}
              title={item.name}
              subtitle={<span>$ {item.price.toFixed( 2 )}</span>}
              actionIcon={
                checkOpen && (
                  <IconButton className={classes.icon}>
                    <AddCircleIcon onClick={e => addMenuItem( e, item )} />
                  </IconButton>
                )
              }
            />
          </GridListTile>
        ) )}
      </GridList>
    </div>
  );
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  addCheckItem: PropTypes.func.isRequired,
  checkOpen: PropTypes.bool,
};

Menu.defaultProps = {
  checkOpen: false,
};

export default withStyles( styles )( Menu );
