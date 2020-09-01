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
