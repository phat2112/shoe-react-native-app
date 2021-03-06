import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {AuthActions} from '../stores/Auth/Actions';
import {AuthSelectors} from '../stores/Auth/Selectors';
import * as helper from '../Utils/helper';
import SecureStorage, {
  ACCESS_CONTROL,
  ACCESSIBLE,
  AUTHENTICATION_TYPE,
} from 'react-native-secure-storage';

const LoginScreen = ({navigation, authLogin, authToken}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const storeToken = async tokenValue => {
    const config = {
      accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: 'auth with yourself',
      service: 'example',
      authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
    };
    const key = 'authToken';
    // console.log(tokenValue)
    await SecureStorage.setItem(key, tokenValue, config);
  };
  const getTokenStorage = async () => {
    const config = {
      accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: 'auth with yourself',
      service: 'example',
      authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
    };
    const key = 'authToken';
    const got = await SecureStorage.getItem(key, config);
    if (got !== null) {
      navigation.navigate('Index');
    }
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidTypeUsername, setInvalidTypeUserName] = useState(false);
  const [invalidTypePassword, setInvalidTypePassword] = useState(false);
  const [valueMsgPass, setValueMsgPass] = useState('')
  const [valueMsg, setValueMsg] = useState('')
  const [toggleForm] = useState(new Animated.Value(-300));
  const toggleFormLogin = valueButton => {
    Animated.timing(toggleForm, {
      toValue: valueButton,
      duration: 200,
      easing: Easing.linear,
    }).start();
  };
  const closeFormhandler = valueButton => {
    Animated.timing(toggleForm, {
      toValue: valueButton,
      duration: 200,
      easing: Easing.linear,
    }).start();
  };
  const closeSigninHandler = toggleForm.interpolate({
    inputRange: [-300, 0],
    outputRange: [1, 0],
  });
  const handleLogin = () => {
    if (!password && !username) {
      setInvalidTypeUserName(true);
      setInvalidTypePassword(true);
      setValueMsg('Field is required');
      setValueMsgPass('Field is required')
    }
    else if(!password && username){
      setInvalidTypeUserName(false);
      setInvalidTypePassword(true);
    }
    else if(password && !username){
      setInvalidTypeUserName(true);
      setInvalidTypePassword(false);
    } 
    else {
      setInvalidTypeUserName(false);
      setInvalidTypePassword(false);
      console.log('authToken',authToken)
      authLogin({email: username, password: password});
    }
    if(authToken !== null){
      navigation.navigate('Index')
    }
  };

  useEffect(() => {
    if (username) {
      let valiedatedMail = helper.emailValidate(username);
      if (!valiedatedMail) {
        setInvalidTypeUserName(true);
        setValueMsg('Your email is invalid')
      } else {
        setInvalidTypeUserName(false);
      }
    }
    if(password && password.length <= 4){
      setValueMsgPass('your pass is too short')
    }
  }, [username, password]);

  useEffect(() => {
    if (authToken !== null) {
      // AsyncStorage.setItem('authToken', authToken);
      storeToken(authToken);
    }
  }, [authToken]);
  useEffect(() => {
    getTokenStorage();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={require('../assets/images/yz-background.jpg')}
        />
        <Animated.View style={{opacity: closeSigninHandler}}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              toggleFormLogin(0);
            }}>
            <Text>Sing In</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.formContainer, {bottom: toggleForm}, {width: windowWidth}]}>
          <Text style={{fontSize: 20, color: '#16222A'}}>Login</Text>
          <TextInput
            style={[
              styles.loginInput,
              {borderColor: invalidTypeUsername ? 'red' : 'black'},
            ]}
            value={username}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
          />
          <Text
            style={[
              styles.inputMsg,
              {display: invalidTypeUsername ? 'flex' : 'none'},
            ]}>
              {valueMsg}
          </Text>
          <TextInput
            style={[
              styles.loginInput,
              {borderColor: invalidTypePassword ? 'red' : 'black'},
            ]}
            value={password}
            placeholder="Password"
            secureTextEntry={true} 
            onChangeText={text => setPassword(text)}
          />
          <Text
            style={[
              styles.inputMsg,
              {display: invalidTypePassword ? 'flex' : 'none'},
            ]}>
            {valueMsgPass}
          </Text>
         <View style={{flex: 1, justifyContent: 'center', alignItems:'center',}}>
         <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              handleLogin();
            }}>
            <Text style={{color: 'white', fontSize: 18}}>Login</Text>
          </TouchableOpacity>
         </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.propTypes = {
  authLogin: PropTypes.func,
  authToken: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: 420,
  },
  signInButton: {
    width: 200,
    position: 'absolute',
    bottom: 40,
    left: 110,
    height: 40,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    zIndex: 2,
  },
  formContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 300,
    bottom: -300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    left: 0,
    zIndex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInput: {
    width: 250,
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    marginVertical: 10,
    paddingLeft: 20,
  },
  submitButton: {
    width: 150,
    height: 40,
    backgroundColor: '#ff9472',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputMsg: {
    color: 'red',
  },
});
const mapStateToProps = state => ({
  authToken: AuthSelectors.getAuthToken(state),
});
const mapDispatchToProps = dispatch => ({
  authLogin: valueLogin => dispatch(AuthActions.authLogin(valueLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
