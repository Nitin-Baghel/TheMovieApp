import React, {useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
} from "react-native";
import { Card, IconButton, Title } from "react-native-paper";
import { useTranslation } from "react-i18next";
import useFetchMovies from "../hooks/useFetchMovies";
import withLoader from "../hoc/withLoader";
import Loader from "../components/Loader";
import Icon from 'react-native-vector-icons/MaterialIcons';

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export interface MovieStateProps {
  results: MovieProps[];
  loading: boolean;
}

const MoviesScreen = ({ navigation, showLoader }) => {
  const { t } = useTranslation();
  const { data, isError, error, loadMore, isLoadMore, isLoading } =
    useFetchMovies();

  useEffect(() => {
    showLoader(isLoading);
  }, [isLoading]);

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


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon={() => <Icon name="arrow-back" size={24} />}
          iconColor={"black"}
          size={20}
          onPress={() => navigation.navigate("Login")}
        />
        <Text style={styles.popularMovieTitle}>{t("popularMovies")}</Text>
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
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withLoader(MoviesScreen);
