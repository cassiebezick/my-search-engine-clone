import { useEffect, useState } from 'react';
import { 
    StyledInputWrapper,
    StyledSearchIcon,
    StyledMicIcon,
    StyledButtonContainer,
 } from "./SearchInput.Styled";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = ({showButtons = false}) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryFromUrl = searchParams.get("q") ?? "";
    const [searchTerm, setSearchTerm] = useState(queryFromUrl);

useEffect(() => {
    setSearchTerm(queryFromUrl);
}, [queryFromUrl]);

const handleSearch = (e) => {
    e.preventDefault();

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
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Tooltip title="Search by voice">
                <StyledMicIcon />
            </Tooltip>
        </StyledInputWrapper>
        <StyledButtonContainer showButtons={showButtons}>
            <Button variant="outlined" type="submit">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </StyledButtonContainer>
    </form>
  )
}

export default SearchInput