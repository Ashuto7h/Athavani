import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'baseline',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  filterBar: {
    background: "radial-gradient(orange 100%,transparent) !important",
    marginBottom: "21px",
    padding: "3px 21px",
    borderRadius: "15px",
    display: 'flex',
    justifyContent: 'center'
  },
  filterButtons: {
    backgroundColor: "tomato",
    margin: "0 3px",
    color: "white"
  }
}));