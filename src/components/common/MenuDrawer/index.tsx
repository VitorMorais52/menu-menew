//@mui components
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

//stylesheets
import { Container } from "./styles";

type MenuProps = {
  isOpen: boolean;
  requestClose: () => void;
};

function Menu({ isOpen, requestClose }: MenuProps) {
  return (
    <Drawer
      open={isOpen}
      onClose={requestClose}
      anchor="left"
      className="menu-drawer"
    >
      <Container>
        <List>
          <ListItem button key={"Home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

          <Divider />

          <ListItem button key={"Settings"}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItem>
        </List>
      </Container>
    </Drawer>
  );
}

export default Menu;
