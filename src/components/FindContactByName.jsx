import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../redux/filter/filterSlice';

const FindContactByName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const inputChangeHandler = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div>
      <input
        className='filterInput'
        name='filter'
        type='text'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={inputChangeHandler}
        value={filter}
        placeholder='Enter name to find DUDE and call his mom xD'
      />
    </div>
  );
};

export default FindContactByName;
