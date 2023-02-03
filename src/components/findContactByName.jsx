const FindContactByName = ({ inputChangeHandler }) => {
  return (
    <div>
      <span>Find contact by name </span>
      <input
        name='filter'
        type='text'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default FindContactByName;
