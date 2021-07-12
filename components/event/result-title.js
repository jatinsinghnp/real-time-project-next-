import Button from "../ui/button";
import classes from "./result-title.module.css";

function ResultsTitle(props) {
  const { date } = props;
  const humanReadableDate = new Date(date).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show All events </Button>
    </section>
  );
}

export default ResultsTitle;
