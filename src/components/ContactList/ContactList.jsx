import PropTypes from 'prop-types';
import { ContactListItems } from 'components/ContactListItems/ContactListItems';
import { List } from './ContactList.styled'

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => (
        <ContactListItems
          id={id}
          key={id}
          number={number}
          name={name}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired
};
