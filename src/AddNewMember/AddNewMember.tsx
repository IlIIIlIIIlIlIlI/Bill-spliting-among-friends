import './AddNewMember.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { setDatesSelected } from '../Redux/Actions';

const scssObj = 'add-new-member';

function AddNewMember() {
  const dispatch = useDispatch();
  return (
    <div>
      AddNewMember
      <Button
        onClick={() => {
          dispatch(setDatesSelected({ name: 'suraj' }));
        }}
      >
        ADd
      </Button>
    </div>
  );
}

export default AddNewMember;
