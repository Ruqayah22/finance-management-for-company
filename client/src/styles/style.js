import { makeStyles } from "@material-ui/core/styles";
import Image from "../../public/assets/AlWasee.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
