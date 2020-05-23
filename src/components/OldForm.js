import React from 'react'
import { useFormik } from 'formik'
function OldForm () {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: values => console.log('Form data', values),
    validate: values => {
      let errors = {}
      if (!values.name) {
        errors.name = 'Required'
      }
      if (!values.email) {
        errors.email = 'Required'
      }
      if (!values.channel) {
        errors.channel = 'Required'
      }

      return errors
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default OldForm
