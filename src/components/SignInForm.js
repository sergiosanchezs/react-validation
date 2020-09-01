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
import { useForm, Controller } from 'react-hook-form';

const SignInForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, control } = useForm();

  const onSubmit = data => console.log(data); //alert(JSON.stringify(data));

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
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
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
            className={classes.margin}
            fullWidth
            autoFocus
          />
          {errors.email && (
            <span className={classes.error}>{errors.email.message}</span>
          )}
          <CssTextField
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            inputRef={register({
              required: 'You must provide a password.',
              minLenght: {
                value: 6,
                message: 'Your password must be greater than 6 characters',
              },
            })}
            fullWidth
            autoComplete='current-password'
          />
          {errors.password && (
            <span className={classes.error}>{errors.password.message}</span>
          )}

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
                  <Controller
                    className={classes.checkBox}
                    name='remember'
                    as={Checkbox}
                    control={control}
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
