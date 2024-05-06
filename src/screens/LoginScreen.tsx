import React, { useState, useRef } from "react";
import { BlurView } from "@react-native-community/blur";
import { View, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button, Snackbar, HelperText } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { PaperSelect } from "react-native-paper-select";
import { useDispatch } from "react-redux";
import { saveEmailPassword } from "../store/auth/authSlice";

const LoginScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const singleSelectRef = useRef<any>();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [language, setLanguage] = useState<any>({
    value: i18n.language,
    list: [
      { _id: "1", value: "en" },
      { _id: "2", value: "ar" },
    ],
    selectedList: [],
    error: "",
  });

  const isEmailValid = () => /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = () =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );

  const isSubmitDisabled = () => !isValidEmail || !isValidPassword;

  const handleSnackbarDismiss = () => setSnackbarVisible(false);

  const handleSubmit = () => {
    if (isSubmitDisabled() || !email || !password || (!email && !password)) {
      return;
    }
    setSnackbarVisible(true);
    dispatch(
      saveEmailPassword({
        user: { email: email, password: password },
      })
    );
    navigation.replace("Movies");
  };

  return (
    <ImageBackground
      source={{
        uri: "https://image.tmdb.org/t/p/w500/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
      }}
      style={styles.imgContainer}
    >
      <BlurView
        blurType="light"
        blurAmount={1}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.container}>
        <View style={styles.languageSelectContainer}>
          <PaperSelect
            inputRef={singleSelectRef}
            label="Language"
            value={language.value}
            onSelection={(value: any) => {
              i18n.changeLanguage(value.text);
              setLanguage({
                ...language,
                value: value.text,
                selectedList: value.selectedList,
                error: "",
              });
            }}
            arrayList={[...language.list]}
            selectedArrayList={[...language.selectedList]}
            errorText={language.error}
            multiEnable={false}
            dialogTitleStyle={{ color: "black" }}
            textInputMode="flat"
            textInputStyle={{ fontWeight: "700", color: "yellow" }}
            hideSearchBox={true}
            theme={{
              colors: {
                text: "blue",
                placeholder: "gray",
              },
            }}
            textInputProps={{
              outlineColor: "black",
            }}
            checkboxProps={{
              checkboxColor: "blue",
              checkboxLabelStyle: { color: "black", fontWeight: "700" },
            }}
            textInputOutlineStyle={{
              borderColor: "red",
              borderBottomWidth: 10,
            }}
          />
        </View>
        <TextInput
          label={t("email")}
          value={email}
          onChangeText={(text) => {
            let isValid = isEmailValid();
            setIsValidEmail(isValid);
            setEmail(text);
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <HelperText type="error" visible={!isValidEmail}>
          {t("enterValidEmail")}
        </HelperText>
        <TextInput
          label={t("password")}
          value={password}
          onChangeText={(text) => {
            let isValid = isPasswordValid();
            setIsValidPassword(isValid);
            setPassword(text);
          }}
          secureTextEntry
        />
        <HelperText type="error" visible={!isValidPassword}>
          {t("passwordRequirements")}
        </HelperText>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleSubmit}
        >
          {t("login")}
        </Button>

        <Snackbar
          visible={snackbarVisible}
          onDismiss={handleSnackbarDismiss}
          action={{
            label: "Dismiss",
            onPress: handleSnackbarDismiss,
          }}
        >
          {t("loginSuccessful")}
        </Snackbar>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  languageSelectContainer: {
    position: "absolute",
    bottom: 400,
    right: 20,
    zIndex: 1,
    borderRadius: 50,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    marginTop: 16,
  },
});

export default LoginScreen;
