const ContactListMarkup = ({ contacts, deleteContactHandler, filter }) => {
  const filteredContactsArr = contacts && contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
      {
        contacts && filteredContactsArr.map(({ name, id, number }) =>
          <li key={id}>{name}
            <b>:</b> {number}
            <button onClick={() => deleteContactHandler(id)}>Delete</button>
          </li>)
      }
    </>
  );
};
export default ContactListMarkup;
