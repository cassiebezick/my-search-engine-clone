import { useState } from "react";
import {
  StyledInputWrapper,
  StyledSearchIcon,
  StyledMicIcon,
  StyledButtonContainer,
} from "./SearchInput.Styled";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = ({ showButtons = false }) => {
  const [searchParams] = useSearchParams();
  const queryFromUrl = searchParams.get("q") ?? "";

  return (
    <SearchInputForm
      key={queryFromUrl}
      initialQuery={queryFromUrl}
      showButtons={showButtons}
    />
  );
};

const SearchInputForm = ({ initialQuery, showButtons }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchTerm.trim();
    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <StyledInputWrapper>
        <StyledSearchIcon />

        <input
          type="text"
          aria-label="Search the web"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <Tooltip title="Search by voice">
          <StyledMicIcon />
        </Tooltip>
      </StyledInputWrapper>

      <StyledButtonContainer showButtons={showButtons}>
        <Button variant="outlined" type="submit">
          Google Search
        </Button>

        <Button variant="outlined" type="button">
          I'm Feeling Lucky
        </Button>
      </StyledButtonContainer>
    </form>
  );
};

export default SearchInput;