import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Label, Button, Input } from './ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    // const { name, value } = event.currentTarget;

    // this.setState({
    //   [name]: value,
    // });
  };

  // const handleSubmit = event => {
  //   const resetForm = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };
  //   event.preventDefault();
  //   this.props.propSubmit(this.state);
  //   resetForm();
  // };
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            placeholder="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            id={nameInputId}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            placeholder="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            id={numberInputId}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
}
