import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        setMeal(res.data.meals[0]);
      });
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      <Title>Receita do Dia 🍲</Title>
      {meal && (
        <Card style={{ marginVertical: 10 }}>
          <Card.Cover source={{ uri: meal.strMealThumb }} />
          <Card.Content>
            <Title>{meal.strMeal}</Title>
            <Paragraph>{meal.strCategory}</Paragraph>
          </Card.Content>
        </Card>
      )}
      <Title style={{ marginTop: 20 }}>Categorias mais usadas</Title>
      <PieChart
        data={[
          { name: 'Doces', population: 5, color: '#f39c12', legendFontColor: '#7F7F7F', legendFontSize: 12 },
          { name: 'Salgados', population: 8, color: '#27ae60', legendFontColor: '#7F7F7F', legendFontSize: 12 },
          { name: 'Fitness', population: 3, color: '#2980b9', legendFontColor: '#7F7F7F', legendFontSize: 12 },
        ]}
        width={screenWidth - 20}
        height={200}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
  );
}
