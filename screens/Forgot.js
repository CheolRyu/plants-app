import React, { Component } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';

const VALID_EMAIL = 'contact@charles.com';
export default class Forgot extends Component {
  state = {
    email: VALID_EMAIL,
    errors: [],
    loading: false,
  };

  handleForgot() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    setTimeout(() => {
      if (email !== VALID_EMAIL) {
        errors.push('email');
      }
      this.setState({ errors, loading: false });

      if (!errors.length) {
        Alert.alert(
          'Passowrd sent!',
          'Please check your email.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ],
          { cancelable: false },
        );
      } else {
        Alert.alert('Opps!', 'Please check your Email adress again.', [{ text: 'Try again' }], {
          cancelable: false,
        });
      }
    }, 2000);
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <KeyboardAvoidingView style={styles.forgot} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Forgot
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Button gradient onPress={() => this.handleForgot()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Forgot
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.goBack()}>
              <Text gray caption center style={{ textDecorationLine: 'underline' }}>
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
