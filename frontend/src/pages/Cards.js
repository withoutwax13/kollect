import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../utils/actions";
import Photocard from "../components/Photocard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  InputAdornment,
  OutlinedInput
} from "@mui/material";
import Loading from "../components/Loading";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import SystemAlert from "../components/SystemAlert";

// Recyclable component for select input
const SelectInputComponent = ({
  label,
  value,
  stateHandler,
  menuItems,
  isLoading,
}) => {
  return (
    <Box>
      <FormControl disabled={isLoading} sx={{ minWidth: 120 }}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          id={label}
          value={value}
          label={label}
          onChange={(e) => stateHandler(e.target.value)}
        >
          {menuItems.map((menuItem, index) => {
            return (
              <MenuItem key={index} value={menuItem.value}>
                {menuItem.displayValue}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

// Recyclable component for price input
const PriceInputComponent = ({ label, value, stateHandler, isLoading }) => {
  return (
    <FormControl sx={{ m: 1 }} disabled={isLoading}>
      <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={value}
        onChange={(e) => stateHandler(e.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        label={label}
      />
    </FormControl>
  );
};

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards.all);

  const [systemMessage, setSystemMessage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({});

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [rarity, setRarity] = useState("");
  const [condition, setCondition] = useState("");

  const [page, setPage] = useState(1);
  const cardsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchCards({ searchTerm: search, filterOptions: filter })).finally(
      () => {
        setIsLoading(false);
        if (search && search.length > 0) {
          setIsSearchActive(true);
        } else {
          setIsSearchActive(false);
        }
        if (Object.keys(filter).length > 0) {
          setIsFilterActive(true);
        } else {
          setIsFilterActive(false);
        }
      }
    );
  }, [dispatch, filter, search, systemMessage]);

  const displayedCards = cards
    ? cards.slice((page - 1) * cardsPerPage, page * cardsPerPage)
    : [];

  const handleFilterChange = () => {
    const rarityRange = {
      common: [0.8, 1],
      uncommon: [0.6, 0.79],
      rare: [0.4, 0.59],
      "super rare": [0.2, 0.39],
      "ultra rare": [0, 0.19],
    };
    const defaultFilterState = {
      price: { min: 0, max: 0 },
      rarity: "",
      condition: "",
      // releaseDate:
    };
    if (
      maxPrice > 0 &&
      rarity !== defaultFilterState.rarity &&
      condition !== defaultFilterState.condition
    ) {
      setSystemMessage((prevState) => {
        const newState = prevState.filter(
          (alert) => alert.message !== "Filter applied successfully."
        );
        return [
          ...newState,
          {
            message: "Filter applied successfully.",
            type: "success",
            enabled: true,
          },
        ];
      });
      setFilter({
        price: { min: minPrice, max: maxPrice },
        rarity: { min: rarityRange[rarity][0], max: rarityRange[rarity][1] },
        condition: condition,
        // releaseDate: [startDate, endDate],
      });
    } else {
      setSystemMessage((prevState) => {
        const newState = prevState.filter(
          (alert) => alert.message !== "Please fill in all filter options."
        );
        return [
          ...newState,
          {
            message: "Please fill in all filter options.",
            type: "warning",
            enabled: true,
          },
        ];
      });
    }
  };

  const handleClearFilter = () => {
    setFilter({});
    setMinPrice(0);
    setMaxPrice(0);
    setRarity("");
    setCondition("");
    // setStartDate("");
    // setEndDate("");
    setIsFilterActive(false);
    setSystemMessage((prevState) => {
      const newState = prevState.filter(
        (alert) => alert.message !== "Filter applied successfully."
      );
      return newState;
    });
  };

  return (
    <Box className="page-container">
      <Box className="search-cards">
        <TextField
          label="Type keywords to search for photocards..."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />
      </Box>
      <Box className="cards-filter-group">
        <Box>
          <SelectInputComponent
            isLoading={isLoading}
            label="Rarity"
            value={rarity}
            stateHandler={setRarity}
            menuItems={[
              { value: "common", displayValue: "Common" },
              { value: "uncommon", displayValue: "Uncommon" },
              { value: "rare", displayValue: "Rare" },
              { value: "super rare", displayValue: "Super Rare" },
              { value: "ultra rare", displayValue: "Ultra Rare" },
            ]}
          />
        </Box>
        <Box>
          <SelectInputComponent
            isLoading={isLoading}
            label="Condition"
            value={condition}
            stateHandler={setCondition}
            menuItems={[
              { value: "mint", displayValue: "Mint" },
              { value: "near mint", displayValue: "Near Mint" },
              { value: "good", displayValue: "Good" },
              { value: "poor", displayValue: "Poor" },
            ]}
          />
        </Box>
        <Box>
          <PriceInputComponent
            label={"Min. Price"}
            value={minPrice}
            isLoading={isLoading}
            stateHandler={setMinPrice}
          />
        </Box>
        <Box>
          <PriceInputComponent
            label={"Max. Price"}
            value={maxPrice}
            isLoading={isLoading}
            stateHandler={setMaxPrice}
          />
        </Box>
        {
          // @TODO: Add date range picker for min and max release date
        }
        <Button onClick={handleFilterChange}>Apply Filter</Button>
        <Button disabled={!isFilterActive} onClick={handleClearFilter}>
          Clear Filter
        </Button>
      </Box>

      <Box className="system-message">
        {!isLoading && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            {systemMessage.map((message, index) => {
              return (
                message.enabled && (
                  <SystemAlert
                    key={index}
                    type={message.type}
                    message={message.message}
                    enabled={message.enabled}
                  />
                )
              );
            })}
          </Stack>
        )}
      </Box>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="pagination-container"
            marginTop={2}
            marginBottom={2}
          >
            {cards && cards.length > 0 && (
              <Pagination
                count={Math.ceil(cards.length / cardsPerPage)}
                page={page}
                onChange={(event, value) => setPage(value)}
              />
            )}
          </Box>
          <ul className="card-list">
            {cards &&
              cards.length > 0 &&
              displayedCards.map((card) => (
                <Photocard
                  className="card"
                  card={card}
                  key={card.cardId}
                  value={search}
                />
              ))}
            {!isLoading &&
              isSearchActive &&
              cards &&
              displayedCards.length === 0 && (
                <SystemAlert
                  type="info"
                  message={`No cards found with search term "${search}".`}
                />
              )}
            {!isLoading &&
              isFilterActive &&
              cards &&
              displayedCards.length === 0 && (
                <SystemAlert
                  type="info"
                  message="No cards found for the filter options."
                />
              )}
          </ul>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="pagination-container"
            marginTop={2}
            marginBottom={2}
          >
            {cards && cards.length > 0 && (
              <Pagination
                count={Math.ceil(cards.length / cardsPerPage)}
                page={page}
                onChange={(event, value) => setPage(value)}
              />
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cards;
