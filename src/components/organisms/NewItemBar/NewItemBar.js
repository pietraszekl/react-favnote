import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import withContext from '../../../hoc/withContext';
import Heading from '../../atoms/Heading/Heading';
import { addItem as addNoteAction } from '../../../actions/index';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  border-radius: 10px;
  border-radius: 20px;
  height: 30vh;
  margin-bottom: 20px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 30px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValue={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        addItem(pageContext, values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <StyledInput as={Field} type="text" name="title" placeholder="title" />
          {pageContext === 'articles' && <StyledInput placeholder="title" />}
          {/* <StyledTextArea as="textarea" placeholder="title" /> */}
          <Button type="submit" activecolor={pageContext}>
            Add note
          </Button>
        </Form>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addNoteAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
