import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import { Card, Title } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import useFetchMovies from "../hooks/useFetchMovies";
import Loader from "../components/Loader";
import { logout } from "../store/auth/authSlice";
import responsive from "../utils/responsive";
import Logout from "../assets/logout.svg";

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export interface MovieStateProps {
  results: MovieProps[];
  loading: boolean;
}

const MoviesScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const { data, loadMore, isLoadMore } = useFetchMovies();

  const dispatch = useDispatch();

  const windowWidth = Dimensions.get("window").width;

  const MovieItem = ({ item }) => (
    <Card style={[styles.card, { width: windowWidth / 2 - 24 }]}>
      <View style={styles.cardContent}>
        <Card.Cover
          style={styles.cardImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`,
          }}
        />
        <Card.Content>
          <Title>{item?.title}</Title>
        </Card.Content>
      </View>
    </Card>
  );

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      {data && (
        <>
          <View style={styles.header}>
            <Text style={styles.popularMovieTitle}>{t("popularMovies")}</Text>
            <Logout
              width={responsive.width(18)}
              height={responsive.width(18)}
              onPress={handleLogout}
            />
          </View>

          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={data}
            renderItem={({ item }) => <MovieItem item={item} />}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            numColumns={2}
            ListFooterComponent={isLoadMore ? <Loader /> : null}
            keyExtractor={(item) => `${item.id.toString()}${Math.random()}`}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    margin: 8,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 8,
  },
  popularMovieTitle: {
    // textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    color: "gray",
    marginHorizontal: 7,
  },
  header: {
    flexDirection: "row",
    paddingVertical: responsive.padding(10),
    justifyContent: "space-between",
  },
});

export default MoviesScreen;
