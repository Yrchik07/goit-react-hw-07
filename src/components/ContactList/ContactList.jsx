import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';
import { 
  // selectContacts, 
  selectDetails,
  selectIsError,
  selectIsLoading,
  //  selectNameFilter 
  } from '../../redux/selectors';
import { useEffect } from 'react';
import { apiFetchContacts } from '../../redux/contactsDetailsSlice';
// import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage'

export default function ContactList() {
  // const {contactId} = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);
  const error = useSelector(selectIsError)

  useEffect(() => {
    dispatch(apiFetchContacts())
  }, [dispatch])
  // const contacts = useSelector(selectContacts);
  // const query = useSelector(selectNameFilter);
  // const contactsData = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(query.toLowerCase()),
  // );

  return (
    <ul className={css.contactList}>
      {isLoading && <Loader /> }
      {error && <ErrorMessage message={error}/>}
      {Array.isArray(details) &&
        details.map(contact => (
            <Contact key={contact.id} contact={contact}/>
        ))}
    </ul>
  );
}
