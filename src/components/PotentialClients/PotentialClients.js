import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import Form from './Form';
import Result from './Result';
import potencialClientData from '../../api/potentialClientsData';

function removeDiacritic(texto) {
  return (texto.toLowerCase().replace('$','').normalize("NFD").replace(/\p{Diacritic}/gu, ''));
}

const filteredProducts = (type, value) => {
  const formattedValue = removeDiacritic(value);
  return (potencialClientData.filter(product => (removeDiacritic(product[type]).startsWith(formattedValue))))
};

const defaultValues = {
  firsName: '',
  lastName: '',
  gender: '',
  birthDay: '',
  cellphone:'',
  addressHome: '',
  profession: '',
  incomes: ''
};


const PotentialClients = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [searchResult, setSearchResult] = useState(potencialClientData);

  const handleSubmit = (type='firsName', value) => {
    setFormValues({
      ...defaultValues,
      [type]: value
    }
    );
    setSearchResult(filteredProducts(type, value));
};

  return (
    <Container maxWidth={'lg'} align="center">
      <Typography variant="h4">Buscar posibles clientes</Typography>
      <Form formValues={formValues} handleSubmit={handleSubmit} />
      <Result rows={searchResult}/>
    </Container>
  )
}

export default PotentialClients