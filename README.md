This article describes in a sneak peek what is the library [react-hook-form](#react-hook-form-install) and how to use it. First of all, you need to set up the environment by creating a new react application with the command create-react-app. If you don't know how to do it, please refer to my post [Setting up the react environment with the super tool create-react-app](https://dev.to/sergiosanchezs/setting-up-the-react-environment-with-the-super-tool-creat-react-app-5hja) before continuing in this tutorial.

## Content Table

1. [Installing libraries locally](#lib-local)
   - [Installing React Hook Form Package](#react-hook-form-install)
   - [Installing Material UI](#material-ui-install).
2. [Creating the Needing Files](#creating-files).
3. [Setting up the App.js](#setup-app).
4. [Starting the application](#start-app).
5. [Working on the design of SignInForm](#design-form).
   - [styles.js File](#style-file).
   - [SignInForm Component](#SignInForm-Component).
6. [Working with React-Hook-Form to Validate the data](#working-react-hook-form-validation).

   - [Email Field](#email-field).
   - [Password Field](#password-field).
   - [Checkbox](#checkbox).
     - [Option 1 - Register](#check-op1).
     - [Option 2 - Controller and render](#check-op2).

7. [DevTools on React-Hook-Form](#devtools).
8. [References](#references).

## **Installing libraries locally** <a name="lib-local"></a>

We need to install the npm modules necessary to build this project which means it will be saved as a dependency in our `package.json` file.

We are going to install _material-ui_ and _react-hook-form_ library locally.

#### Installing React Hook Form Package <a name="react-hook-form-install"></a>

To install the `react-hook-form` module we have to type the following command on the terminal located in the project directory:

```
yarn add react-hook-form@6.5.3
```

I've installed the version _6.5.3_.

#### Installing Material UI <a name="material-ui-install"></a>

To install the `material-ui` module to give some styling to our example form, we have to type the following command:

```
yarn add @material-ui/core@4.11.0
yarn add @material-ui/icons@4.9.1
```

## Creating the Needing Files <a name="creating-files"></a>

This commands are for people working on a MAC or Linux Machine, If you are on a windows you can install an emulator to type the commands as you were in a Linux Machine. [Click here to download Hyper](https://hyper.is/)

```
mkdir components
touch components/SignInForm.js
touch styles.js
```

## Setting up the App.js <a name="setup-app"></a>

In the App.js copy the following code or import and add the SignInForm component:

```javascript
import React from 'react';
import SignInForm from './components/SignInForm';

const App = () => (
  <div>
    <SignInForm />
  </div>
);

export default App;
```

## Starting the application <a name="start-app"></a>

You can start the application as you see in the tutorial in the introduction of this article with the following command:

```
yarn run start
```

## Working on the design of SignInForm <a name="design-form"></a>

### styles.js File <a name="style-file"></a>

In this file, we are gonna change some classes, colours and styles of the final design of our Sign In Form based on the `material-ui` library.

```javascript
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const mingColor = '#387780';
const dartmouthGreenColor = '#2D7638';
const emeraldGreenColor = '#62C370';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: mingColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: dartmouthGreenColor,
    },
    '&$checked': {
      color: '#3D70B2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: dartmouthGreenColor,
      },
      '&:hover fieldset': {
        borderColor: emeraldGreenColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: mingColor,
      },
    },
  },
})(TextField);

export const useStyles = makeStyles(theme => {
  return {
    paper: {
      margin: theme.spacing(4, 0),
      display: 'flex',
      color: '#387780',
      flexDirection: 'column',
      alignItems: 'center',
      border: `1px solid ${emeraldGreenColor}`,
      borderRadius: '2rem',
      padding: '1.5rem 2.5rem',
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: emeraldGreenColor,
      fontSize: 50,
    },
    form: {
      marginTop: theme.spacing(4),
      width: '100%',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: emeraldGreenColor,
      color: 'white',
      padding: '50 50',
    },
    link: {
      color: mingColor,
      textDecoration: 'none !important',
    },
    checkBox: {
      color: `${emeraldGreenColor} !important`,
    },
    error: {
      color: 'red',
    },
  };
});
```

### SignInForm Component <a name="SignInForm-Component"></a>

This is the component with the styles defined in the previous file applied and using the `material-ui` library for final design.

```javascript
import React from 'react';
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import {
  Avatar,
  Grid,
  Container,
  CssBaseline,
  FormControlLabel,
  Button,
  Link,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { CssTextField, useStyles } from '../styles';

const SignInForm = () => {
  const classes = useStyles();

  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: 45 }} />
        </Avatar>
        <Typography component='h1' variant='h4'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={e => onSubmit(e)}>
          <CssTextField
            name='email'
            label='Email Address'
            variant='outlined'
            margin='normal'
            autoComplete='email'
            className={classes.margin}
            fullWidth
            required
            autoFocus
          />

          <CssTextField
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            fullWidth
            required
            autoComplete='current-password'
          />

          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2' className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <FormControlLabel
                label='Remember me'
                control={
                  <Checkbox
                    className={classes.checkBox}
                    name='remember'
                    defaultValue={false}
                  />
                }
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href='#' variant='body2' className={classes.link}>
                {'New to this platform? Create an Acount.'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignInForm;
```

## Working with React-Hook-Form <a name="working-react-hook-form-validation"></a> to Validate the data

Here we are going to explain some tweaks to be able to validate the data in the `SignInForm` component.

First, we need to import `useForm` hook and the `Controller` component from the library:

```javascript
import { useForm, Controller } from 'react-hook-form';
```

After, initializing the styles in the `SignInForm` component we are going to add the `register` and `handleSubmit` functions, and `errors` and `control` objects:

```javascript
const { register, handleSubmit, errors, control } = useForm();
```

However, If you want to configure the `useForm` hook more, you can add an object with the details that you want to specify:

```javascript
// ...
const { register, handleSubmit, control, errors } = useForm({
  mode: 'onChange',
  reValidateMode: 'onChange',
  defaultValues: {
    email: '',
    password: '',
    remember: false,
  },
});
// ...
```

We are gonna update our `onSubmit` function and integrate it with `handleSubmit` hook from `useFrom` inside the form tag:

```javascript
// ...
const onSubmit = data => alert(JSON.stringify(data));
        // ...
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
        // ...
```

#### Email Field <a name="email-field"></a>

In order to add each input field to the form data, we just need to reference the `register` function in each component. For example, in an `input`, we add the property ref. However, we are using `material-ui`, so, to do the reference to the register function we use the property `inputRef` instead. See the example below:

```javascript
// ...
<CssTextField
  name='email'
  label='Email Address'
  variant='outlined'
  margin='normal'
  autoComplete='email'
  className={classes.margin}
  fullWidth
  required
  autoFocus
  inputRef={register}
/>
// ...
```

We can add an object to the register function to be able to set up different functionalities. For instance, in the email, we want the email to be `required` and personalize the `message` that the user will see if the email field is blank. Additionally, we want the email to follow a certain `pattern` that every email has, so we are going to use a regex expression to do this and set up a `message` if the email doesn´t follow the pattern established by this expression. We add an error property to the `CssTextField` that this changes the colour to red if there is an error message to show about this field.

```javascript
// ...
<CssTextField
  name='email'
  label='Email Address'
  variant='outlined'
  margin='normal'
  inputRef={register({
    required: 'You must provide the email address!',
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'You must provide a valid email address!',
    },
  })}
  autoComplete='email'
  error={!!errors.email}
  className={classes.margin}
  fullWidth
  autoFocus
/>
// ...
```

Now, we want that if occurs any of the errors aforementioned (required field and pattern) to show the message to the user. We use this code after the previous component:

```javascript
{
  errors.email && <span className={classes.error}>{errors.email.message}</span>;
}
// ...
```

#### Password Field <a name="password-field"></a>

In the password field we are going to set up as a required field and as the minimum length of 6 characters. The component with the register function and the error message display section will be like this:

```javascript
// ...
<CssTextField
  name='password'
  label='Password'
  type='password'
  variant='outlined'
  margin='normal'
  inputRef={register({
    required: 'You must provide a password.',
    minLength: {
      value: 6,
      message: 'Your password must be greater than 6 characters',
    },
  })}
  fullWidth
  autoComplete='current-password'
/>;
{
  errors.password && (
    <span className={classes.error}>{errors.password.message}</span>
  );
}
// ...
```

#### Checkbox <a name="checkbox"></a>

For `Checkbox` component, there are two options. However, I prefer the second one which the defaultValue updates the initial state of the checkbox. This are the options:

##### Option 1 - Register <a name="check-op1"></a>

This option is using the register function like in the previous components.

```javascript
// ...
<FormControlLabel
  label='Remember me'
  name='remember'
  control={<Checkbox className={classes.checkBox} inputRef={register()} />}
/>
// ...
```

##### Option 2 - Controller and render <a name="check-op2"></a>

In this option, we need to change the Checkbox to Controller inside the control property to be able to expose to register this field in the form data. In the `Controller` component we add the `control={control}` we put a `defaultValue` right in line, and add the render property to set up the onChange event and checked value.

After the previous grid container, we add another one to add the `checkTest` checkbox. You can see the component added into the code below:

```javascript
          // ...
          </Grid>

          <Grid container>
            <FormControlLabel
              control={
                <Controller
                  control={control}
                  name='checkTest'
                  defaultValue={true}
                  render={({ onChange, value }) => (
                    <Checkbox
                      className={classes.checkBox}
                      onChange={e => onChange(e.target.checked)}
                      checked={value}
                    />
                  )}
                />
              }
              label='Checkbox with Controller and render'
            />
          </Grid>

          <Button
          // ...
```

Now that we have all in place let's test it out.

## DevTools on React-Hook-Form <a name="devtools"></a>

1. To install the devtools in the dev dependencies package in the project executing the following command:

```
yarn add @hookform/devtools@2.2.1 -D
```

The latest version at this time is `2.2.1`.

2. import the `DevTool` in the `SignInForm` Component:

```javascript
import { DevTool } from '@hookform/devtools';
```

3. We have already the control object in the useForm declaration:

```javascript
const { register, handleSubmit, watch, control, errors } = useForm();
```

4. After the Container component we add the DevTool:

```javascript
  // ...
  return (
    <Container component='main' maxWidth='xs'>
      <DevTool control={control} />
      // ...
```

That's it. You will see the dev tools on the browser as soon as it renders again after you save the file.

## **References** <a name="references"></a>

1. [Get Started Guide of react-hook-form](https://react-hook-form.com/get-started)
2. [API of react-hook-form](https://react-hook-form.com/api/)
3. [Material UI Components](https://material-ui.com/components/)
4. [Example Project on Github](https://github.com/sergiosanchezs/react-validation)
