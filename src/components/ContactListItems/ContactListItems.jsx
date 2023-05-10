import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItems.styled'

export const ContactListItems = ({ id, name, number, onDelete }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
