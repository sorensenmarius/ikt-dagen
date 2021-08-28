import { Chip, makeStyles } from "@material-ui/core";
import { FC } from "react";

interface ISmallChipProps {
  text: string;
  color?: string;
  bachelor?: boolean;
  master?: boolean;
}

const useStyles = makeStyles(() => ({
  chip: {
    backgroundColor: ({ color }: { color: string }) => color,
    color: "#fff",
    fontSize: "14px",
    height: "20px",
    "& .MuiChip-label": {
      padding: "0 6px",
    },
    marginRight: "4px",
  },
}));

const SmallChip: FC<ISmallChipProps> = ({ text, color, bachelor, master }) => {
  if (bachelor) {
    color = "#6696CF";
  }

  if (master) {
    color = "#66CF83";
  }

  const classes = useStyles({ color: color ?? "#CF6666" });

  return <Chip className={classes.chip} label={text} />;
};

export default SmallChip;
