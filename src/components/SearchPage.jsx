import { Link, useSearchParams } from "react-router-dom";
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
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "./SearchInput";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import SearchResults from "./SearchResults";


const SearchPage = () => {
  const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const allResultsUrl = `/search?q=${encodeURIComponent(query)}`;

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
               <Link to={allResultsUrl} aria-current="page">
                All
               </Link>
            </StyledOptions>

              <StyledOptions>
                <FeedIcon />
                  News
              </StyledOptions>

              <StyledOptions>
                <LocalOfferIcon />
                Shopping
              </StyledOptions>

              <StyledOptions>
                <ImageIcon />
                Images
              </StyledOptions>

              <StyledOptions>
                <LocationOnIcon />
                Maps
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
            <Tooltip title="Google Apps">
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
      <SearchResults />
    </StyledSearchPageHeaderContainer>
  );
};

export default SearchPage;
