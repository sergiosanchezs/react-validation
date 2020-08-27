import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';

const mingColor = '#387780';
const dartmouthGreenColor = '#2D7638';
const emeraldGreenColor = '#62C370';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: mingColor,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: dartmouthGreenColor,
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

const useStyles = makeStyles(theme => {
  return {
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      color: '#387780',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(3),
      backgroundColor: emeraldGreenColor,
      fontSize: 50,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
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
  };
});

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon style={{ fontSize: 45 }} />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
        >
          <CssTextField
            id='email'
            name='email'
            label='Email Address'
            variant='outlined'
            margin='normal'
            inputRef={register}
            autoComplete='email'
            required
            fullWidth
            autoFocus
            className={classes.margin}
          />
          <CssTextField
            id='password'
            name='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            inputRef={register}
            required
            fullWidth
            autoComplete='current-password'
          />
          <FormControlLabel
            control={
              <Controller
                as={Checkbox}
                control={control}
                name='remember'
                color='primary'
                defaultValue={false}
              />
            }
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2' className={classes.link}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2' className={classes.link}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
