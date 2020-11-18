import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        console.log('username', username);
        console.log('password', password);
        axios
          .post('http://localhost:9000/api/user/login', { username, password })
          .then(() => console.log('login succes'))
          .catch((err) => {
            console.log('error login', err);
          });
      }}
    >
      {() => (
        <Form>
          <Field name="username" type="text" />
          <Field name="password" type="password" />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;