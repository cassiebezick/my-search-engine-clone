import React from "react";
import { Link } from "react-router-dom";
import {
  StyledSearchPageHeaderContainer,
  StyledSearchHeader,
  StyledHeaderLeft,
  StyledHeaderMiddle,
  StyledSubOptionsLeft,
  StyledOptions,
  StyledHeaderRight,
  StyledLogo,
} from "./SearchPage.Styled";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "./SearchInput";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <StyledSearchPageHeaderContainer>
      <StyledSearchHeader>
        <StyledHeaderLeft>
          <Link to="/">
            <StyledLogo
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
              alt="google-logo"
            />
          </Link>
          <StyledHeaderMiddle>
            <SearchInput />
            <StyledSubOptionsLeft>
              <StyledOptions>
                <SearchIcon />
                <Link to="/all">All</Link>
              </StyledOptions>

              <StyledOptions>
                <FeedIcon />
                <Link to="/news">News</Link>
              </StyledOptions>

              <StyledOptions>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </StyledOptions>

              <StyledOptions>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </StyledOptions>

              <StyledOptions>
                <LocationOnIcon />
                <Link to="/maps">Maps</Link>
              </StyledOptions>
            </StyledSubOptionsLeft>
          </StyledHeaderMiddle>
        </StyledHeaderLeft>
        <StyledHeaderRight>
          <StyledOptions>
            <Tooltip title="Settings">
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip tile="Google Apps">
              <IconButton>
                <AppsIcon />
              </IconButton>
            </Tooltip>
          </StyledOptions>
          <StyledOptions>
            <Tooltip title="Google Account">
              <Avatar
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#8ab4f8",
                  color: "white",
                  cursor: "pointer",
                  marginRight: "8px",
                }}
              >
                JP
              </Avatar>
            </Tooltip>
          </StyledOptions>
        </StyledHeaderRight>
      </StyledSearchHeader>
      {true && <SearchResults />}
    </StyledSearchPageHeaderContainer>
  );
};

export default SearchPage;
