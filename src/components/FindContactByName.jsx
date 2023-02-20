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
      <span>Find contact by name </span>
      <input
        name='filter'
        type='text'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={inputChangeHandler}
        value={filter}
      />
    </div>
  );
};

export default FindContactByName;
