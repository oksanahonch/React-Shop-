import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectFilter = ({handleChange, sort}) => {

    

    


  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
        <InputLabel id="demo-select-small-label">Сортировка по:</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sort}
          label="Сортировка по:"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Нет сортировки</em>
          </MenuItem>
          <MenuItem value={'title'}>Наименованию</MenuItem>
          <MenuItem value={'price'}>Цене</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectFilter;
