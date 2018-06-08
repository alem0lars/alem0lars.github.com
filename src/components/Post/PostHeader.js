import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Paper from "material-ui/Paper";
import Table from "material-ui/Table/Table";
import TableHead from "material-ui/Table/TableHead";
import TableBody from "material-ui/Table/TableBody";
import TableRow from "material-ui/Table/TableRow";
import TableCell from "material-ui/Table/TableCell";

const styles = theme => ({
  header: {
    margin: "0 0 3em"
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  subTitle: {
    color: theme.main.colors.subTitle,
    fontSize: `${theme.main.fonts.subTitle.size}em`,
    lineHeight: theme.main.fonts.subTitle.lineHeight,
    fontWeight: theme.main.fonts.subTitle.weight,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`
    }
  },
  details: {
    width: "100%",
    marginTop: "2em",
    marginBottom: "2em",
    overflowX: "auto"
  },
  meta: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: theme.main.fonts.meta.weight,
    color: theme.main.colors.meta
  }
});

const PostHeader = props => {
  const {
    classes,
    title,
    subTitle,
    date,
    category,
    status,
    revision,
    confidence,
    importance
  } = props;

  function myDate(dateString) {
    const dateObj = new Date(dateString);
    const dateToShow = dateObj.toDateString();

    return dateToShow;
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subTitle}>{subTitle}</h2>
      <div className={classes.meta}>{myDate(date)}</div>

      <Paper className={classes.details}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="dense">Category</TableCell>
              <TableCell padding="dense">Status</TableCell>
              <TableCell padding="dense">Revision</TableCell>
              <TableCell padding="dense">Confidence</TableCell>
              <TableCell padding="dense">Importance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell padding="dense">{category}</TableCell>
              <TableCell padding="dense">{status}</TableCell>
              <TableCell padding="dense">
                R-{revision.toString().padStart(3, "0")}
              </TableCell>
              <TableCell padding="dense">{confidence}</TableCell>
              <TableCell padding="dense">{importance}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </header>
  );
};

PostHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  revision: PropTypes.number.isRequired,
  confidence: PropTypes.string.isRequired,
  importance: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostHeader);
